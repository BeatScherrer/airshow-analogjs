import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-video-player",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.css"],
})
export class VideoPlayerComponent
  implements AfterViewInit, OnDestroy, OnChanges
{
  @Input() videoSrc: string = "";
  @Input() positionPercent: number = 0; // 0-100
  @Input() autoplay: boolean = false;
  @Input() muted: boolean = true;
  @Input() loop: boolean = false;
  @Input() controls: boolean = true;
  @Input() width: string = "100%";
  @Input() height: string = "auto";
  @Input() poster: string = "";
  @Input() showPositionIndicator: boolean = true;

  @Output() loadedData = new EventEmitter<void>();
  @Output() timeUpdate = new EventEmitter<number>();
  @Output() durationChange = new EventEmitter<number>();

  @ViewChild("videoElement", { static: true })
  videoElement!: ElementRef<HTMLVideoElement>;

  protected isVideoLoaded = false;
  private pendingSeek = false;

  ngAfterViewInit() {
    this.setupVideoListeners();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["positionPercent"] && !changes["positionPercent"].firstChange) {
      this.seekToPosition();
    }

    if (changes["videoSrc"] && !changes["videoSrc"].firstChange) {
      this.isVideoLoaded = false;
      this.pendingSeek = true;
    }
  }

  ngOnDestroy() {
    if (this.videoElement?.nativeElement) {
      this.removeVideoListeners();
    }
  }

  private setupVideoListeners() {
    const video = this.videoElement.nativeElement;

    video.addEventListener("loadeddata", () => {
      this.isVideoLoaded = true;
      this.loadedData.emit();

      // If there's a pending seek or initial position, apply it
      if (this.pendingSeek || this.positionPercent > 0) {
        this.seekToPosition();
        this.pendingSeek = false;
      }
    });

    video.addEventListener("timeupdate", () => {
      if (this.isVideoLoaded && video.duration) {
        const currentPercent = (video.currentTime / video.duration) * 100;
        this.timeUpdate.emit(currentPercent);
      }
    });

    video.addEventListener("durationchange", () => {
      if (video.duration) {
        this.durationChange.emit(video.duration);
      }
    });

    video.addEventListener("loadstart", () => {
      this.isVideoLoaded = false;
    });
  }

  private removeVideoListeners() {
    const video = this.videoElement.nativeElement;
    video.removeEventListener("loadeddata", this.setupVideoListeners);
    video.removeEventListener("timeupdate", this.setupVideoListeners);
    video.removeEventListener("durationchange", this.setupVideoListeners);
    video.removeEventListener("loadstart", this.setupVideoListeners);
  }

  private seekToPosition() {
    if (!this.isVideoLoaded) {
      this.pendingSeek = true;
      return;
    }

    const video = this.videoElement.nativeElement;
    if (video.duration && !isNaN(video.duration)) {
      const targetTime = (this.positionPercent / 100) * video.duration;
      const newTime = Math.max(0, Math.min(targetTime, video.duration));
      
      // Only seek if the difference is significant to reduce jankiness
      if (Math.abs(video.currentTime - newTime) > 0.033) { // ~1 frame at 30fps
        video.currentTime = newTime;
      }
    }
  }

  // Public methods for external control
  play() {
    return this.videoElement.nativeElement.play();
  }

  pause() {
    this.videoElement.nativeElement.pause();
  }

  setPosition(percent: number) {
    this.positionPercent = Math.max(0, Math.min(100, percent));
    this.seekToPosition();
  }

  getCurrentTime(): number {
    return this.videoElement.nativeElement.currentTime;
  }

  getDuration(): number {
    return this.videoElement.nativeElement.duration || 0;
  }

  getCurrentPercent(): number {
    const video = this.videoElement.nativeElement;
    if (video.duration && !isNaN(video.duration)) {
      return (video.currentTime / video.duration) * 100;
    }
    return 0;
  }
}
