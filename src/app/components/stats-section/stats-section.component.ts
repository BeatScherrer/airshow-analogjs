import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-section.component.html',
})
export class StatsSectionComponent {
  stats = [
    { value: '500+', label: 'Robots Deployed' },
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '50+', label: 'Global Partners' },
    { value: '24/7', label: 'Support Available' }
  ];
}