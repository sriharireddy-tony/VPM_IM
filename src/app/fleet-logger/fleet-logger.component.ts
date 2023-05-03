import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fleet-logger',
  templateUrl: './fleet-logger.component.html',
  styleUrls: ['./fleet-logger.component.css']
})
export class FleetLoggerComponent implements OnInit {

  tabClick:string='FLR'
  FLR=['1']
  FLM=['1']
  FLD=['1']

  constructor() { }

  ngOnInit(): void {
  }
  tabclick(arg:string){
    this.tabClick = arg;
  }
  FLRAddRow(){
    this.FLR.push('2')
  }
  FLMAddRow(){
    this.FLM.push('2')
  }
  FLDAddRow(){
    this.FLD.push('2')
  }
}
