import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FleetLoggerComponent } from './fleet-logger/fleet-logger.component';
import { PTDECUIMComponent } from './ptd-ecu-im/ptd-ecu-im.component';
import { VPAInstrumentsComponent } from './vpa-instruments/vpa-instruments.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'VPAInstruments', pathMatch: 'full'
  },
  {
    path: 'VPAInstruments', component:VPAInstrumentsComponent
  },
  {
    path: 'PTDECUIM', component:PTDECUIMComponent
  },
  {
    path:'FleetLogger', component:FleetLoggerComponent, 
  },
  {
    path:'Dashboard', component:DashboardComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
