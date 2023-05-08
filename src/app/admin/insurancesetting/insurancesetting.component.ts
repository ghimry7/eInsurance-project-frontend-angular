import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { InsuranceSetting } from '../classes/insurancesetting';
import { AdminserviceService } from '../services/adminservice.service';

@Component({
  selector: 'app-insurancesetting',
  templateUrl: './insurancesetting.component.html',
  styleUrls: ['./insurancesetting.component.css']
})
export class InsurancesettingComponent implements OnInit {

  constructor(private service:AdminserviceService) { }

  ngOnInit(): void {
  }

  insuranceSettingData:InsuranceSetting=new InsuranceSetting();

  insuranceSettingdata=new FormGroup({
    claimDeduction:new FormControl('',Validators.required),
    penaltyAmount:new FormControl('',Validators.required)
  });

  addInsuranceSetting(){
    this.insuranceSettingData.claimDeduction=this.insuranceSettingdata.value.claimDeduction;
    this.insuranceSettingData.penaltyAmount=this.insuranceSettingdata.value.penaltyAmount;

    this.service.addInsuranceSetting(this.insuranceSettingData).subscribe((data)=>{
      if(data){
        Swal.fire("Success").then(()=>{
          window.location.reload();
        });
      }
      else{
        Swal.fire("Failed");
      }
    });
  }
  
}
