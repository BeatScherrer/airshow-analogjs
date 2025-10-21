import { CommonModule } from "@angular/common";
import { Component, effect, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ProgramService } from "@services/strapi/program.service";
import { ProgramItemComponent } from "../program-item/program-item.component";
import { StrapiService } from "@services/strapi/strapi.service";

@Component({
  selector: "app-program",
  imports: [CommonModule, ProgramItemComponent],
  templateUrl: "./program.component.html",
  styleUrl: "./program.component.css",
})
export class ProgramComponent {
  programService = inject(ProgramService);
  strapiService = inject(StrapiService);

  program = toSignal(this.programService.getProgram());

  constructor() {
    effect(() => {
      console.log(this.program());
    });
  }
}
