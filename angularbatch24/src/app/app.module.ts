import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './Mycomponent/todos/todos.component';
import { HomeComponent } from './Mycomponent/home/home.component';
import { ContactusComponent } from './Mycomponent/contactus/contactus.component';
import { AboutusComponent } from './Mycomponent/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
