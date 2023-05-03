import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tabClick:string='IS'
  constructor() { }

  ngOnInit(): void {
  }
  tabclick(arg:string){
    this.tabClick = arg;
  }
}
