import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { TaxSetting } from '../classes/taxsetting';
import { AdminserviceService } from '../services/adminservice.service';

@Component({
  selector: 'app-taxsetting',
  templateUrl: './taxsetting.component.html',
  styleUrls: ['./taxsetting.component.css']
})
export class TaxsettingComponent implements OnInit {

  constructor(private service:AdminserviceService) { }

  ngOnInit(): void {
  }

  tax:TaxSetting=new TaxSetting();

  taxData=new FormGroup({
    taxPercentage:new FormControl('',Validators.required)
  });

  addTax(){
    this.tax.taxPercentage=this.taxData.value.taxPercentage;
    this.service.addTax(this.tax).subscribe((data)=>{
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
