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
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-navigation",
  imports: [ToggleSwitchModule, MenubarModule, FormsModule, CommonModule],
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
      label: "Home",
      icon: "pi pi-home",
      command: () => {
        this.router.navigate(["/"]);
      },
    },
    {
      label: "About",
      icon: "pi pi-home",
      command: () => {
        this.router.navigate(["/about"]);
      },
      // items: [
      //   {
      //     label: "Installation",
      //     route: "/installation",
      //   },
      //   {
      //     label: "Configuration",
      //     route: "/configuration",
      //   },
      // ],
    },
    {
      label: "Software",
      icon: "pi pi-code",
      command: () => {
        this.router.navigate(["/software"]);
      },
    },
    {
      label: "Healthcare",
      icon: "pi pi-wave-pulse",
      command: () => {
        this.router.navigate(["/healthcare"]);
      },
    },
    {
      label: "Career",
      icon: "pi pi-briefcase",
      command: () => {
        this.router.navigate(["/career"]);
      },
    },
  ];

  themeModeChanged(event: ToggleSwitchChangeEvent) {
    const light_mode = event.checked;
    const theme_mode = light_mode ? ThemeMode.LIGHT : ThemeMode.DARK;

    this.appStateService.setThemeMode(theme_mode);
  }
}
