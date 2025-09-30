import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
  @Input() variant: 'default' | 'large' | 'media' = 'default';
}