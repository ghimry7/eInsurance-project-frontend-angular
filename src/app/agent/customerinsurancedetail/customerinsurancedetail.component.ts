import { Component, OnInit } from '@angular/core';
import { PaymentDetails } from 'src/app/customer/classes/paymentdetails';
import { CustomerService } from 'src/app/customer/services/customer.service';
import { CustomerInsuranceBuy } from '../classes/customerbuyinsurance';
import { AgentService } from '../service/agent.service';

@Component({
  selector: 'app-customerinsurancedetail',
  templateUrl: './customerinsurancedetail.component.html',
  styleUrls: ['./customerinsurancedetail.component.css']
})
export class CustomerinsurancedetailComponent implements OnInit {

  customerdata!:CustomerInsuranceBuy[];
  data!:Array<any>;
  totalRecords!:number;
  page:number=1;
  constructor(private service:AgentService,private custservice:CustomerService) {
    this.service.getCustomerInsurance(sessionStorage.getItem('loginId')).subscribe((data)=>{
      this.customerdata=data;
      this.data=data;
      this.totalRecords=data.length;
      console.log(this.customerdata);
    })
   }

  ngOnInit(): void {
  }

  paymentDetail!:PaymentDetails[];
  installmentDetail(data:CustomerInsuranceBuy){
    this.custservice.getInstallmentDetail(data.customerLoginId,data.insuranceScheme).subscribe((data)=>{
      this.paymentDetail=data;
    })
  }

}
