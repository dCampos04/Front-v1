import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent} from "./landing.component";
import { LandingRoutingModule } from "./landing-routing.module";

import { HeaderLandingComponent } from './header-landing/header-landing.component';
import { MainLandingComponent } from './main-landing/main-landing.component';
import {FooterComponent} from "./footer/footer.component";



@NgModule({
  declarations: [
    LandingComponent,
    HeaderLandingComponent,
    MainLandingComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
})
export class LandingModule { }

