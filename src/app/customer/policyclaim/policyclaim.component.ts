import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-policyclaim',
  templateUrl: './policyclaim.component.html',
  styleUrls: ['./policyclaim.component.css']
})
export class PolicyclaimComponent implements OnInit {

  data!:Array<any>;
  totalRecords!:number;
  page:number=1;
  constructor(private service:CustomerService) {
    this.service.getClaimDetail(sessionStorage.getItem('loginId')).subscribe((data)=>{
      this.data=data;
    })
   }

  ngOnInit(): void {
  }

}
