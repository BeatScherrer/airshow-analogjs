import { Component } from "@angular/core";
import { ContactComponent } from "@components/contact/contact.component";
import { FooterComponent } from "@components/footer/footer.component";
import { NavigationComponent } from "@components/navigation/navigation.component";
import { TimelineModule } from "primeng/timeline";
import { CardModule } from "primeng/card";

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}
@Component({
  selector: "app-about",
  imports: [
    ContactComponent,
    FooterComponent,
    NavigationComponent,
    TimelineModule,
    CardModule,
  ],
  templateUrl: "./about.page.html",
})
export default class AboutComponent {
  events: EventItem[] = [
    {
      status: "Ordered",
      date: "15/10/2020 10:30",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      status: "Processing",
      date: "15/10/2020 14:00",
      icon: "pi pi-cog",
      color: "#673AB7",
    },
    {
      status: "Shipped",
      date: "15/10/2020 16:15",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
    },
    {
      status: "Delivered",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
  ];
}
