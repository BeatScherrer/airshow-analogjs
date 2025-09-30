import { Component } from "@angular/core";
import { FooterComponent } from "@components/footer/footer.component";
import { NavigationComponent } from "@components/navigation/navigation.component";
import { VideoPlayerComponent } from "@components/video-player/video-player.component";

@Component({
  selector: "app-healthcare",
  imports: [NavigationComponent, FooterComponent, VideoPlayerComponent],
  templateUrl: "./healthcare.page.html",
})
export default class HealthcareComponent {
  videoPosition = 0;
  videoSrc = '/clinic_mover_elevator.mkv';

  onVideoTimeUpdate(percent: number) {
    this.videoPosition = percent;
  }

  onVideoLoaded() {
    console.log('Healthcare video loaded');
  }

  onVideoDurationChange(duration: number) {
    console.log(`Video duration: ${duration} seconds`);
  }
}
