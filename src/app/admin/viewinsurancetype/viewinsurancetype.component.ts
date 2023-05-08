import { Component, OnInit } from '@angular/core';
import { IInsuranceType } from '../interfaces/insurancetype';
import { AdminserviceService } from '../services/adminservice.service';
import { Router } from '@angular/router';
import { InsuranceType } from '../classes/insurancetype';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-viewinsurancetype',
  templateUrl: './viewinsurancetype.component.html',
  styleUrls: ['./viewinsurancetype.component.css']
})
export class ViewinsurancetypeComponent implements OnInit {

  insuracetype: IInsuranceType[] = [];
  constructor(private router: Router, private service: AdminserviceService) { }

  ngOnInit(): void {

    this.service.getInsuracetype().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        this.insuracetype[i] = data[i];
      }
      console.log(this.insuracetype);
    });
  }

  insuranceType:InsuranceType=new InsuranceType();

  edit(data:InsuranceType){
    this.insuranceType.id=data.id;
    this.insuranceType.name=data.name;
    this.insuranceType.status=data.status;

    console.log(this.insuranceType);
    
  }

  insuranceTypeData = new FormGroup({
    name: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  });

  data:InsuranceType = new InsuranceType();

  updateInsuranceType() {
    this.data.id=this.insuranceType.id;
    this.data.name = this.insuranceTypeData.value.name;
    if(this.data.name===""){
      this.data.name=this.insuranceType.name;
    }
    this.data.status = this.insuranceTypeData.value.status;

    console.log(this.data);
    
    this.service.updateInsuranceType(this.data).subscribe((data)=>{
      if(data){
        alert("Updated Succesfully");
        window.location.reload();
      }else{
        alert("Update Failed");
      }
    });
  }
}
