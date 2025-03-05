import { Component, signal } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [ButtonModule],
  template: `
    <div>
      <a href="https://analogjs.org/" target="_blank">
        <img alt="Analog Logo" class="logo analog" src="/analog.svg" />
      </a>
    </div>

 <p-button label="Check" />


    <h2>Analog</h2>

    <h3>The fullstack meta-framework for Angular!</h3>

    <div class="card">
      <button type="button" (click)="increment()">Count {{ count() }}</button>
    </div>

    <p class="read-the-docs">
      <a href="https://analogjs.org" target="_blank">Docs</a> |
      <a href="https://github.com/analogjs/analog" target="_blank">GitHub</a> |
      <a href="https://github.com/sponsors/brandonroberts" target="_blank">
        Sponsor
      </a>
    </p>
  `,
  styles: `
    .logo {
      will-change: filter;
    }

    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }

    .read-the-docs > * {
      color: #fff;
    }

    @media (prefers-color-scheme: light) {
      .read-the-docs > * {
        color: #213547;
      }
    }
  `,
})
export default class HomeComponent {
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }
}
