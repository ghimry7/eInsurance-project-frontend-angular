import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../home/services/auth.guard';
import { AgentComponent } from './agent.component';
import { AgentdashboardComponent } from './agentdashboard/agentdashboard.component';
import { AgentprofileComponent } from './agentprofile/agentprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CommissionwithdrawalComponent } from './commissionwithdrawal/commissionwithdrawal.component';
import { CustomerinsurancedetailComponent } from './customerinsurancedetail/customerinsurancedetail.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ViewcommissionComponent } from './viewcommission/viewcommission.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';

const routes: Routes = [
  {
    path:"Agent",
    component:AgentComponent,
    children:[{
      path:"",
      component:AgentdashboardComponent
    },
    {
      path:"AgentDashboard",
      redirectTo:"/Agent",
      pathMatch:"full"
    },
    {
      path:"AgentprofileComponent",
      component:AgentprofileComponent
    },
    {
      path:"ChangepasswordComponent",
      component:ChangepasswordComponent
    },
    {
      path:"MarketingComponent",
      component:MarketingComponent
    },
    {
      path:"ViewcustomerComponent",
      component:ViewcustomerComponent
    },
    {
      path:"ViewcommissionComponent",
      component:ViewcommissionComponent
    },
    {
      path:"CommissionwithdrawalComponent",
      component:CommissionwithdrawalComponent
    },
    {
      path:"CustomerinsurancedetailComponent",
      component:CustomerinsurancedetailComponent
    }
  ],
  canActivate:[AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
