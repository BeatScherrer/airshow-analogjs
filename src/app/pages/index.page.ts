import { Component } from "@angular/core";
import { NavigationComponent } from "@components/navigation/navigation.component";
import { FooterComponent } from "@components/footer/footer.component";
import { ContactComponent } from "@components/contact/contact.component";
import { ProgramComponent } from "@components/program/program.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    NavigationComponent,
    FooterComponent,
    ContactComponent,
    ProgramComponent,
  ],
  templateUrl: "./index.page.html",
})
export default class HomeComponent {}
