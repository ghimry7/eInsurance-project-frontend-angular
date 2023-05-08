import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Agent } from '../classes/agent';
import { ChangePasswordData } from '../classes/changePassword';
import { Marketing } from '../classes/marketing';
import { IAgent } from '../interfaces/agent';
import { Customer } from '../classes/customer';
import { Commission } from '../classes/commission';
import { CustomerInsuranceBuy } from '../classes/customerbuyinsurance';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient, private router: Router) { }

  getProfile(formData:string):Observable<IAgent>{
    const url='http://localhost:8080/app/agent/profile/'+formData;

   return this.http.get<IAgent>(url);

  }

  changePassword(data:ChangePasswordData):Observable<boolean>{
    const url='http://localhost:8080/app/agent/changepassword';

   return this.http.post<boolean>(url,data);

  }

  sendMail(data:Marketing):Observable<boolean>{
    const url='http://localhost:8080/app/agent/marketing';

    console.log(data);
    

    return this.http.post<boolean>(url,data);

  }

  getCustomer(agentLogin:any):Observable<Customer[]>{
    const url='http://localhost:8080/app/customer?agentLoginId='+agentLogin;

    console.log(url);
    

    return this.http.get<Customer[]>(url);
  }

  updateCustomer(data:Customer):Observable<boolean>{
    const url='http://localhost:8080/app/customer';

    return this.http.put<boolean>(url,data);
  }

  getCommission(loginId:any):Observable<Commission[]>{
    const url='http://localhost:8080/app/agent/commission?loginId='+loginId;

    return this.http.get<Commission[]>(url);

  }

  withdrawCommission(commission:Commission):Observable<boolean>{
    const url="http://localhost:8080/app/agent/commission";

    return this.http.put<boolean>(url,commission);
  }

  getCustomerInsurance(loginId:any):Observable<CustomerInsuranceBuy[]>{
    const url='http://localhost:8080/app/agent/custinsurance?loginId='+loginId;
    
    return this.http.get<CustomerInsuranceBuy[]>(url);

  }
}
