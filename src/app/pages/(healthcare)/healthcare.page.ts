import { Component } from "@angular/core";
import { FooterComponent } from "@components/footer/footer.component";
import { NavigationComponent } from "@components/navigation/navigation.component";

@Component({
  selector: "app-healthcare",
  imports: [NavigationComponent, FooterComponent],
  templateUrl: "./healthcare.page.html",
})
export default class HealthcareComponent {}
