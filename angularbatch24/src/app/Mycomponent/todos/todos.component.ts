import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
public a: number =10;
public b: number =14;
public name:string = "ankit dhakad";
private group:string = "allu group";
getName(){
  return this.group;

}
constructor() { 

}

  ngOnInit(): void {
  }

}
