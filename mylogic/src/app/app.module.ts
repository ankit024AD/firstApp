import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { SigninModule } from './signin/signin.module';
import { CreateModule } from './create/create.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
    ContactusComponent,
    AboutusComponent,
    UserDashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   SigninModule,
   CreateModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
