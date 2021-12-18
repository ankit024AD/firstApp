import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { __assign } from 'tslib';


@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  

  constructor(private router: Router) { }

  public myfirstForm: any;
  ngOnInit(): void{
    
     this.myfirstForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      LastName: new FormControl(),
      Email : new FormControl('',[Validators.email,Validators.required]),
    Age: new FormControl(),
      password: new FormControl(),
     PhoneNumber: new FormControl('',[Validators.required]),
    })

     }
     User: any={};
     onSubmit() {
      this.User = Object.assign(this.User, this.myfirstForm.value)
      this.addUsers()
      this.router.navigate(['/signin/login'])
    }

   addUsers(){
     let users: any = [];
     
     if(localStorage.getItem('users')){
       users = JSON.parse(localStorage.getItem('users') as string);
       users= [...users, this.User]
     } else {
       users =[this.User];
  }
    localStorage.setItem('users', JSON.stringify(users));

   
   }
    get firstName() {
      return this.myfirstForm.get('firstName');
   } 

   check_pass() {
    if ((<HTMLInputElement>document.getElementById('password')).value == (<HTMLInputElement>document.getElementById('confirmPassword')).value) {
      (<HTMLInputElement>document.getElementById('submit')).disabled = false;
    } else {
      (<HTMLInputElement>document.getElementById('submit')).disabled = true;
    }
}
  
   }



