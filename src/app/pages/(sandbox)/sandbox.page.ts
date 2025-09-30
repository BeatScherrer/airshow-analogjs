import { Component } from '@angular/core';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { FooterComponent } from '@components/footer/footer.component';
import { ButtonComponent } from '@components/button/button.component';
import { VideoPlayerComponent } from '@components/video-player/video-player.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sandbox',
  standalone: true,
  imports: [
    NavigationComponent,
    FooterComponent,
    ButtonComponent,
    VideoPlayerComponent,
    CommonModule,
  ],
  templateUrl: './sandbox.page.html',
})
export default class SandboxComponent {
  loading = false;
  
  // Video demo properties
  videoPosition = 25; // Start at 25%
  demoVideoSrc = '/demo-video.mp4'; // You can replace with actual video path

  onButtonClick(buttonName: string) {
    console.log(`${buttonName} clicked!`);
  }

  toggleLoading() {
    this.loading = !this.loading;
    if (this.loading) {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    }
  }

  // Video control methods
  setVideoPosition(percent: number) {
    this.videoPosition = percent;
  }

  onVideoTimeUpdate(percent: number) {
    // console.log(`Video position: ${percent.toFixed(1)}%`);
  }

  onVideoLoaded() {
    console.log('Video loaded successfully');
  }

  onVideoDurationChange(duration: number) {
    console.log(`Video duration: ${duration} seconds`);
  }
}