import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { WorkingModalComponent } from './components/working-modal/working-modal.component';
import { WhyUsComponent } from './components/why-us/why-us.component';

const routes: Routes = [
  {
    path: 'home',
    component : HomeComponent
  },
  {
    path: 'about-us',
    component : AboutUsComponent
  },
  {
    path: 'faq',
    component : FaqsComponent
  },
  {
    path: 'opportunities',
    component : OpportunitiesComponent
  },
  {
    path: 'our-services',
    component : OurServicesComponent
  },
  {
    path: 'why-us',
    component : WhyUsComponent
  },
  {
    path: 'working-modal',
    component : WorkingModalComponent
  },
  {
    path : '**',
    pathMatch : 'full',
    redirectTo : 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
