import { Component } from '@angular/core';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { FooterComponent } from '@components/footer/footer.component';
import { ContactComponent } from '@components/contact/contact.component';
import { HeroSectionComponent } from '@components/hero-section/hero-section.component';
import { StatsSectionComponent } from '@components/stats-section/stats-section.component';
import { FeaturesSectionComponent } from '@components/features-section/features-section.component';
import { TechnologySectionComponent } from '@components/technology-section/technology-section.component';
import { IndustrySectionComponent } from '@components/industry-section/industry-section.component';
import { CallToActionSectionComponent } from '@components/call-to-action-section/call-to-action-section.component';
import { HighlightComponent } from '@components/highlight/highlight.component';

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    NavigationComponent,
    FooterComponent,
    ContactComponent,
    HeroSectionComponent,
    StatsSectionComponent,
    FeaturesSectionComponent,
    TechnologySectionComponent,
    IndustrySectionComponent,
    CallToActionSectionComponent,
    HighlightComponent,
  ],
  templateUrl: "./index.page.html",
})
export default class HomeComponent {
}
