import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   currentUser: any = JSON.parse(localStorage.getItem('currentUser') as string)
   message: any  = "Hi "+ this.currentUser.firstName

}
