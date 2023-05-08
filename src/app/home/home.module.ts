import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModule } from '../admin/admin.module';
import { AdminRoutingModule } from '../admin/admin-routing.module';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomenavbarComponent } from './homenavbar/homenavbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AdminloginComponent } from './adminlogin/adminlogin.component';

import { FooterComponent } from './footer/footer.component';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'; 
import { RouterModule } from '@angular/router'; 

import { HomeService } from './services/homeservice.service';
import { AgentloginComponent } from './agentlogin/agentlogin.component'; 

import { AgentModule } from '../agent/agent.module';
import { AgentRoutingModule } from '../agent/agent-routing.module';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';

import { CustomerModule } from '../customer/customer.module';
import { CustomerRoutingModule } from '../customer/customer-routing.module';
import { CustomerregisterComponent } from './customerregister/customerregister.component';
import { SchemedisplayComponent } from './schemedisplay/schemedisplay.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';




@NgModule({
  declarations: [
    DashboardComponent,
    AdminloginComponent,
    HomeComponent,
    HomenavbarComponent,
    AgentloginComponent,
    CustomerloginComponent,
    CustomerregisterComponent,
    FooterComponent,
    SchemedisplayComponent,
    EmployeeloginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AdminModule,
    AdminRoutingModule,
    AgentModule,
    AgentRoutingModule,
    CustomerModule,
    CustomerRoutingModule
    

  ],
  exports:[
    ReactiveFormsModule,
    HomeComponent,
    HomeRoutingModule
  ],
  providers: [  
    HomeService
  ]

})
export class HomeModule { }
