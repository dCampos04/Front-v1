import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./landing/landing.module').then((m) => m.LandingModule) },
  { path: 'interfaces', loadChildren: () => import('./inter/inter.module').then((m) => m.InterModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
