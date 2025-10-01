import "zone.js/node";
import "@angular/platform-server/init";
import { render } from "@analogjs/router/server";
import { AppComponent } from "./app/app.component";
import { config } from "./app/app.config.server";

import { injectSpeedInsights } from "@vercel/speed-insights";
import { inject } from "@vercel/analytics";

injectSpeedInsights();
inject();

export default render(AppComponent, config);
