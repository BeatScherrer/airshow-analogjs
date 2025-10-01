import { Component, OnDestroy, OnInit, HostListener } from "@angular/core";
import { FooterComponent } from "@components/footer/footer.component";
import { NavigationComponent } from "@components/navigation/navigation.component";
import { VideoPlayerComponent } from "@components/video-player/video-player.component";
import { FeatureCardComponent } from "@components/feature-card/feature-card.component";

@Component({
  selector: "app-healthcare",
  imports: [
    NavigationComponent,
    FooterComponent,
    VideoPlayerComponent,
    FeatureCardComponent,
  ],
  templateUrl: "./healthcare.page.html",
})
export default class HealthcareComponent implements OnInit, OnDestroy {
  videoPosition = 0;
  videoSrc = "/clinic_mover/clinic_mover_elevator.webm";
  titleOpacity = 1;
  videoTransform = "translateY(0) scale(1)";
  private animationFrameId?: number;

  ngOnInit() {
    this.updateVideoPosition();
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener("window:scroll", ["$event"])
  onScroll() {
    // Use requestAnimationFrame for smooth updates
    if (!this.animationFrameId) {
      this.animationFrameId = requestAnimationFrame(() => {
        this.updateVideoPosition();
        this.animationFrameId = undefined;
      });
    }
  }

  private updateVideoPosition() {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    // Calculate scroll percentage (0-100)
    const scrollPercent = Math.min(
      Math.max((scrollTop / documentHeight) * 300, 0),
      100,
    );

    // Update video position based on scroll
    this.videoPosition = scrollPercent;

    // Calculate title opacity (fade out on scroll)
    // Fade starts immediately and completes at 30% scroll
    const fadeThreshold = 30;
    this.titleOpacity = Math.max(0, 1 - scrollPercent / fadeThreshold);

    // Calculate video transform (move up and scale on scroll)
    const translateY = -scrollPercent * 2; // Move up 2px per scroll percent
    const scale = 1 + (scrollPercent / 100) * 0.5; // Scale from 1 to 1.5
    this.videoTransform = `translateY(${translateY}px) scale(${scale})`;
  }

  onVideoTimeUpdate(percent: number) {
    // Don't update position from video when controlled by scroll
  }

  onVideoLoaded() {
    console.log("Healthcare video loaded");
    this.updateVideoPosition();
  }

  onVideoDurationChange(duration: number) {
    console.log(`Video duration: ${duration} seconds`);
  }
}
