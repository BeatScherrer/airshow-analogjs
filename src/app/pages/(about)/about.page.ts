import { Component } from "@angular/core";
import { ContactComponent } from "@components/contact/contact.component";
import { FooterComponent } from "@components/footer/footer.component";
import { NavigationComponent } from "@components/navigation/navigation.component";

@Component({
  selector: "app-about",
  imports: [ContactComponent, FooterComponent, NavigationComponent],
  templateUrl: "./about.page.html",
})
export default class AboutComponent {}
