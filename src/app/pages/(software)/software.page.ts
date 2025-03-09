import { Component } from "@angular/core";
import { NavigationComponent } from "@components/navigation/navigation.component";
import { FooterComponent } from "@components/footer/footer.component";

@Component({
  selector: "app-software",
  imports: [NavigationComponent, FooterComponent],
  templateUrl: "./software.page.html",
})
export default class SoftwareComponent {}
