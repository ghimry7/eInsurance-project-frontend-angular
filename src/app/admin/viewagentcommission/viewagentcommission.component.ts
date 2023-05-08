import { Component, OnInit } from '@angular/core';
import { Commission } from '../classes/commission';
import { AdminserviceService } from '../services/adminservice.service';

@Component({
  selector: 'app-viewagentcommission',
  templateUrl: './viewagentcommission.component.html',
  styleUrls: ['./viewagentcommission.component.css']
})
export class ViewagentcommissionComponent implements OnInit {

  commission!:Commission[];
  data!:Array<any>;
  totalRecords!:number;
  page:number=1;
  constructor(private service:AdminserviceService) {
    service.getAgentCommission().subscribe((data)=>{
      this.commission=data;
      this.data=data;
      this.totalRecords=data.length;
    })
   }

  ngOnInit(): void {
  }

}
