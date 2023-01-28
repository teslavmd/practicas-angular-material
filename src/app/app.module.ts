import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



 
//COMPONENTES
import { LoginComponent } from '../app/componentes/login/login.component';
import { SharedModule } from './componentes/shared/shared.module';
import { NavbarComponent } from './componentes/dashboard/navbar/navbar.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
