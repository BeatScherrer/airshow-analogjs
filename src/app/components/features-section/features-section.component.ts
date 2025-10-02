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
      title: "Advanced Automation",
      description:
        "Modern autonomous systems that adapt to the environment and deliver robust behaviors.",
    },
    {
      icon: "pi pi-chart-line",
      title: "Real-time Analytics",
      description:
        "Comprehensive monitoring and analytics dashboard for optimal performance insights.",
    },
    {
      icon: "pi pi-users",
      title: "Expert Support",
      description:
        "Technical support from our team of robotics engineers and specialists.",
    },
  ];
}
