import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { CreataccountComponent } from './component/creataccount/creataccount.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';

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
    path: 'login', component:LoginComponent
  },
  {
    path: 'creataccount', component:CreataccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
