import { Component, signal } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { NavigationComponent } from "@components/navigation/navigation.component";
import { FooterComponent } from "@components/footer/footer.component";
import { ContactComponent } from "@components/contact/contact.component";
import { NotificationsComponent } from "@components/notifications/notifications.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    ButtonModule,
    NavigationComponent,
    FooterComponent,
    ContactComponent,
    NotificationsComponent,
  ],
  templateUrl: "./index.page.html",
})
export default class HomeComponent {
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }
}
