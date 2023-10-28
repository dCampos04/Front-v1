import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterComponent} from "./inter.component";
import { InterRoutingModule } from "./inter-routing.module";

import { UneteComponent } from './unete/unete.component';


@NgModule({
  declarations: [
    InterComponent,
    UneteComponent,
  ],
  imports: [
    InterRoutingModule,
    CommonModule,
  ]
})
export class InterModule { }
