import { ChangeDetectorRef, Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { Toast } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { Ripple } from "primeng/ripple";
import { ProgressBar } from "primeng/progressbar";
import { interval } from "rxjs";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  standalone: true,
  imports: [Toast, ButtonModule, Ripple, ProgressBar],
  providers: [MessageService],
})
export class NotificationsComponent {
  visible = false;

  progress = 0;

  constructor(
    private messageService: MessageService,
    private cdr: ChangeDetectorRef,
  ) {
    // interval(10).subscribe(() => {
    // });
  }

  onClose() {
    this.visible = false;
  }

  sendMessage() {
    this.messageService.add({
      severity: "info",
      summary: "Info",
      detail: "Message Content",
    });
  }
}
