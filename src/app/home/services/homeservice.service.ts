import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AdminDto } from '../classes/admin-dto';
import { IInsuranceType } from 'src/app/admin/interfaces/insurancetype';
import { AgentDto } from '../classes/agentDto';
import { CustomerDto } from '../classes/customerDto';
import { SchemedisplayComponent } from '../schemedisplay/schemedisplay.component';
import { IInsuranceScheme } from '../interfaces/insurancescheme';
import { Customer } from '../classes/customer';
import { IInsurancePlan } from '../interfaces/insuranceplan';
import { EmployeeDto } from '../classes/employeedto';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private router:Router,private http:HttpClient) { }


  data?:string;
  sendData(data:any){
    this.data=data;
    console.log(this.data);
    // this.getSchemeName();
  
  }

  getSchemeName(){
    return this.data;
  }

  baseUrl='http://localhost:8080/app/';

  login(adminDto:AdminDto):Observable<boolean>   {

    const url=this.baseUrl+'loginadmin';
    
    return this.http.post<boolean>(url,adminDto);
    
  }

  loginAgent(agentDto:AgentDto):Observable<boolean>{

    const url=this.baseUrl + 'loginagent';

    console.log(url);
    
    return this.http.post<boolean>(url,agentDto);
    
  }

  loginCustomer(customerDto:CustomerDto):Observable<boolean>{
    const url=this.baseUrl + 'logincustomer';

    
    return this.http.post<boolean>(url,customerDto);

  }


  isLoggedIn(){
    return !!sessionStorage.getItem('token');
  }

  getInsuracetype():Observable<IInsuranceType[]>{
    const url='http://localhost:8080/app/insurances/insurancetype';

    return this.http.get<IInsuranceType[]>(url);
  }

  getSchemeData(typeName?:string):Observable<IInsuranceScheme[]>{
    const url='http://localhost:8080/app/insurances/insurancescheme?type='+typeName;

    return this.http.get<IInsuranceScheme[]>(url);
  }


  registerCust(cust:Customer):Observable<boolean>{
    const url='http://localhost:8080/app/customer';
    return this.http.post<boolean>(url,cust);
  }

  getPlan(data:string):Observable<IInsurancePlan>{
    const url='http://localhost:8080/app/insurances/insuranceplans?scheme='+data;

    return this.http.get<IInsurancePlan>(url);
    
  }

  loginEmployee(data:EmployeeDto):Observable<any>{
    const url='http://localhost:8080/app/admin/loginemployee';

    console.log(url);
    
    return this.http.post<any>(url,data);
  }


}
