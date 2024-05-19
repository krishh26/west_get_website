import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { WorkingModalComponent } from './components/working-modal/working-modal.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { FaqsComponent } from './components/faqs/faqs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    WhyUsComponent,
    OpportunitiesComponent,
    WorkingModalComponent,
    OurServicesComponent,
    FaqsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
