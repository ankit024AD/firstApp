import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mylogic';

constructor(private router: Router){}
  ngOnInit(): void {
    
  }
loggedIn(){
  let currentUser = JSON.parse(localStorage.getItem('currentUser') as string)
  if(currentUser){
    return false
  }
  return true
  }
  

OnLogout(){
  localStorage.removeItem('currentUser')
  this.router.navigate(['/home']);
}
}
 