import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vpa-instruments',
  templateUrl: './vpa-instruments.component.html',
  styleUrls: ['./vpa-instruments.component.css']
})
export class VPAInstrumentsComponent implements OnInit {

  tabClick:string='order'
  constructor() { }

  ngOnInit(): void {
  }

  tabclick(arg:string){
    this.tabClick = arg;
  }
}
