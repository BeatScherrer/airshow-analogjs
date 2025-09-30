import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from '@components/feature-card/feature-card.component';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule, FeatureCardComponent],
  templateUrl: './features-section.component.html',
})
export class FeaturesSectionComponent {
  features = [
    {
      icon: 'pi pi-cog',
      title: 'Advanced Automation',
      description: 'Cutting-edge autonomous systems that adapt to complex environments and deliver precise results.'
    },
    {
      icon: 'pi pi-shield',
      title: 'Enterprise Security',
      description: 'Military-grade security protocols ensuring your robotic systems operate safely and securely.'
    },
    {
      icon: 'pi pi-chart-line',
      title: 'Real-time Analytics',
      description: 'Comprehensive monitoring and analytics dashboard for optimal performance insights.'
    },
    {
      icon: 'pi pi-users',
      title: 'Expert Support',
      description: '24/7 technical support from our team of robotics engineers and specialists.'
    }
  ];
}