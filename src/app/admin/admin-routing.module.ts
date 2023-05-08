import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AddcityComponent } from './addcity/addcity.component';
import { AddstateComponent } from './addstate/addstate.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { TaxsettingComponent } from './taxsetting/taxsetting.component';
import { InsurancesettingComponent } from './insurancesetting/insurancesetting.component';
import { ViewcityComponent } from './viewcity/viewcity.component';
import { ViewstateComponent } from './viewstate/viewstate.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../home/services/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {CustomerinsuranceComponent} from './customerinsurance/customerinsurance.component'
import { AgentregisterComponent } from './agentregister/agentregister.component';
import { ProfileclaimComponent } from './profileclaim/profileclaim.component';

const routes: Routes = [
  {
    path:"admin",
    component:AdminComponent,
    children:[
      {
        path:"",
        component:DashboardComponent
      },
      {
        path:"dashboard",
        redirectTo:"/admin",
        pathMatch:"full"
      },
      {
        path:"viewagent",
        component:ViewagentComponent
      },
      {
        path:"viewagentcommisssion",
        component:ViewagentcommissionComponent
      },
      {
        path:"viewcustomerComponent",
        component:ViewcustomerComponent
      },
      {
        path:"viewpolicypaymentComponent",
        component:ViewpolicypaymentComponent
      },
      {
        path:"viewpolicyclaimComponent",
        component:ViewpolicyclaimComponent
      },
      {
        path:"queriescomponent",
        component:QueriesComponent
      },
      {
        path:"AddinsurancetypeComponent",
        component:AddinsurancetypeComponent
      },
      {
        path:"AddinsuranceschemeComponent",
        component:AddinsuranceschemeComponent
      },
      {
        path:"AddinsuranceplanComponent",
        component:AddinsuranceplanComponent
      },
      {
        path:"ViewinsurancetypeComponent",
        component:ViewinsurancetypeComponent
      },
      {
        path:"ViewinsuranceschemeComponent",
        component:ViewinsuranceschemeComponent
      },
      {
        path:"ViewinsuranceplanComponent",
        component:ViewinsuranceplanComponent
      },
      {
        path:"AddcityComponent",
        component:AddcityComponent
      },
      {
        path:"AddstateComponent",
        component:AddstateComponent
      },
      {
        path:"AddemployeeComponent",
        component:AddemployeeComponent
      },
      {
        path:"TaxsettingComponent",
        component:TaxsettingComponent
      },
      {
        path:"InsurancesettingComponent",
        component:InsurancesettingComponent
      },
      {
        path:"ViewcityComponent",
        component:ViewcityComponent
      },
      {
        path:"ViewstateComponent",
        component:ViewstateComponent
      },
      {
        path:"ChangepasswordComponent",
        component:ChangepasswordComponent
      },
      {
        path:"ProfileComponent",
        component:ProfileComponent
      },
      {
        path:"ViewemployeeComponent",
        component:ViewemployeeComponent
      },
      {
        path:"CustomerinsuranceComponent",
        component:CustomerinsuranceComponent
      },
      {
        path:"AgentregisterComponent",
        component:AgentregisterComponent
      },
      {
        path:"ProfileclaimComponent",
        component:ProfileclaimComponent
      },
      {
        path:"**",
        component:PagenotfoundComponent
      }
    ],
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
