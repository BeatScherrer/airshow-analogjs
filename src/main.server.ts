import "zone.js/node";
import "@angular/platform-server/init";
import { render } from "@analogjs/router/server";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { AppComponent } from "./app/app.component";
import { config } from "./app/app.config.server";

injectSpeedInsights();

export default render(AppComponent, config);
