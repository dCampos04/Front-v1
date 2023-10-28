import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LandingModule } from "./landing/landing.module";
import { InterModule } from "./inter/inter.module"
import {HeaderLandingComponent} from "./landing/header-landing/header-landing.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    InterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
