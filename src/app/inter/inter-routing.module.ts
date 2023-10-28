import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InterComponent } from "./inter.component";
import { UneteComponent } from "./unete/unete.component";


const routes: Routes = [
  { path: '', component: InterComponent },
  { path: 'unete', component: UneteComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterRoutingModule { }
