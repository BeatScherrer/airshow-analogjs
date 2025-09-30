import { Component } from '@angular/core';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { FooterComponent } from '@components/footer/footer.component';
import { ButtonComponent } from '@components/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sandbox',
  standalone: true,
  imports: [
    NavigationComponent,
    FooterComponent,
    ButtonComponent,
    CommonModule,
  ],
  templateUrl: './sandbox.page.html',
})
export default class SandboxComponent {
  loading = false;

  onButtonClick(buttonName: string) {
    console.log(`${buttonName} clicked!`);
  }

  toggleLoading() {
    this.loading = !this.loading;
    if (this.loading) {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    }
  }
}