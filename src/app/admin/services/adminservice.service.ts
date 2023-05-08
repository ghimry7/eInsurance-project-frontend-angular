import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../classes/employee';
import { IEmployee } from '../interfaces/employee';
import { IInsuranceType } from '../interfaces/insurancetype';
import { InsuranceType } from '../classes/insurancetype';
import { Admin } from '../interfaces/profile';
import { ChangePasswordData } from '../classes/changePassword';
import { State } from '../classes/state';
import { IState } from '../interfaces/state';
import { City } from '../classes/city';
import { ICity } from '../interfaces/city';
import { InsurancePlan } from '../classes/insuranceplan';
import { IInsuranceScheme } from '../interfaces/insurancescheme';
import { IInsurancePlan } from '../interfaces/insuranceplan';
import { TaxSetting } from '../classes/taxsetting';
import { InsuranceSetting } from '../classes/insurancesetting';
import { InsuranceScheme } from '../classes/insurancescheme';
import { Customer } from '../interfaces/customer';
import { Commission } from '../classes/commission';
import { Agent } from '../classes/agent';
import { CustomerInsuranceBuy } from '../classes/customerinsurance';
import { IAgent } from '../interfaces/agent';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpClient, private router: Router) { }


  addEmployee(employee?: Employee): Observable<any> {

    const url = 'http://localhost:8080/app/employee';

    console.log(url);

    console.log(employee);

    return this.http.post<any>(url, employee);
  }

  getEmployee():Observable<IEmployee[]>{
    const url = 'http://localhost:8080/app/employee';

    return this.http.get<IEmployee[]>(url);
  }

  addInsuranceType(insurancetypedata:InsuranceType):Observable<boolean>{
    const url = 'http://localhost:8080/app/insurances/insurancetype';

    return this.http.post<boolean>(url,insurancetypedata);
  }

  getInsuracetype():Observable<IInsuranceType[]>{
    const url='http://localhost:8080/app/insurances/insurancetype';

    return this.http.get<IInsuranceType[]>(url);
  }

  addScheme(formData:FormData):Observable<boolean>{
   
    const url='http://localhost:8080/app/insurances/insurancescheme';

    return this.http.post<boolean>(url,formData);
  }

  getProfile(formData:string):Observable<Admin>{
    const url='http://localhost:8080/app/admin/profile/'+formData;

    console.log(url);
    

    return this.http.get<Admin>(url);
  }

  changePassword(passworddata:ChangePasswordData):Observable<boolean>{
    
    const url='http://localhost:8080/app/admin/changepassword';
   
    console.log(passworddata);

    return this.http.post<boolean>(url,passworddata);
  }

  addState(state:State):Observable<boolean>{
    const url='http://localhost:8080/app/admin/state';

    return this.http.post<boolean>(url,state);
  }

  getState():Observable<IState[]>{
    const url='http://localhost:8080/app/admin/state';

    return this.http.get<IState[]>(url);
  }

  addCity(city:City):Observable<boolean>{
    const url='http://localhost:8080/app/admin/city';

    return this.http.post<boolean>(url,city);
  }

  getCity():Observable<ICity[]>{
    const url='http://localhost:8080/app/admin/city';

    return this.http.get<ICity[]>(url);
  }

  addInsurancePlan(insurancePlanData:InsurancePlan):Observable<boolean>{
    const url='http://localhost:8080/app/insurances/insuranceplan';

    return this.http.post<boolean>(url,insurancePlanData);
  }

  getInsuranceScheme():Observable<IInsuranceScheme[]>{
    const url='http://localhost:8080/app/insurances/insurancescheme';

    return this.http.get<IInsuranceScheme[]>(url);
  }

  getInsurancePlan():Observable<IInsurancePlan[]>{
    const url='http://localhost:8080/app/insurances/insuranceplan';

    return this.http.get<IInsurancePlan[]>(url);
  }

  addTax(tax:TaxSetting):Observable<boolean>{
    const url='http://localhost:8080/app/admin/taxsetting';
    return this.http.post<boolean>(url,tax);
  }

  addInsuranceSetting(data:InsuranceSetting):Observable<boolean>{
    const url='http://localhost:8080/app/admin/insurnacesetting';
    return this.http.post<boolean>(url,data);
  }

  updateInsuranceType(insurancetypedata:InsuranceType):Observable<boolean>{
    const url = 'http://localhost:8080/app/insurances/insurancetype';

    return this.http.put<boolean>(url,insurancetypedata);
  }

  updateInsuranceScheme(newData:InsuranceScheme):Observable<boolean>{
    const url='http://localhost:8080/app/insurances/insurancescheme';

    return this.http.put<boolean>(url,newData);
  }

  updateInsurancePlan(newData:InsurancePlan):Observable<boolean>{
    const url='http://localhost:8080/app/insurances/insuranceplan';

    return this.http.put<boolean>(url,newData);
  }

  getCustomer():Observable<Customer[]>{
    const url='http://localhost:8080/app/customer/view';

    console.log(url);
    

    return this.http.get<Customer[]>(url);
  }

  getAgentCommission():Observable<Commission[]>{
    const url='http://localhost:8080/app/admin/agent/commission';

    return this.http.get<Commission[]>(url);
  }

  updateEmployee(data:Employee):Observable<boolean>{

    const url='http://localhost:8080/app/employee';

    return this.http.post<boolean>(url,data);
    
  }

  addAgent(data:Agent):Observable<boolean>{
    const url="http://localhost:8080/app/agent";
    return this.http.post<boolean>(url,data);
  }

  updateAgent(agent:Agent):Observable<boolean>{
    const url='http://localhost:8080/app/agent';
    return  this.http.put<boolean>(url,agent);
  }

  getAgent():Observable<Agent[]>{
    const url='http://localhost:8080/app/agent';

    return this.http.get<Agent[]>(url);
  }

  getCustInsurance():Observable<CustomerInsuranceBuy[]>{
    const url='http://localhost:8080/app/customer/custInsurance';
    return this.http.get<CustomerInsuranceBuy[]>(url);
  }

  getAllClaims():Observable<any>{
    const url='http://localhost:8080/app/customer/claims';
    return this.http.get<any>(url);
  }

  updateClaim(data:any):Observable<boolean>{
    const url='http://localhost:8080/app/customer/claims';
    return this.http.put<boolean>(url,data);
  }

  // public generateToken(request:any){
  //   return this.http.post("http://localhost:8080/authenticate",request,{responseType:"test" as "json"});
  // }

  // public welcome(token:any){
  //   let tokenStr='Bearer '+token;
  //   const headers=new HttpHeaders().set("Authorization",tokenStr);
  //   return this.http.get('http://localhost:8080/',{headers,responseType:'text' as 'json'});
  // }
}
