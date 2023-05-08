import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InsurancePlan } from '../classes/insuranceplan';
import { IInsurancePlan } from '../interfaces/insuranceplan';
import { AdminserviceService } from '../services/adminservice.service';

@Component({
  selector: 'app-viewinsuranceplan',
  templateUrl: './viewinsuranceplan.component.html',
  styleUrls: ['./viewinsuranceplan.component.css']
})
export class ViewinsuranceplanComponent implements OnInit {

  constructor(private service: AdminserviceService) {
    this.getInsurancePlan();
  }

  ngOnInit(): void {
  }

  insurancePlanData?: IInsurancePlan[];
  getInsurancePlan() {

    this.service.getInsurancePlan().subscribe((data) => {
      this.insurancePlanData = data;
    })
  }

  formData: InsurancePlan = new InsurancePlan();

  edit(data: InsurancePlan) {
    this.formData.id = data.id;
    this.formData.insurnaceSchemeName = data.insurnaceSchemeName;
    this.formData.minPolicyTerm = data.minPolicyTerm;
    this.formData.maxPolicyTerm = data.maxPolicyTerm;
    this.formData.minInvestAmount = data.minInvestAmount;
    this.formData.maxInvestAmount = data.maxInvestAmount;
    this.formData.minAge=data.minAge;
    this.formData.maxAge=data.maxAge;
    this.formData.profitRatio = data.profitRatio;
    this.formData.status = data.status;

  }

  insurancePlan = new FormGroup({
    minPolicyTerm: new FormControl('', Validators.required),
    maxPolicyTerm: new FormControl('', Validators.required),
    minAge: new FormControl('', Validators.required),
    maxAge: new FormControl('', Validators.required),
    minInvestAmount: new FormControl('', Validators.required),
    maxInvestAmount: new FormControl('', Validators.required),
    profitRatio: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  })

  newData: InsurancePlan = new InsurancePlan();
  updateInsurancePlan() {
    this.newData.id = this.formData.id;
    this.newData.insurnaceSchemeName = this.formData.insurnaceSchemeName;
    this.newData.minPolicyTerm = this.insurancePlan.value.minPolicyTerm;
    if (this.newData.minPolicyTerm === "") {
      this.newData.minPolicyTerm = this.formData.minPolicyTerm;
    }
    this.newData.maxPolicyTerm = this.insurancePlan.value.maxPolicyTerm;
    if (this.newData.maxPolicyTerm === "") {
      this.newData.maxPolicyTerm = this.formData.maxPolicyTerm;
    }
    this.newData.minAge = this.insurancePlan.value.minAge;
    if (this.newData.minAge === "") {
      this.newData.minAge = this.formData.minAge;
    }
    this.newData.maxAge = this.insurancePlan.value.maxAge;
    if (this.newData.maxAge === "") {
      this.newData.maxAge = this.formData.maxAge;
    }
    this.newData.minInvestAmount = this.insurancePlan.value.minInvestAmount;
    if (this.newData.minInvestAmount === "") {
      this.newData.minInvestAmount = this.formData.minInvestAmount;
    }
    this.newData.maxInvestAmount = this.insurancePlan.value.maxInvestAmount;
    if (this.newData.maxInvestAmount === "") {
      this.newData.maxInvestAmount = this.formData.maxInvestAmount;
    }
    this.newData.profitRatio = this.insurancePlan.value.profitRatio;
    if (this.newData.profitRatio === "") {
      this.newData.profitRatio = this.formData.profitRatio;
    }
    this.newData.status = this.insurancePlan.value.status;

    this.service.updateInsurancePlan(this.newData).subscribe((data) => {
      if (data) {
        alert("Updated Succesfully");
        window.location.reload();
      }
      else {
        alert("Update Failed");
      }
    })

  }
}
