import {
  type AfterViewInit,
  Component,
  type ElementRef,
  Input,
  type OnDestroy,
  type OnInit,
  ViewChild,
} from "@angular/core";

/* NOTE: implementation approach from https://dev.to/pipscript/creating-a-png-sequence-animation-using-react-and-scss-k71 */

@Component({
  selector: "app-png-sequence-animation",
  templateUrl: "./png-sequence-animation.component.html",
  styleUrl: "./png-sequence-animation.component.css",
})
export class PngSequenceAnimationComponent implements OnInit, AfterViewInit {
  @ViewChild("canvas", { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  @Input() frameCount: number = 50;
  @Input() basePath: string = "";
  @Input() fileExtension: string = ".png";
  @Input() digits: number = 4;
  @Input() scrollFactor: number = 1.0;

  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private images: HTMLImageElement[] = [];
  private imagesLoaded = 0;
  private allImagesLoaded = false;
  private currentFrameIndex = 0;

  ngOnInit() {
    this.preloadImages();
  }

  ngAfterViewInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext("2d")!;
    this.setupCanvas();
    this.setupScrollListener();
  }

  private preloadImages() {
    for (let i = 1; i <= this.frameCount; i++) {
      const img = new Image();
      const imagePath = this.getFramePath(i);

      img.onload = () => {
        this.imagesLoaded++;
        if (this.imagesLoaded === this.frameCount) {
          this.allImagesLoaded = true;
          if (this.canvas && this.ctx) {
            this.currentFrameIndex = 1;
            this.updateImage(1);
          }
        }
      };

      img.onerror = (error) => {
        console.error(`Failed to load image ${i}: ${imagePath}`, error);
        this.imagesLoaded++;

        if (this.imagesLoaded === this.frameCount) {
          this.allImagesLoaded = true;
          if (this.canvas && this.ctx) {
            this.currentFrameIndex = 1;
            this.updateImage(1);
          }
        }
      };

      img.src = imagePath;
      this.images[i] = img;
    }
  }

  private getFramePath(index: number): string {
    const paddedIndex = index.toString().padStart(this.digits, "0");
    return `${this.basePath}${paddedIndex}${this.fileExtension}`;
  }

  private setupCanvas() {
    const updateCanvasSize = () => {
      const container = this.canvas.parentElement!;
      const rect = container.getBoundingClientRect();
      
      this.canvas.width = rect.width;
      this.canvas.height = rect.height;

      if (this.allImagesLoaded && this.images[this.currentFrameIndex]) {
        this.drawImage(this.currentFrameIndex);
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
  }

  private onScroll(): void {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const container = this.canvas.parentElement!;
    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;
    const viewportHeight = window.innerHeight;

    // Calculate when container enters and exits viewport
    const containerStart = containerTop;
    const containerEnd = containerTop + containerHeight;
    const viewportStart = scrollTop;
    const viewportEnd = scrollTop + viewportHeight;

    // Check if container is in viewport
    if (viewportEnd > containerStart && viewportStart < containerEnd) {
      // Calculate how much of the container has been scrolled through
      const scrollStart = Math.max(containerStart - viewportHeight, 0);
      const scrollEnd = containerStart + containerHeight;
      const totalScrollDistance = scrollEnd - scrollStart;
      
      const currentScrollProgress = Math.max(0, scrollTop - scrollStart);
      const scrollFraction = Math.min(currentScrollProgress / totalScrollDistance, 1) * this.scrollFactor;
      
      const frameIndex = Math.min(
        this.frameCount,
        Math.max(1, Math.floor(scrollFraction * this.frameCount) + 1),
      );

      if (frameIndex !== this.currentFrameIndex) {
        this.currentFrameIndex = frameIndex;
        requestAnimationFrame(() => this.updateImage(frameIndex));
      }
    }
  }

  private setupScrollListener() {
    window.addEventListener("scroll", this.onScroll.bind(this), {
      passive: true,
    });
  }

  private updateImage(frameIndex: number) {
    if (this.allImagesLoaded && this.images[frameIndex]) {
      this.drawImage(frameIndex);
    }
  }

  private drawImage(frameIndex: number) {
    const img = this.images[frameIndex];
    if (!img || !this.ctx) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const canvasAspect = this.canvas.width / this.canvas.height;
    const imgAspect = img.width / img.height;

    let drawWidth = 0;
    let drawHeight = 0;
    let drawX = 0;
    let drawY = 0;

    if (canvasAspect > imgAspect) {
      drawWidth = this.canvas.width;
      drawHeight = this.canvas.width / imgAspect;
      drawX = 0;
      drawY = (this.canvas.height - drawHeight) / 2;
    } else {
      drawWidth = this.canvas.height * imgAspect;
      drawHeight = this.canvas.height;
      drawX = (this.canvas.width - drawWidth) / 2;
      drawY = 0;
    }

    this.ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }
}
