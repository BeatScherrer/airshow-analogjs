import { Component } from "@angular/core";
import { GoogleMap } from "@angular/google-maps";

@Component({
  selector: "app-map",
  imports: [GoogleMap],
  templateUrl: "./map.component.html",
  styleUrl: "./map.component.css",
})
export class MapComponent {
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 4;
}
