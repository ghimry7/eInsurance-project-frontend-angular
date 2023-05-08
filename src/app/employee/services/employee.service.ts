import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { State } from '../classes/state';
import { City } from '../classes/city';
import { ICity } from '../interfaces/city';
import { Observable } from 'rxjs';
import { InsuranceType } from 'src/app/employee/classes/insurancetype';
import { InsurancePlan } from '../classes/insuranceplan';
import { IInsuranceScheme } from '../interfaces/insurancescheme';
import { IInsuranceType } from '../interfaces/insurancetype';
import { IInsurancePlan } from '../interfaces/insuranceplan';
import { InsuranceScheme } from '../classes/insurancescheme';
import { Customer } from '../interfaces/customer';
import { Employee } from 'src/app/admin/classes/employee';
import { ChangePasswordData } from '../classes/changePassword copy';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }


  saveAgent(data:any){
      console.log(data);
      const url='http://localhost:8080/app/agent';

      return this.http.post<any>(url,data);
    
  }

  saveInsuranceSetting(data:any){
    console.log(data);
    const url='http://localhost:8080/app/insurance-setting';
    return this.http.post<any>(url,data);
  }

  saveTax(data:any){
    console.log(data);
    const url='http://localhost:8080/app/tax-setting';
    return this.http.post<any>(url,data);
  }

  addState(state:State):Observable<boolean>{
    const url='http://localhost:8080/app/admin/state';

    return this.http.post<boolean>(url,state);
  }

  
  saveCity(data:any){
    // console.log(data);
    const url='http://localhost:8080/app/city';
    return this.http.post<any>(url,data);
  }

  getAgent(loginId:any){
    const url='http://localhost:8080/app/agent?loginId=' + loginId;
    return this.http.get<any>(url);
  }

  getState(){
    const url='http://localhost:8080/app/state';
    return this.http.get<any>(url);
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
  addInsuranceType(insurancetypedata:InsuranceType):Observable<boolean>{
    const url = 'http://localhost:8080/app/insurances/insurancetype';

    return this.http.post<boolean>(url,insurancetypedata);
  }
  addScheme(formData:FormData):Observable<any>{
   
    const url='http://localhost:8080/app/insurances/insurancescheme';

    return this.http.post<any>(url,formData);
  }

  getInsuranceScheme():Observable<IInsuranceScheme[]>{
    const url='http://localhost:8080/app/insurances/insurancescheme';

    return this.http.get<IInsuranceScheme[]>(url);
  }
  getInsuracetype():Observable<IInsuranceType[]>{
    const url='http://localhost:8080/app/insurances/insurancetype';

    return this.http.get<IInsuranceType[]>(url);
  }
  getInsurancePlan():Observable<IInsurancePlan[]>{
    const url='http://localhost:8080/app/insurances/insuranceplan';

    return this.http.get<IInsurancePlan[]>(url);
  }
  updateInsurancePlan(newData:InsurancePlan):Observable<boolean>{
    const url='http://localhost:8080/app/insurances/insuranceplan';

    return this.http.put<boolean>(url,newData);
  }
  updateInsuranceScheme(newData:InsuranceScheme):Observable<boolean>{
    const url='http://localhost:8080/app/insurances/insurancescheme';

    return this.http.put<boolean>(url,newData);
  }
  updateInsuranceType(insurancetypedata:InsuranceType):Observable<boolean>{
    const url = 'http://localhost:8080/app/insurances/insurancetype';

    return this.http.put<boolean>(url,insurancetypedata);
  }
  getCustomer():Observable<Customer[]>{
    const url='http://localhost:8080/app/customer/view';

    console.log(url);
    

    return this.http.get<Customer[]>(url);
  }

  getProfile(loginId:any):Observable<any>{
    const url='http://localhost:8080/app/employee/profile?loginId='+loginId;

    console.log(url);
    
    return this.http.get<any>(url);
  }

  changePassword(data:ChangePasswordData):Observable<boolean>{
    const url='http://localhost:8080/app/employee/changepassword';
    return this.http.post<boolean>(url,data);
  }




}
