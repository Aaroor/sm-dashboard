import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeDashboardComponent} from './home-dashboard/home-dashboard.component'
import {SmLoginComponent} from './sm-login/sm-login.component'

const routes: Routes = [
  {path: 'home',component:HomeDashboardComponent},
  {path: '',component:SmLoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[HomeDashboardComponent,SmLoginComponent]