import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { toSignal } from "@angular/core/rxjs-interop";
import { Router } from "@angular/router";
import { AppStateService, ThemeMode } from "@services/app-state.service";
import { MenubarModule } from "primeng/menubar";
import {
  ToggleSwitchChangeEvent,
  ToggleSwitchModule,
} from "primeng/toggleswitch";
import { map } from "rxjs/operators";

@Component({
  selector: "app-navigation",
  imports: [ToggleSwitchModule, MenubarModule, FormsModule],
  templateUrl: "./navigation.component.html",
  styleUrl: "./navigation.component.css",
})
export class NavigationComponent {
  router = inject(Router);
  appStateService = inject(AppStateService);

  isLightMode = toSignal(
    this.appStateService
      .getThemeMode()
      .pipe(map((mode) => mode === ThemeMode.LIGHT)),
  );

  items = [
    {
      label: "Router",
      icon: "pi pi-palette",
      items: [
        {
          label: "Installation",
          route: "/installation",
        },
        {
          label: "Configuration",
          route: "/configuration",
        },
      ],
    },
    {
      label: "Programmatic",
      icon: "pi pi-link",
      command: () => {
        this.router.navigate(["/installation"]);
      },
    },
    {
      label: "External",
      icon: "pi pi-home",
      items: [
        {
          label: "Angular",
          url: "https://angular.io/",
        },
        {
          label: "Vite.js",
          url: "https://vitejs.dev/",
        },
      ],
    },
  ];

  themeModeChanged(event: ToggleSwitchChangeEvent) {
    const light_mode = event.checked;
    const theme_mode = light_mode ? ThemeMode.LIGHT : ThemeMode.DARK;

    this.appStateService.setThemeMode(theme_mode);
  }
}
