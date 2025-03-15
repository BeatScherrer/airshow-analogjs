import {
  Component,
  computed,
  HostListener,
  inject,
  signal,
} from "@angular/core";
import { NavigationComponent } from "@components/navigation/navigation.component";
import { FooterComponent } from "@components/footer/footer.component";
import { ContactComponent } from "@components/contact/contact.component";
import { NotificationsComponent } from "@components/notifications/notifications.component";
import { YouTubePlayer } from "@angular/youtube-player";
import { MapComponent } from "@components/map/map.component";
import { HeroComponent } from "@components/hero/hero.component";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs/operators";
import { AppStateService, ThemeMode } from "@services/app-state.service";

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
export default class HomeComponent {
  appStateService = inject(AppStateService);
  screenHeight = signal(0);
  screenWidth = signal(0);
  videoWidth = computed(() => Math.round(this.screenWidth() * 0.9));

  isLightMode = toSignal(
    this.appStateService
      .getThemeMode()
      .pipe(map((mode) => mode === ThemeMode.LIGHT)),
  );

  constructor() {
    this.getScreenSize();
  }

  @HostListener("window:resize", ["$event"])
  getScreenSize(event?: any) {
    this.screenWidth.set(window.innerWidth);
    this.screenHeight.set(window.innerHeight);
  }
}
