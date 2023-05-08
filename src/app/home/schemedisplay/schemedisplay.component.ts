import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceType } from 'src/app/admin/classes/insurancetype';
import Swal from 'sweetalert2';
import { InsurancePlan } from '../classes/insuranceplan';
import { InsuranceScheme } from '../classes/insurancescheme';
import { IInsurancePlan } from '../interfaces/insuranceplan';
import { IInsuranceScheme } from '../interfaces/insurancescheme';
import { HomeService } from '../services/homeservice.service';

@Component({
  selector: 'app-schemedisplay',
  templateUrl: './schemedisplay.component.html',
  styleUrls: ['./schemedisplay.component.css']
})
export class SchemedisplayComponent implements OnInit {


  insuranceSchemeData!:IInsuranceScheme[];
  schemetype?:string;
  schemeData:InsuranceScheme=new InsuranceScheme();
  constructor(private service:HomeService,private router:Router) {
    this.schemetype=this.service.getSchemeName();
    this.getScheme(this.schemetype);
   }

  ngOnInit(): void {
  
  }

  getScheme(schemetype?:string){
    this.service.getSchemeData(schemetype).subscribe((data)=>{
      this.insuranceSchemeData=data;
    });
  }

  checkName(name:string){
    if(name===this.schemetype)
    {
      return true;
    }
    else{
      return false;
    }
  }

  public show: boolean = false;
  public buttonName: any = 'More...';

  toggle() {
    this.show = !this.show;
    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "More...";
  }

  plan: IInsurancePlan = new InsurancePlan();
  getPlan(schemeName: string) {
    console.log("ts"+schemeName);
    this.service.getPlan(schemeName).subscribe((data) => {
      this.plan = data;
      console.log(this.plan);
      
    })
  }

  installmentAmount!: number;
  interestAmount!: number;
  totalAmount!: number;
  noOfYears!: number;
  months!: number;
  totalInvestAmount!: number;

  calculate(noOfYears: any, totalInvestAmount: any, months: any) {
    this.noOfYears = noOfYears;
    this.totalInvestAmount = totalInvestAmount;
    this.months = months;
    if (Number(totalInvestAmount) >= Number(this.plan.minInvestAmount) && Number(totalInvestAmount) <= Number(this.plan.maxInvestAmount) && Number(noOfYears)>=Number(this.plan.minPolicyTerm) && Number(noOfYears)<=Number(this.plan.maxPolicyTerm)) {
      this.installmentAmount = Math.trunc((totalInvestAmount / noOfYears) / (12 / months));
      this.interestAmount = Math.trunc((this.plan.profitRatio * noOfYears * totalInvestAmount) / 100);
      this.totalAmount = Math.trunc(Number(totalInvestAmount) + Number(this.interestAmount));
    } else {
      Swal.fire("Inavlid Data Entered");
    }
  }

  back(){
    this.router.navigate(["/DashboardComponent"]);
  }
}
