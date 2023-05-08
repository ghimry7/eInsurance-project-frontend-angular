import { Component, OnInit } from '@angular/core';
import { InsuranceScheme } from '../classes/insurancescheme';
import { IInsuranceScheme } from '../interfaces/insurancescheme';
import { AdminserviceService } from '../services/adminservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-viewinsurancescheme',
  templateUrl: './viewinsurancescheme.component.html',
  styleUrls: ['./viewinsurancescheme.component.css']
})
export class ViewinsuranceschemeComponent implements OnInit {
  insuranceSchemeData?:IInsuranceScheme[];
  
  constructor(private service:AdminserviceService) {
    this.getInsuranceScheme();
   }

  ngOnInit(): void {
  }

  getInsuranceScheme(){
    this.service.getInsuranceScheme().subscribe((data)=>{
        this.insuranceSchemeData=data;
    })
  }

  insuranceScheme:InsuranceScheme=new InsuranceScheme();
  editor?:HTMLAreaElement;
  edit(data:InsuranceScheme){
    this.insuranceScheme.id=data.id;
    this.insuranceScheme.insuranceName=data.insuranceName;
    this.insuranceScheme.name=data.name;
    this.insuranceScheme.commissionForNewRegistration=data.commissionForNewRegistration;
    this.insuranceScheme.commissionInstallmentPayment=data.commissionInstallmentPayment;
    this.editor=data.note;
    this.insuranceScheme.status=data.status;

    console.log(this.insuranceScheme);
    
  }


  insuranceTypeData=new FormGroup({
    name: new FormControl('', Validators.required),
    img: new FormControl(File, Validators.required),
    commissionForNewRegistration: new FormControl('', Validators.required),
    commissionInstallmentPayment: new FormControl('', Validators.required),
    note: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  });


  newData:InsuranceScheme=new InsuranceScheme();
  updateInsuranceType(){
    this.newData.id=this.insuranceScheme.id;
    this.newData.insuranceName=this.insuranceScheme.insuranceName;
    this.newData.name=this.insuranceTypeData.value.name;
    if(this.newData.name===""){
      this.newData.name=this.insuranceScheme.name;
    }
    this.newData.commissionForNewRegistration=this.insuranceTypeData.value.commissionForNewRegistration;
    if(this.newData.commissionForNewRegistration===""){
      this.newData.commissionForNewRegistration=this.insuranceScheme.commissionForNewRegistration;
    }
    this.newData.commissionInstallmentPayment=this.insuranceTypeData.value.commissionInstallmentPayment;
    if(this.newData.commissionInstallmentPayment===""){
      this.newData.commissionInstallmentPayment=this.insuranceScheme.commissionInstallmentPayment;
    }
    this.newData.note=this.insuranceTypeData.value.note;
    if(this.newData.note===""){
      this.newData.name=this.editor;
    }
    this.newData.status=this.insuranceTypeData.value.status;

    this.service.updateInsuranceScheme(this.newData).subscribe((data)=>{
      if(data!=null){
        alert("Updated Successfully");
        window.location.reload();
      }else{
        alert("Updated Failed");
      }
    })
  }
}
