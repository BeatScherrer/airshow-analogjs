import { Component, signal } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { NavigationComponent } from "@components/navigation/navigation.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [ButtonModule, NavigationComponent],
  templateUrl: "./index.page.html",
})
export default class HomeComponent {
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }
}
