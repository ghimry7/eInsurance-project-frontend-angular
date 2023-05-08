import { Component, OnInit } from '@angular/core';
import { CustomerInsuranceBuy } from 'src/app/customer/classes/customerbuyinsurance';
import { PaymentDetails } from 'src/app/customer/classes/paymentdetails';
import { CustomerService } from 'src/app/customer/services/customer.service';
import { AdminserviceService } from '../services/adminservice.service';

@Component({
  selector: 'app-customerinsurance',
  templateUrl: './customerinsurance.component.html',
  styleUrls: ['./customerinsurance.component.css']
})
export class CustomerinsuranceComponent implements OnInit {

  customerdata?:CustomerInsuranceBuy[];
  data!:Array<any>;
  totalRecords!:number;
  page:number=1;
  constructor(private service:AdminserviceService,private custservice:CustomerService) {
    service.getCustInsurance().subscribe((data)=>{
      this.customerdata=data;
      this.data=data;
      this.totalRecords=data.length;
    });

   }

  ngOnInit(): void {
  }

  paymentDetail!:PaymentDetails[];
  installmentDetail(data:CustomerInsuranceBuy){
    this.custservice.getInstallmentDetail(data.customerLoginId,data.insuranceScheme).subscribe((data)=>{
      this.paymentDetail=data;
      console.log(this.paymentDetail);
      
    })
  }

}
