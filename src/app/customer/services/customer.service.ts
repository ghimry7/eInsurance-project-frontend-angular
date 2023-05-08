import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IInsuranceType } from 'src/app/admin/interfaces/insurancetype';
import { IInsuranceScheme } from 'src/app/home/interfaces/insurancescheme';
import { ICustomer } from '../interfaces/customer';
import { ChangePasswordData } from '../classes/changePassword';
import { IInsurancePlan } from '../interfaces/insuranceplan';
import { CustomerPayment } from '../classes/cutomerpayment';
import { CustomerOrder } from '../classes/customerorder';
import { CustomerInsuranceBuy } from '../classes/customerbuyinsurance';
import { PaymentDetails } from '../classes/paymentdetails';
import { Commission } from '../classes/commission';
import { CustomerDocuments } from '../classes/customerdocument';


function _window() : any {
  // return the global native browser window object
  return window;
}
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  data?:string;
  constructor(private http:HttpClient) { }
  sendData(data:any){
    this.data=data;
    console.log(this.data);  
  }
  getSchemeName(){
    return this.data;
  }

  getInsuracetype():Observable<IInsuranceType[]>{
    const url='http://localhost:8080/app/insurances/insurancetype';

    return this.http.get<IInsuranceType[]>(url);
  }

  getSchemeData(typeName?:string):Observable<IInsuranceScheme[]>{
    const url='http://localhost:8080/app/insurances/insurancescheme?type='+typeName;

    return this.http.get<IInsuranceScheme[]>(url);
  }
  getProfile(formData:string):Observable<ICustomer>{
    const url='http://localhost:8080/app/customer/profile/'+formData;

    return this.http.get<ICustomer>(url);
  }

  changePassword(data:ChangePasswordData):Observable<boolean>{
    const url='http://localhost:8080/app/customer/changepassword';

    return this.http.post<boolean>(url,data);

  }

  getPlan(data:string):Observable<IInsurancePlan>{
    const url='http://localhost:8080/app/insurances/insuranceplans?scheme='+data;

    return this.http.get<IInsurancePlan>(url);
    
  }

  sendAmount(amount:CustomerPayment):Observable<CustomerOrder>{
    const url='http://localhost:8080/app/customer/payment';
    return this.http.post<CustomerOrder>(url,amount);
  }

  customerBuyInsurance(data:CustomerInsuranceBuy):Observable<boolean>{
    const url='http://localhost:8080/app/customer/buyinsurance';

    return this.http.post<boolean>(url,data);
  }

  addPaymentDetails(data:PaymentDetails){
    const url='http://localhost:8080/app/customer/payment_details';
    return this.http.post(url,data);
  }

  getCustomerInsurance(loginId:any):Observable<CustomerInsuranceBuy[]>{
    const url='http://localhost:8080/app/customer/buyinsurance?loginId='+loginId;
    
    return this.http.get<CustomerInsuranceBuy[]>(url);
  }

  addCommission(commission:Commission){
    const url="http://localhost:8080/app/agent/commission";

    return this.http.post(url,commission);

  }


  addDocuments(data:FormData):Observable<boolean>{
    console.log(data);
    const url="http://localhost:8080/app/customer/documents";
    return this.http.post<boolean>(url,data);
  }
  getDocument(loginId:any):Observable<CustomerDocuments>{
    const url="http://localhost:8080/app/customer/documents?loginId="+loginId;
    return this.http.get<CustomerDocuments>(url);
  }

  getInstallmentDetail(loginId:any,schemeName:any):Observable<PaymentDetails[]>{
    const url='http://localhost:8080/app/customer/payment_details?loginId='+loginId+"&schemeName="+schemeName;

    return this.http.get<PaymentDetails[]>(url);
  }

  updatePaymentDetails(data:PaymentDetails){
    const url='http://localhost:8080/app/customer/payment_details';
    console.log(data);
    return this.http.put(url,data);
  }

  claim(data:CustomerInsuranceBuy):Observable<boolean>{
    const url='http://localhost:8080/app/customer/claim';
    return this.http.post<boolean>(url,data);
  }

  getClaimDetail(loginId:any):Observable<any>{
    const url='http://localhost:8080/app/customer/claim?loginId='+loginId;

    return this.http.get<any>(url);

  }

  updateInsurance(data:CustomerInsuranceBuy){
    const url="http://localhost:8080/app/customer/buyinsurance";
    return this.http.put(url,data);

  }

  get nativeWindow() : any {
    return _window();
 }
}
