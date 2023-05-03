import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ptd-ecu-im',
  templateUrl: './ptd-ecu-im.component.html',
  styleUrls: ['./ptd-ecu-im.component.css']
})
export class PTDECUIMComponent implements OnInit {

  tabClick:string='PTDInst'
  constructor() { }

  PTDInst =['1']
  PTDMaster=['1']
  PTDDist=['1']
  ECUReq=['1]']
  ECUMaster=['1']
  ECUDist=['1']

  ngOnInit(): void {
  }

  tabclick(arg:string){
    this.tabClick = arg;
  }
  PTDInstAddRow(){
    this.PTDInst.push('2')
  }
  PTDMasterAddRow(){
    this.PTDMaster.push('2')
  }
  PTDDistAddRow(){
    this.PTDDist.push('2')
  }
  ECUReqAddRow(){
    this.ECUReq.push('2')
  }
  ECUMasterAddRow(){
    this.ECUMaster.push('2')
  }
  ECUDistAddRow(){
    this.ECUDist.push('2')
  }
}
