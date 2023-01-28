import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';


const routes : Routes = [
  {path : "", redirectTo : "login", pathMatch : "full"},
  {path : "dashboard", loadChildren : ()=> import("./componentes/dashboard/dashboard.module").then( x => x.DashboardModule) },
  {path : "login", component : LoginComponent},
  {path : "**", redirectTo : "login", pathMatch : "full"},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
  ,
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
