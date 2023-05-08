import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IInsuranceType } from 'src/app/admin/interfaces/insurancetype';
import { HomeService } from '../services/homeservice.service';
@Component({
  selector: 'app-homenavbar',
  templateUrl: './homenavbar.component.html',
  styleUrls: ['./homenavbar.component.css']
})
export class HomenavbarComponent implements OnInit {


  insuracetype:IInsuranceType[]=[];
  visible?:boolean;
  constructor(private router:Router,private service:HomeService) {
    

    this.service.getInsuracetype().subscribe((data)=>{
      for(let i=0;i<data.length;i++){
        this.insuracetype[i]=data[i];
      }
      console.log(this.insuracetype);
    });

   }
  ngOnInit(): void {
    
  }


  checkLocalS(){
    if(!!sessionStorage.getItem('loginId')){
      this.visible=false;
    }else{
      this.visible=true;
    }
    return this.visible;
  }

  schemeName?:any;
  setScheme(data:string){
    this.schemeName=data;
    console.log(this.schemeName);
    
    this.service.sendData(this.schemeName);
    this.reloadComponent(false,'/SchemedisplayComponent');
    // this.router.navigate(['/SchemedisplayComponent']);

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

  
}
