import { Component, OnInit } from '@angular/core';
import { CustomerInsuranceBuy } from '../classes/customerbuyinsurance';
import { PaymentDetails } from '../classes/paymentdetails';
import { CustomerService } from '../services/customer.service';
import Swal from 'sweetalert2';
import { CustomerPayment } from '../classes/cutomerpayment';
@Component({
  selector: 'app-insuranceaccount',
  templateUrl: './insuranceaccount.component.html',
  styleUrls: ['./insuranceaccount.component.css']
})
export class InsuranceaccountComponent implements OnInit {


  customerdata!:CustomerInsuranceBuy[];
  data!:Array<any>;
  totalRecords!:number;
  page:number=1;
  
  constructor(private service:CustomerService) { 
    this.service.getCustomerInsurance(sessionStorage.getItem('loginId')).subscribe((data)=>{
      this.customerdata=data;
      this.data=data;
      this.totalRecords=data.length;
      console.log(this.customerdata);
      
    })
  }

  ngOnInit(): void {
  
  }

  buttonStates = Array(this.totalRecords).fill(false);

  onDisableUser(ind:any){ 
    this.buttonStates[ind]= !this.buttonStates[ind];
 }


  // loop!:number;
  // installment:CustomerInsuranceBuy=new CustomerInsuranceBuy();
  // payment(data:CustomerInsuranceBuy){
  //   console.log(data);
  //   let months=data.months;
  //   let paymentInAYear=12/months;
  //   this.loop=paymentInAYear;
  //   this.installment=data;
  // }

  paymentDetail!:PaymentDetails[];
  installmentDetail(schemeName:any){
    let loginId=sessionStorage.getItem('loginId');
    this.service.getInstallmentDetail(loginId,schemeName).subscribe((data)=>{
      this.paymentDetail=data;
      console.log(this.paymentDetail);
    })
  }

  installmentPay:PaymentDetails=new PaymentDetails();
  amount:CustomerPayment=new CustomerPayment();
  pay(item:any){
    console.log(item);
    
    this.amount.amount=item.installmentAmount;
    this.amount.customerLoginId=sessionStorage.getItem("loginId");
    this.service.sendAmount(this.amount).subscribe((data)=>{
      var newThis=this;
      if(data!=null){
        console.log(data);
        let options = {
          "key": "rzp_test_yg1Db4fYX58XsB",
          "amount": data.amount, 
          "currency": "INR",
          "name": item.schemeName,
          "description": "Installment",
          "image": "",
          "order_id": data.id,
          "handler": function (response: any) {
                  let paymentId = response.razorpay_payment_id;
                  console.log(response.razorpay_payment_id);
                  console.log(response.razorpay_order_id);
                  console.log(response.razorpay_signature);
                
                  newThis.installmentPay.paymentId=paymentId;
                  newThis.installmentPay.schemeName=item.schemeName;
                  newThis.installmentPay.paymentDate=item.paymentDate;
                  newThis.installmentPay.installmentAmount=item.installmentAmount;
                  newThis.installmentPay.installmentNo=item.installmentNo;
                  newThis.installmentPay.loginId=sessionStorage.getItem('loginId');
                
          
                  // newThis.commission.buyDate=newThis.datePipe.transform(newThis.myDate, 'yyyy-MM-dd');
                  // newThis.commission.scheme=newThis.plan.insurnaceSchemeName;
                  // newThis.commission.loginId=sessionStorage.getItem("loginId");
                  // newThis.commission.totalInvestAmount=newThis.totalInvestAmount;
                  
                  // newThis.service.customerBuyInsurance(newThis.customerBuy).subscribe();
          
                  newThis.service.updatePaymentDetails(newThis.installmentPay).subscribe();
          
                  // newThis.service.addCommission(newThis.commission).subscribe();

                  Swal.fire("Payment Successful").then(()=>{
                    window.location.reload();
                  });

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

  claim(data:CustomerInsuranceBuy){
    console.log(data);
    this.service.claim(data).subscribe((response)=>{
      if(response){
        Swal.fire("Request Send").then(()=>{
          window.location.reload();
        });
      }else{
        Swal.fire("Request Send Fail");
      }
    })

   
  }

  updateInsurance(data:CustomerInsuranceBuy){
    this.service.updateInsurance(data).subscribe();
  }

}
