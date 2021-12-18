import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';

import { SigninModule } from './signin/signin.module';
import { CreateModule } from './create/create.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


const routes: Routes = [
  {
    path: 'home', component:HomeComponent
  },
  {
    path: 'aboutus', component:AboutusComponent
  },
  {
    path: 'contactus', component:ContactusComponent
  },
  
  {
    path: 'user-dashboard', component:UserDashboardComponent
  },
  
  {path: 'signin/login', loadChildren: () =>SigninModule},
  
  { path: 'create/createaccount', loadChildren: ()  =>CreateModule},

  

  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
