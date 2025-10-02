import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatureCardComponent } from "@components/feature-card/feature-card.component";

@Component({
  selector: "app-features-section",
  standalone: true,
  imports: [CommonModule, FeatureCardComponent],
  templateUrl: "./features-section.component.html",
})
export class FeaturesSectionComponent {
  features = [
    {
      icon: "pi pi-cog",
      title: "Erweiterte Automatisierung",
      description:
        "Moderne autonome Systeme, die sich an die Umgebung anpassen.",
    },
    {
      icon: "pi pi-chart-line",
      title: "Echtzeit-Analysen",
      description:
        "Umfassendes Überwachungs- und Analyse-Dashboard für optimale Leistungseinblicke.",
    },
    {
      icon: "pi pi-users",
      title: "Experten-Support",
      description:
        "Technischer Support von unserem Team aus Robotik-Ingenieuren und Spezialisten.",
    },
  ];
}
