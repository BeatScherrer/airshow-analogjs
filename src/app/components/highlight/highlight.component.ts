import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { AppStateService, ThemeMode } from "@services/app-state.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-highlight",
  imports: [],
  templateUrl: "./highlight.component.html",
  styleUrl: "./highlight.component.css",
})
export class HighlightComponent {
  appStateService = inject(AppStateService);

  isLightMode = toSignal(
    this.appStateService
      .getThemeMode()
      .pipe(map((mode) => mode === ThemeMode.LIGHT)),
  );
}
