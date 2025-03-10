import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { TextareaModule } from "primeng/textarea";
import { InputTextModule } from "primeng/inputtext";
import { FloatLabelModule } from "primeng/floatlabel";
import { IftaLabelModule } from "primeng/iftalabel";
import { ButtonModule } from "primeng/button";
import { MessageModule } from "primeng/message";
import { CardModule } from "primeng/card";

@Component({
  selector: "app-contact",
  imports: [
    InputTextModule,
    TextareaModule,
    ReactiveFormsModule,
    FloatLabelModule,
    IftaLabelModule,
    ButtonModule,
    MessageModule,
    CardModule,
  ],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
  });

  onSubmit() {
    console.warn(this.contactForm.value);
  }
}
