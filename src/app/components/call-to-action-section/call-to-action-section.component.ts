import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-call-to-action-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './call-to-action-section.component.html',
})
export class CallToActionSectionComponent {
}