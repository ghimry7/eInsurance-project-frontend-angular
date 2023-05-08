import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { InsurancePlan } from '../classes/insuranceplan';
import { IInsuranceScheme } from '../interfaces/insurancescheme';
import { AdminserviceService } from '../services/adminservice.service';

@Component({
  selector: 'app-addinsuranceplan',
  templateUrl: './addinsuranceplan.component.html',
  styleUrls: ['./addinsuranceplan.component.css']
})
export class AddinsuranceplanComponent implements OnInit {
  insuranceScheme?:IInsuranceScheme[];
  constructor(private service:AdminserviceService) { 

    this.getInsuranceScheme();
   }

  ngOnInit(): void {
  }
  
 
  getInsuranceScheme(){
    this.service.getInsuranceScheme().subscribe((data)=>{
        this.insuranceScheme=data;
    })
  }

  insurancePlanData: InsurancePlan = new InsurancePlan();

  insurancePlan = new FormGroup({
    insurnaceSchemeName: new FormControl('', Validators.required),
    minPolicyTerm: new FormControl('', Validators.required),
    maxPolicyTerm: new FormControl('', Validators.required),
    minAge: new FormControl('', Validators.required),
    maxAge: new FormControl('', Validators.required),
    minInvestAmount: new FormControl('', Validators.required),
    maxInvestAmount: new FormControl('', Validators.required),
    profitRatio: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  })

  addInsurancePlan() {
    this.insurancePlanData.insurnaceSchemeName=this.insurancePlan.value.insurnaceSchemeName;
    this.insurancePlanData.minPolicyTerm=this.insurancePlan.value.minPolicyTerm;
    this.insurancePlanData.maxPolicyTerm=this.insurancePlan.value.maxPolicyTerm;
    this.insurancePlanData.minAge=this.insurancePlan.value.minAge;
    this.insurancePlanData.maxAge=this.insurancePlan.value.maxAge;
    this.insurancePlanData.minInvestAmount=this.insurancePlan.value.minInvestAmount;
    this.insurancePlanData.maxInvestAmount=this.insurancePlan.value.maxInvestAmount;
    this.insurancePlanData.profitRatio=this.insurancePlan.value.profitRatio;
    this.insurancePlanData.status=this.insurancePlan.value.status;

    this.service.addInsurancePlan(this.insurancePlanData).subscribe((data)=>{
      if(data){
        Swal.fire("Added Succesfully").then(()=>{
          window.location.reload();
        });
        
      }else{
        Swal.fire("Added Unsuccessfull");
      }
    });
  }

}
