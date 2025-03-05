import { Component, signal } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [ButtonModule],
  templateUrl: "./index.page.html",
})
export default class HomeComponent {
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }
}
