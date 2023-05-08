import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IInsuranceType } from 'src/app/admin/interfaces/insurancetype';
import { CustomerService } from '../services/customer.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-customernavbar',
  templateUrl: './customernavbar.component.html',
  styleUrls: ['./customernavbar.component.css']
})
export class CustomernavbarComponent implements OnInit {

  insuracetype:IInsuranceType[]=[];
  constructor(private router:Router,private service:CustomerService) { 

    this.service.getInsuracetype().subscribe((data)=>{
      for(let i=0;i<data.length;i++){
        this.insuracetype[i]=data[i];
      }
      console.log(this.insuracetype);
    });
  }

  ngOnInit(): void {
  }

  schemeName?:any;
  setScheme(data:string){
    this.schemeName=data;
    console.log(this.schemeName);
    this.service.sendData(this.schemeName);
    this.reloadComponent(false,'/customer/SchemedisplayComponent');
  }

  reloadComponent(self:boolean,urlToNavigateTo ?:string){
    //skipLocationChange:true means dont update the url to / when navigating
  //  console.log("Current route I am on:",this.router.url);
   const url=self ? this.router.url :urlToNavigateTo;
   this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
     this.router.navigate([`/${url}`]).then(()=>{
      //  console.log(`After navigation I am on:${this.router.url}`)
     })
   })
 }

 logout(){
  window.sessionStorage.clear();
  this.router.navigate(["/home"]);
  Swal.fire("Logout Succesful");
}
}
