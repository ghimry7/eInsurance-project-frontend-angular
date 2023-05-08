import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../home/services/auth.guard';
import { CustomerComponent } from './customer.component';
import { CustomerchangepasswordComponent } from './customerchangepassword/customerchangepassword.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { CustomerdocumentsComponent } from './customerdocuments/customerdocuments.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { InsuranceaccountComponent } from './insuranceaccount/insuranceaccount.component';
import { PolicyclaimComponent } from './policyclaim/policyclaim.component';
import { SchemedisplayComponent } from './schemedisplay/schemedisplay.component';


const routes: Routes = [
  {
    path:"customer",
    component:CustomerComponent,
    children:[
      {
        path:"",
        component:CustomerdashboardComponent
      },
      {
        path:"CustomerdashboardComponent",
        redirectTo:"/customer",
        pathMatch:"full"
      },
      {
        path:"SchemedisplayComponent",
        component:SchemedisplayComponent
      },
      {
        path:"CustomerprofileComponent",
        component:CustomerprofileComponent
      },
      {
        path:"CustomerchangepasswordComponent",
        component:CustomerchangepasswordComponent
      },
      {
        path:"CustomerdocumentsComponent",
        component:CustomerdocumentsComponent
      },
      {
        path:"InsuranceaccountComponent",
        component:InsuranceaccountComponent
      },
      {
        path:"PolicyclaimComponent",
        component:PolicyclaimComponent
      }
    ],
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
