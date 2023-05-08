import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule} from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewagentComponent } from './viewagent/viewagent.component';
import { ViewagentcommissionComponent } from './viewagentcommission/viewagentcommission.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { ViewpolicypaymentComponent } from './viewpolicypayment/viewpolicypayment.component';
import { ViewpolicyclaimComponent } from './viewpolicyclaim/viewpolicyclaim.component';
import { QueriesComponent } from './queries/queries.component';
import { AddinsuranceplanComponent } from './addinsuranceplan/addinsuranceplan.component';
import { AddinsurancetypeComponent } from './addinsurancetype/addinsurancetype.component';
import { AddinsuranceschemeComponent } from './addinsurancescheme/addinsurancescheme.component';
import { ViewinsurancetypeComponent } from './viewinsurancetype/viewinsurancetype.component';
import { ViewinsuranceschemeComponent } from './viewinsurancescheme/viewinsurancescheme.component';
import { ViewinsuranceplanComponent } from './viewinsuranceplan/viewinsuranceplan.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AddcityComponent } from './addcity/addcity.component';
import { ViewcityComponent } from './viewcity/viewcity.component';
import { AddstateComponent } from './addstate/addstate.component';
import { ViewstateComponent } from './viewstate/viewstate.component';
import { TaxsettingComponent } from './taxsetting/taxsetting.component';
import { InsurancesettingComponent } from './insurancesetting/insurancesetting.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { NavbarComponent } from './navbar/navbar.component';


import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminfooterComponent } from './adminfooter/adminfooter.component';
import { CustomerinsuranceComponent } from './customerinsurance/customerinsurance.component'; 

import { NgxPaginationModule } from 'ngx-pagination';
import { AgentregisterComponent } from './agentregister/agentregister.component';
import { ProfileclaimComponent } from './profileclaim/profileclaim.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ViewagentComponent,
    ViewagentcommissionComponent,
    ViewcustomerComponent,
    ViewpolicypaymentComponent,
    ViewpolicyclaimComponent,
    QueriesComponent,
    AddinsuranceplanComponent,
    AddinsurancetypeComponent,
    AddinsuranceschemeComponent,
    ViewinsurancetypeComponent,
    ViewinsuranceschemeComponent,
    ViewinsuranceplanComponent,
    ProfileComponent,
    ChangepasswordComponent,
    AddcityComponent,
    ViewcityComponent,
    AddstateComponent,
    ViewstateComponent,
    TaxsettingComponent,
    InsurancesettingComponent,
    AddemployeeComponent,
    ViewemployeeComponent,
    NavbarComponent,
    PagenotfoundComponent,
    AdminfooterComponent,
    CustomerinsuranceComponent,
    AgentregisterComponent,
    ProfileclaimComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularEditorModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports:[
    AdminComponent,
    DashboardComponent,
    ViewagentComponent,
    ViewagentcommissionComponent,
    ViewcustomerComponent,
    ViewpolicypaymentComponent,
    ViewpolicyclaimComponent,
    QueriesComponent,
    AddinsuranceplanComponent,
    AddinsurancetypeComponent,
    AddinsuranceschemeComponent,
    ViewinsurancetypeComponent,
    ViewinsuranceschemeComponent,
    ViewinsuranceplanComponent,
    ProfileComponent,
    ChangepasswordComponent,
    AddcityComponent,
    ViewcityComponent,
    AddstateComponent,
    ViewstateComponent,
    TaxsettingComponent,
    InsurancesettingComponent,
    AddemployeeComponent,
    ViewemployeeComponent,
    NavbarComponent,
    PagenotfoundComponent,
    AdminfooterComponent,
    CustomerinsuranceComponent,
    AgentregisterComponent,
    ProfileclaimComponent
  ]
})
export class AdminModule { }
