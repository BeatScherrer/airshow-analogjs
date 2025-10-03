import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { toSignal } from "@angular/core/rxjs-interop";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from "@angular/router";
import { AppStateService, ThemeMode } from "@services/app-state.service";
import {
  ToggleSwitchChangeEvent,
  ToggleSwitchModule,
} from "primeng/toggleswitch";
import { map } from "rxjs/operators";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-navigation",
  imports: [
    ToggleSwitchModule,
    FormsModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: "./navigation.component.html",
  styleUrl: "./navigation.component.css",
})
export class NavigationComponent {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  appStateService = inject(AppStateService);

  isLightMode = toSignal(
    this.appStateService
      .getThemeMode()
      .pipe(map((mode) => mode === ThemeMode.LIGHT)),
  );

  isMobileMenuOpen = false;

  items = [
    {
      label: "Startseite",
      icon: "pi pi-home",
      route: "/",
    },
    {
      label: "Über uns",
      icon: "pi pi-building",
      route: "/about",
    },
    {
      label: "Bed Mover",
      icon: "pi pi-wave-pulse",
      route: "/healthcare",
    },
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeMobileMenu();
  }

  themeModeChanged(event: ToggleSwitchChangeEvent) {
    const light_mode = event.checked;
    const theme_mode = light_mode ? ThemeMode.LIGHT : ThemeMode.DARK;

    this.appStateService.setThemeMode(theme_mode);
  }
}
