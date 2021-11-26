import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
public message: string;
  constructor() { 
    this.message="cwelcome to allu group"
  }

  ngOnInit(): void {
    this.message="iwelcome to allu group"
  }

}
