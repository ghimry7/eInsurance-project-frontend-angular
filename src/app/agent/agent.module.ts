import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import { AgentdashboardComponent } from './agentdashboard/agentdashboard.component';
import { AgentnavbarComponent } from './agentnavbar/agentnavbar.component';
import { AgentprofileComponent } from './agentprofile/agentprofile.component';

import { HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { AgentfooterComponent } from './agentfooter/agentfooter.component';
import { ViewcommissionComponent } from './viewcommission/viewcommission.component';
import { CommissionwithdrawalComponent } from './commissionwithdrawal/commissionwithdrawal.component';
import { CustomerinsurancedetailComponent } from './customerinsurancedetail/customerinsurancedetail.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AgentComponent,
    AgentdashboardComponent,
    AgentnavbarComponent,
    AgentprofileComponent,
    ChangepasswordComponent,
    MarketingComponent,
    ViewcustomerComponent,
    AgentfooterComponent,
    ViewcommissionComponent,
    CommissionwithdrawalComponent,
    CustomerinsurancedetailComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports:[
    AgentComponent,
    AgentdashboardComponent,
    AgentnavbarComponent,
    AgentprofileComponent,
    ChangepasswordComponent,
    MarketingComponent,
    ViewcustomerComponent,
    AgentfooterComponent,
    ViewcommissionComponent,
    CommissionwithdrawalComponent,
    CustomerinsurancedetailComponent
  ]
})
export class AgentModule { }
