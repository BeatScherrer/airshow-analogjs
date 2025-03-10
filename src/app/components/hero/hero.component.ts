import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { AppStateService, ThemeMode } from "@services/app-state.service";
import { ButtonModule } from "primeng/button";
import { map } from "rxjs/operators";

@Component({
  selector: "app-hero",
  imports: [ButtonModule],
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.css",
})
export class HeroComponent {
  appStateService = inject(AppStateService);

  isLightMode = toSignal(
    this.appStateService
      .getThemeMode()
      .pipe(map((mode) => mode === ThemeMode.LIGHT)),
  );
}
