import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'filled' | 'outlined' | 'text' | 'gradient';
export type ButtonColor = 'primary' | 'secondary' | 'white' | 'red';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'filled';
  @Input() color: ButtonColor = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() icon: string = '';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() loading: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() ariaLabel: string = '';

  @Output() click = new EventEmitter<Event>();

  @HostBinding('class') get cssClasses() {
    return [
      'app-button',
      `app-button--${this.variant}`,
      `app-button--${this.color}`,
      `app-button--${this.size}`,
      this.disabled ? 'app-button--disabled' : '',
      this.fullWidth ? 'app-button--full-width' : '',
      this.loading ? 'app-button--loading' : ''
    ].filter(Boolean).join(' ');
  }

  onClick(event: Event) {
    if (!this.disabled && !this.loading) {
      this.click.emit(event);
    }
  }
}