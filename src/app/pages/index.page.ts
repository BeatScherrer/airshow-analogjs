import { Component, signal } from "@angular/core";
import { NavigationComponent } from "@components/navigation/navigation.component";
import { FooterComponent } from "@components/footer/footer.component";
import { ContactComponent } from "@components/contact/contact.component";
import { NotificationsComponent } from "@components/notifications/notifications.component";
import { YouTubePlayer } from "@angular/youtube-player";
import { MapComponent } from "@components/map/map.component";
import { HeroComponent } from "@components/hero/hero.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    NavigationComponent,
    FooterComponent,
    ContactComponent,
    NotificationsComponent,
    YouTubePlayer,
    MapComponent,
    HeroComponent,
  ],
  templateUrl: "./index.page.html",
})
export default class HomeComponent {}
