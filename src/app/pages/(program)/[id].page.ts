import { CommonModule } from "@angular/common";
import { Component, effect, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute, Router } from "@angular/router";
import { ProgramService, Program } from "@services/strapi/program.service";

@Component({
  selector: "app-program-detail",
  imports: [CommonModule],
  templateUrl: "./[id].page.html",
  styleUrl: "./[id].page.css",
})
export default class ProgramDetailPage {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private programService = inject(ProgramService);

  programId = toSignal(this.route.params);
  program = toSignal(
    this.programService.getProgramById(this.programId()?.['id'])
  );

  constructor() {
    effect(() => {
      console.log('Program detail:', this.program());
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  getThumbnailUrl(): string | null {
    const programData = this.program()?.data;
    if (!programData?.Thumbnail) return null;
    
    if (Array.isArray(programData.Thumbnail)) {
      return programData.Thumbnail[0]?.url || null;
    }
    
    return programData.Thumbnail.url;
  }

  getThumbnailAlt(): string {
    const programData = this.program()?.data;
    if (!programData?.Thumbnail) return programData?.Title || 'Program';
    
    if (Array.isArray(programData.Thumbnail)) {
      return programData.Thumbnail[0]?.alternativeText || programData.Title;
    }
    
    return programData.Thumbnail.alternativeText || programData.Title;
  }
}