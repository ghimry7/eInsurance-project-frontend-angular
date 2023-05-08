import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AgentloginComponent } from './agentlogin/agentlogin.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerregisterComponent } from './customerregister/customerregister.component';
import { SchemedisplayComponent } from './schemedisplay/schemedisplay.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
const routes: Routes = [
  {
    path: "",redirectTo:"/DashboardComponent",pathMatch:'full'
  },
  {
    path: "home",redirectTo:"/DashboardComponent",pathMatch:'full'
  }
  ,
  {
    path: "DashboardComponent",
    component:DashboardComponent
  },
  {
    path:"AdminloginComponent",
    component:AdminloginComponent
  },
  {
    path:"AgentloginComponent",
    component:AgentloginComponent
  },
  {
    path:"CustomerloginComponent",
    component:CustomerloginComponent
  },
  {
    path:"CustomerregisterComponent",
    component:CustomerregisterComponent
  },
  {
    path:"SchemedisplayComponent",
    component:SchemedisplayComponent
  },
  {
    path:"CustomerregisterComponent",
    component:CustomerregisterComponent
  },
  {
    path:"EmployeeloginComponent",
    component:EmployeeloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
