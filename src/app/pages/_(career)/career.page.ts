import { Component } from "@angular/core";
import { FooterComponent } from "@components/footer/footer.component";
import { NavigationComponent } from "@components/navigation/navigation.component";

@Component({
  selector: "app-career",
  imports: [NavigationComponent, FooterComponent],
  templateUrl: "./career.page.html",
})
export default class CareerComponent {}
