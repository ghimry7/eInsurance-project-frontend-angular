import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Commission } from '../classes/commission';
import { AgentService } from '../service/agent.service';

@Component({
  selector: 'app-commissionwithdrawal',
  templateUrl: './commissionwithdrawal.component.html',
  styleUrls: ['./commissionwithdrawal.component.css']
})
export class CommissionwithdrawalComponent implements OnInit {

  commission!:Commission[];
  total:number=0;
  data!:Array<any>;
  totalRecords!:number;
  page:number=1;
  constructor(private service:AgentService) { 
    this.data=new Array<any>();
    service.getCommission(sessionStorage.getItem('loginId')).subscribe((data)=>{
      this.commission=data;
      this.data=data;
      this.totalRecords=data.length;
      for(let i=0;i<data.length;i++){
        if(data[i].withdrawn==="yes"){
          this.total=this.total+data[i].commissionAmount;
        }
      }
    })
  }

  ngOnInit(): void {
  }


  commissionData!:Commission;
  storeData(commissionData:any){
    this.commissionData=commissionData;
    this.commissionData.loginId=sessionStorage.getItem("loginId");
    
  }

  withdraw(){
    this.service.withdrawCommission(this.commissionData).subscribe((data)=>{
      if(data){
        Swal.fire("Withdrawn Success").then(()=>{
          window.location.reload();
        });
      }
      else{
        Swal.fire("Withdrawn Failed");
      }
    });
  }
}
