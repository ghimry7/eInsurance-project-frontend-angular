import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminserviceService } from '../services/adminservice.service';

@Component({
  selector: 'app-profileclaim',
  templateUrl: './profileclaim.component.html',
  styleUrls: ['./profileclaim.component.css']
})
export class ProfileclaimComponent implements OnInit {

  data=new Array<any>();
  totalRecords!:number;
  page:number=1;
  constructor(private service:AdminserviceService) { 

    service.getAllClaims().subscribe((data)=>{
      this.data=data;
    })
  }

  ngOnInit(): void {
  }

  approve(data:any){
    this.service.updateClaim(data).subscribe((response)=>{
      if(response){
        Swal.fire("Approved").then(()=>{
          window.location.reload();
        });

      }
    })
  }

}
