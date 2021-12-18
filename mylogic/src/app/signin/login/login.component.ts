import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
 
  title = 'Angular Reactive forms';
 
  constructor(private router: Router) {}
public message: string =""
  public secondForm: any;
  ngOnInit(): void{
    
     this.secondForm = new FormGroup({
      userName: new FormControl('',[Validators.required]),
     
      password: new FormControl(),
     
    })
       

     }
     User: any={};
  onSubmit() {
    this.User = Object.assign(this.User, this.secondForm.value)    
    this.dataUser(this.User);
    this.router.navigate(['/user-dashboard']);
  }
    
  get userName() {
    return this.secondForm.get('userName');
 } 
 dataUser(user:any){
   
  let userArray:any = [];
  let match:any = {};
  
  if(localStorage.getItem('users')){
    userArray = JSON.parse(localStorage.getItem('users') as string);
    match = userArray.find((P: { firstName: any; password: any;}) => P.firstName === user.userName && P.password === user.password);
    
    if (match) {
      localStorage.setItem("currentUser", JSON.stringify(match))
     this.message ="Login Sucessfully"
    } else {      
      this.message = "Invalid User"
    }
  } else {      
    this.message = "User doesn't have account"
  }
}
}

 