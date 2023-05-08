import { Component, OnInit } from '@angular/core';
import { IInsuranceScheme } from 'src/app/home/interfaces/insurancescheme';
import { InsurancePlan } from '../classes/insuranceplan';
import { IInsurancePlan } from '../interfaces/insuranceplan';
import { CustomerService } from '../services/customer.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomerPayment } from '../classes/cutomerpayment';
import { CustomerInsuranceBuy } from '../classes/customerbuyinsurance';
import { DatePipe, formatDate } from '@angular/common';
import { CustomerOrder } from '../classes/customerorder';
import { Router } from '@angular/router';
import { Commission } from '../classes/commission';
import Swal from 'sweetalert2';
import { PaymentDetails } from '../classes/paymentdetails';
@Component({
  selector: 'app-schemedisplay',
  templateUrl: './schemedisplay.component.html',
  styleUrls: ['./schemedisplay.component.css'],
  providers: [DatePipe]
})
export class SchemedisplayComponent implements OnInit {

  insuranceSchemeData!: IInsuranceScheme[];
  schemetype?: string;
  constructor(private service: CustomerService, private datePipe: DatePipe, private router: Router) {
    this.schemetype = this.service.getSchemeName();
    console.log("Display" + this.schemetype);
    this.getScheme(this.schemetype);
  }

  customerBuySchemeDetai!:CustomerInsuranceBuy[];
  ngOnInit(): void {
    this.service.getCustomerInsurance(sessionStorage.getItem('loginId')).subscribe((data)=>{
      this.customerBuySchemeDetai=data;
      console.log(this.customerBuySchemeDetai);
    });
  }

  alreadyBought:boolean=true;
  checkInsuranceAlreadyBought(name:any){
    console.log(name);
    for(let i=0;i<this.customerBuySchemeDetai.length;i++){
      console.log("yes");
      if(this.customerBuySchemeDetai[i].insuranceScheme===name){
        this.alreadyBought=false;
      }
    }
    console.log(this.alreadyBought);
  }

  getScheme(schemetype?: string) {
    this.service.getSchemeData(schemetype).subscribe((data) => {
      this.insuranceSchemeData = data;
    });
  }

  checkName(name: string) {
    if (name === this.schemetype) {
      return true;
    }
    else {
      return false;
    }
  }

  public show: boolean = false;
  public buttonName: any = 'More...';

  toggle() {
    this.show = !this.show;
    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "More...";
  }

 
  
  plan: IInsurancePlan = new InsurancePlan();
  schemeName!:any;
  getPlan(schemeName: string) {
    this.schemeName=schemeName;
    this.service.getPlan(schemeName).subscribe((data) => {
      this.plan = data;
    })
  }

 

  installmentAmount!: number;
  interestAmount!: number;
  totalAmount!: number;
  noOfYears!: number;
  months!: number;
  totalInvestAmount!: number;



  calculate(noOfYears: any, totalInvestAmount: any, months: any) {
    this.noOfYears = noOfYears;
    this.totalInvestAmount = totalInvestAmount;
    this.months = months;
    if (Number(totalInvestAmount) >= Number(this.plan.minInvestAmount) && Number(totalInvestAmount) <= Number(this.plan.maxInvestAmount)&& Number(totalInvestAmount) <= Number(this.plan.maxInvestAmount) && Number(noOfYears)>=Number(this.plan.minPolicyTerm) && Number(noOfYears)<=Number(this.plan.maxPolicyTerm)) {
      this.installmentAmount = Math.trunc((totalInvestAmount / noOfYears) / (12 / months));
      this.interestAmount = Math.trunc((this.plan.profitRatio * noOfYears * totalInvestAmount) / 100);
      this.totalAmount = Math.trunc(Number(totalInvestAmount) + Number(this.interestAmount));
    } else {
      Swal.fire("Inavlid Amount Entered");
    }

  }

  formData = new FormGroup({
    noOfYears: new FormControl('', Validators.required),
    totalInvestAmount: new FormControl('', Validators.required),
    months: new FormControl('', Validators.required)
  })

  amount: CustomerPayment = new CustomerPayment();
  customerBuy: CustomerInsuranceBuy = new CustomerInsuranceBuy();
  paid: boolean = false;
  myDate = new Date();
  custOrder: CustomerOrder = new CustomerOrder();
  commission:Commission=new Commission();
  paymentDetail:PaymentDetails=new PaymentDetails();


  proceed(){
    this.amount.amount=this.installmentAmount;
    this.amount.customerLoginId=sessionStorage.getItem("loginId");
    this.service.sendAmount(this.amount).subscribe((data)=>{
      var newThis=this;
      if(data!=null){
        console.log(data);
        let options = {
          "key": "rzp_test_yg1Db4fYX58XsB",
          "amount": data.amount, 
          "currency": "INR",
          "name": this.schemetype,
          "description": "First Installment",
          "image": "",
          "order_id": data.id,
          "handler": function (response: any) {
                  let paymentId = response.razorpay_payment_id;
                  console.log(response.razorpay_payment_id);
                  console.log(response.razorpay_order_id);
                  console.log(response.razorpay_signature);
                
          
                  newThis.customerBuy.insuranceType = newThis.schemetype;
                  newThis.customerBuy.insuranceScheme = newThis.plan.insurnaceSchemeName;
                  newThis.customerBuy.buyDate = newThis.datePipe.transform(newThis.myDate, 'yyyy-MM-dd');
                  newThis.customerBuy.maturityDate =newThis.addDate(newThis.noOfYears);
                  newThis.customerBuy.noOfYears = newThis.noOfYears;
                  newThis.customerBuy.totalInvestmentAmount = newThis.totalInvestAmount;
                  newThis.customerBuy.months = newThis.months;
                  newThis.customerBuy.installmentAmount = newThis.amount.amount;
                  newThis.customerBuy.interestAmount = newThis.interestAmount;
                  newThis.customerBuy.totalAmount = newThis.totalAmount;
                  newThis.customerBuy.claim="no";
                  newThis.customerBuy.customerLoginId = sessionStorage.getItem('loginId');
          
                  newThis.commission.buyDate=newThis.datePipe.transform(newThis.myDate, 'yyyy-MM-dd');
                  newThis.commission.scheme=newThis.plan.insurnaceSchemeName;
                  newThis.commission.loginId=sessionStorage.getItem("loginId");
                  newThis.commission.totalInvestAmount=newThis.totalInvestAmount;
                  
                  newThis.paymentDetail.paymentId=paymentId;
                  newThis.paymentDetail.schemeName=newThis.plan.insurnaceSchemeName;
                  newThis.paymentDetail.paymentDate=newThis.datePipe.transform(newThis.myDate, 'yyyy-MM-dd');
                  newThis.paymentDetail.installmentAmount=newThis.installmentAmount;
                  newThis.paymentDetail.installmentNo=1;
                  newThis.paymentDetail.totalInstallmentNo=(newThis.noOfYears*12)/(newThis.months);
                  newThis.paymentDetail.paid="yes";
                  newThis.paymentDetail.months=newThis.months;
                  newThis.paymentDetail.loginId=sessionStorage.getItem('loginId');
          
                  newThis.service.customerBuyInsurance(newThis.customerBuy).subscribe();
          
                  newThis.service.addPaymentDetails(newThis.paymentDetail).subscribe();
          
                  newThis.service.addCommission(newThis.commission).subscribe();

                  Swal.fire("Payment Successful");

                  newThis.router.navigate(["/customer"]);
                },
          "prefill": {
              "name": "",
              "email": "",
              "contact": ""
          },
          "theme": {
              "color": "#3399cc"
          }
      };
      let rzp=new this.service.nativeWindow.Razorpay(options);
      rzp.on('payment.failed', function (response:any) {
        console.log(response.error.code);
        console.log(response.error.description);
        console.log(response.error.source);
        console.log(response.error.step);
        console.log(response.error.reason);
        console.log(response.error.metadata.order_id);
        console.log(response.error.metadata.payment_id);
        alert("Oops Payment Failed!!!");
        });
      rzp.open();
      }
    });
  }

  addDate(years:number):any {
    const maturityDate = new Date();
    return this.datePipe.transform(maturityDate.setFullYear(Number(maturityDate.getFullYear()) + Number(years) ), 'yyyy-MM-dd');
  }

  // proceed() {
  //   this.amount.amount = this.installmentAmount;
  //   this.amount.customerLoginId = sessionStorage.getItem("loginId");
  //   this.service.sendAmount(this.amount).subscribe((data) => {
  //     this.custOrder = data;
  //     console.log(this.custOrder);
  //   });
  // }



  // pay() {
  //   let payment: any;
  //   var newThis = this;
  //   let options = {
  //     "key": "rzp_test_yg1Db4fYX58XsB",
  //     "amount": newThis.custOrder.amount,
  //     "currency": "INR",
  //     "name": newThis.schemetype,
  //     "description": "First Installment",
  //     "image": "",
  //     "order_id": newThis.custOrder.id,
  //     "handler": function (response: any) {
  //       payment = response.razorpay_payment_id;
  //       console.log(response.razorpay_payment_id);
  //       console.log(response.razorpay_order_id);
  //       console.log(response.razorpay_signature);
  //       alert("Payment Successful");

  //       newThis.customerBuy.insuranceType = newThis.schemetype;
  //       newThis.customerBuy.insuranceScheme = newThis.plan.insurnaceSchemeName;
  //       newThis.customerBuy.buyDate = newThis.datePipe.transform(newThis.myDate, 'yyyy-MM-dd');
  //       newThis.customerBuy.maturityDate =newThis.addDate(newThis.noOfYears);
  //       newThis.customerBuy.noOfYears = newThis.noOfYears;
  //       newThis.customerBuy.totalInvestmentAmount = newThis.totalInvestAmount;
  //       newThis.customerBuy.months = newThis.months;
  //       newThis.customerBuy.installmentAmount = newThis.amount.amount;
  //       newThis.customerBuy.interestAmount = newThis.interestAmount;
  //       newThis.customerBuy.totalAmount = newThis.totalAmount;
  //       newThis.customerBuy.customerLoginId = sessionStorage.getItem('loginId');

  //       newThis.commission.buyDate=newThis.datePipe.transform(newThis.myDate, 'yyyy-MM-dd');
  //       newThis.commission.scheme=newThis.plan.insurnaceSchemeName;
  //       newThis.commission.loginId=sessionStorage.getItem("loginId");
  //       newThis.commission.totalInvestAmount=newThis.totalInvestAmount;
        
      

  //       newThis.service.customerBuyInsurance(newThis.customerBuy).subscribe();

  //       newThis.service.addPaymentDetails(payment, sessionStorage.getItem("loginId")).subscribe();

  //       newThis.service.addCommission(newThis.commission).subscribe();
  //     },
  //     "prefill": {
  //       "name": "",
  //       "email": "",
  //       "contact": ""
  //     },
  //     "theme": {
  //       "color": "#3399cc"
  //     }
  //   };

  //   let rzp = new this.service.nativeWindow.Razorpay(options);
  //   rzp.on('payment.failed', function (response: any) {
  //     console.log(response.error.code);
  //     console.log(response.error.description);
  //     console.log(response.error.source);
  //     console.log(response.error.step);
  //     console.log(response.error.reason);
  //     console.log(response.error.metadata.order_id);
  //     console.log(response.error.metadata.payment_id);
  //     alert("Oops Payment Failed!!!");
  //   });
  //   rzp.open();


  // }

 
}
