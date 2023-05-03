import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VPAInstrumentsComponent } from './vpa-instruments/vpa-instruments.component';
import { PTDECUIMComponent } from './ptd-ecu-im/ptd-ecu-im.component';
import { FleetLoggerComponent } from './fleet-logger/fleet-logger.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    VPAInstrumentsComponent,
    PTDECUIMComponent,
    FleetLoggerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
