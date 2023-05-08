import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InsuranceType } from '../classes/insurancetype';
import { AdminserviceService } from '../services/adminservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-addinsurancetype',
  templateUrl: './addinsurancetype.component.html',
  styleUrls: ['./addinsurancetype.component.css']
})
export class AddinsurancetypeComponent implements OnInit {

  constructor(private service: AdminserviceService) { }

  ngOnInit(): void {
  }

  insuranceTypeData = new FormGroup({
    name: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  });

  insurancetype: InsuranceType = new InsuranceType();
  addInsuranceType() {
    this.insurancetype.name = this.insuranceTypeData.value.name;
    this.insurancetype.status = this.insuranceTypeData.value.status;

    this.service.addInsuranceType(this.insurancetype).subscribe((data)=>{
      if(data){
        Swal.fire("Added Succesfully").then(()=>{
          window.location.reload();
        });
       
      }else{
        Swal.fire("Added Failed");
      }
    });
  }

}
