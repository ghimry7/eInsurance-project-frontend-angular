import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { CustomernavbarComponent } from './customernavbar/customernavbar.component';

import { HttpClientModule} from '@angular/common/http';
import { SchemedisplayComponent } from './schemedisplay/schemedisplay.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { CustomerchangepasswordComponent } from './customerchangepassword/customerchangepassword.component';
import { CustomerdocumentsComponent } from './customerdocuments/customerdocuments.component';


import {ReactiveFormsModule} from '@angular/forms';
import { CustomerfooterComponent } from './customerfooter/customerfooter.component';
import { InsuranceaccountComponent } from './insuranceaccount/insuranceaccount.component';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatePipe } from './pipes/date.pipe';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { PolicyclaimComponent } from './policyclaim/policyclaim.component';

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerdashboardComponent,
    CustomernavbarComponent,
    SchemedisplayComponent,
    CustomerprofileComponent,
    CustomerchangepasswordComponent,
    CustomerdocumentsComponent,
    CustomerfooterComponent,
    InsuranceaccountComponent,
    DatePipe,
    PolicyclaimComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
    NgxPaginationModule,
    PdfViewerModule
  ],
  exports:[
    CustomerComponent,
    CustomerdashboardComponent,
    CustomernavbarComponent,
    SchemedisplayComponent,
    CustomerprofileComponent,
    CustomerchangepasswordComponent,
    CustomerdocumentsComponent,
    CustomerfooterComponent,
    InsuranceaccountComponent,
    PolicyclaimComponent
  ]
})
export class CustomerModule { }
