import { CommonModule } from "@angular/common";
import { Component, Input, inject } from "@angular/core";
import { Router } from "@angular/router";
import { Program, StrapiImage } from "@services/strapi/program.service";

@Component({
  selector: "app-program-item",
  imports: [CommonModule],
  templateUrl: "./program-item.component.html",
  styleUrl: "./program-item.component.css",
})
export class ProgramItemComponent {
  @Input() program!: Program;
  @Input() programId!: string;
  
  private router = inject(Router);

  getThumbnailUrl(): string | null {
    if (!this.program.Thumbnail) return null;
    
    if (Array.isArray(this.program.Thumbnail)) {
      return this.program.Thumbnail[0]?.url || null;
    }
    
    return this.program.Thumbnail.url;
  }

  getThumbnailAlt(): string {
    if (!this.program.Thumbnail) return this.program.Title;
    
    if (Array.isArray(this.program.Thumbnail)) {
      return this.program.Thumbnail[0]?.alternativeText || this.program.Title;
    }
    
    return this.program.Thumbnail.alternativeText || this.program.Title;
  }

  viewDetails(): void {
    this.router.navigate(['/program', this.programId]);
  }
}