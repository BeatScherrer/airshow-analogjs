import { Component, inject, signal } from "@angular/core";
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

  isLightMode = toSignal(
    this.appStateService
      .getThemeMode()
      .pipe(map((mode) => mode === ThemeMode.LIGHT)),
  );
}
