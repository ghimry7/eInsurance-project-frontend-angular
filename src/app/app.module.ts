import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminModule } from './admin/admin.module';

import { HomeModule } from './home/home.module';

import { AgentModule } from './agent/agent.module';

import { CustomerModule } from './customer/customer.module';

import { EmployeeModule } from './employee/employee.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomeModule,
    AdminModule,
    AgentModule,
    CustomerModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
