import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IInsuranceType } from '../interfaces/insurancetype';
import { AdminserviceService } from '../services/adminservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InsuranceScheme } from '../classes/insurancescheme';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addinsurancescheme',
  templateUrl: './addinsurancescheme.component.html',
  styleUrls: ['./addinsurancescheme.component.css']
})
export class AddinsuranceschemeComponent implements OnInit {

  insuracetype: IInsuranceType[] = [];
  constructor(private router: Router, private service: AdminserviceService) {
    this.service.getInsuracetype().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        this.insuracetype[i] = data[i];
      }
      console.log(this.insuracetype);
    });
  }

  ngOnInit(): void {
  }

  public selectedFile:any=File;
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.selectedFile = file;
    }
  }

  addschemedata = new FormGroup({
    insuranceName: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    img: new FormControl(File, Validators.required),
    commissionForNewRegistration: new FormControl('', Validators.required),
    commissionInstallmentPayment: new FormControl('', Validators.required),
    note: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  });



  schemedata: InsuranceScheme = new InsuranceScheme();
  addScheme() {
    this.schemedata.insuranceName = this.addschemedata.value.insuranceName;
    this.schemedata.name = this.addschemedata.value.name;
    this.schemedata.commissionForNewRegistration = this.addschemedata.value.commissionForNewRegistration;
    this.schemedata.commissionInstallmentPayment=this.addschemedata.value.commissionInstallmentPayment;
    this.schemedata.note = this.addschemedata.value.note;
    this.schemedata.status = this.addschemedata.value.status;
    
    const formData=new FormData();

    formData.append('scheme',JSON.stringify(this.schemedata));
    formData.append('file',this.selectedFile);


    console.log(this.selectedFile);
    
    console.log(this.schemedata);
    
    this.service.addScheme(formData).subscribe((data)=>{
      if(data){
        Swal.fire("Added Successfully").then(()=>{
          window.location.reload();
        });
    
      }else{
        Swal.fire("Added Failed");
      }
    });

  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
   
  };

}
