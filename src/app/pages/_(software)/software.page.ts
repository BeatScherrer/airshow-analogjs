import { Component, inject } from "@angular/core";
import { NavigationComponent } from "@components/navigation/navigation.component";
import { FooterComponent } from "@components/footer/footer.component";
import { AppStateService, ThemeMode } from "@services/app-state.service";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs/operators";

@Component({
  selector: "app-software",
  imports: [NavigationComponent, FooterComponent],
  templateUrl: "./software.page.html",
})
export default class SoftwareComponent {
  appStateService = inject(AppStateService);

  isLightMode = toSignal(
    this.appStateService
      .getThemeMode()
      .pipe(map((mode) => mode === ThemeMode.LIGHT)),
  );
}
