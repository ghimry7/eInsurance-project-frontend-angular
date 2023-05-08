import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import {ReactiveFormsModule} from '@angular/forms'
import { AgentRegistrationComponent } from './agent-registration/agent-registration.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    HeaderComponent,
    FooterComponent,
    AgentRegistrationComponent,
    ProfileComponent,
    ChangepasswordComponent

    
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    EmployeeComponent,
    HeaderComponent,
    FooterComponent,
    AgentRegistrationComponent,
    ProfileComponent,
    ChangepasswordComponent
  ]
})
export class EmployeeModule { }
