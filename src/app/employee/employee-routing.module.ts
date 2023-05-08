import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcityComponent } from '../admin/addcity/addcity.component';
import { AddemployeeComponent } from '../admin/addemployee/addemployee.component';
import { AddinsuranceplanComponent } from '../admin/addinsuranceplan/addinsuranceplan.component';
import { AddinsuranceschemeComponent } from '../admin/addinsurancescheme/addinsurancescheme.component';
import { AddinsurancetypeComponent } from '../admin/addinsurancetype/addinsurancetype.component';
import { AddstateComponent } from '../admin/addstate/addstate.component';
import { AgentregisterComponent } from '../admin/agentregister/agentregister.component';
import { CustomerinsuranceComponent } from '../admin/customerinsurance/customerinsurance.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { InsurancesettingComponent } from '../admin/insurancesetting/insurancesetting.component';
import { PagenotfoundComponent } from '../admin/pagenotfound/pagenotfound.component';
import { QueriesComponent } from '../admin/queries/queries.component';
import { TaxsettingComponent } from '../admin/taxsetting/taxsetting.component';
import { ViewagentComponent } from '../admin/viewagent/viewagent.component';
import { ViewagentcommissionComponent } from '../admin/viewagentcommission/viewagentcommission.component';
import { ViewcityComponent } from '../admin/viewcity/viewcity.component';
import { ViewcustomerComponent } from '../admin/viewcustomer/viewcustomer.component';
import { ViewemployeeComponent } from '../admin/viewemployee/viewemployee.component';
import { ViewinsuranceplanComponent } from '../admin/viewinsuranceplan/viewinsuranceplan.component';
import { ViewinsuranceschemeComponent } from '../admin/viewinsurancescheme/viewinsurancescheme.component';
import { ViewinsurancetypeComponent } from '../admin/viewinsurancetype/viewinsurancetype.component';
import { ViewpolicyclaimComponent } from '../admin/viewpolicyclaim/viewpolicyclaim.component';
import { ViewpolicypaymentComponent } from '../admin/viewpolicypayment/viewpolicypayment.component';
import { ViewstateComponent } from '../admin/viewstate/viewstate.component';
import { AuthGuard } from '../home/services/auth.guard';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EmployeeComponent } from './employee.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:"employee",
    component:EmployeeComponent,
    children:[
      {
        path:"",
        component:DashboardComponent
      },
      {
        path:"dashboard",
        redirectTo:"/employee",
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
export class EmployeeRoutingModule { }
