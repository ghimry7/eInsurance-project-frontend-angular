import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import {NgxExtendedPdfViewerService} from 'ngx-extended-pdf-viewer';
import { CustomerDocuments } from '../classes/customerdocument';

@Component({
  selector: 'app-customerdocuments',
  templateUrl: './customerdocuments.component.html',
  styleUrls: ['./customerdocuments.component.css']
})
export class CustomerdocumentsComponent implements OnInit {
  public page=2;
  public pageLabel!:string;
  document:CustomerDocuments=new CustomerDocuments();
  constructor(private service:CustomerService,private pdfService:NgxExtendedPdfViewerService) { 
    service.getDocument(sessionStorage.getItem('loginId')).subscribe((data)=>{
      this.document=data;
      console.log(this.document);
      
    });
  }

  ngOnInit(): void {
  }

  public adhar:any=File;
  onAdharSelected(event:any){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.adhar = file;
    }
  }

  public pan:any=File;
  onPanSelected(event:any){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.pan = file;
    }

  }
  loginId:any;
  submitDocuments(){
    const formData=new FormData();
    this.loginId=sessionStorage.getItem('loginId');
       
    formData.append('adhar',this.adhar);
    formData.append('pan',this.pan);
    formData.append('loginId',this.loginId);

    this.service.addDocuments(formData).subscribe((data)=>{
      if(data){
        alert("Submited Successfully");
        window.location.reload();
      }else{
        alert("Submit Failed");
      }
    })


  }



}
