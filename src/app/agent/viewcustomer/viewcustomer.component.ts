import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Customer } from '../classes/customer';
import { ICustomer } from '../interfaces/customer';


import { AgentService } from '../service/agent.service';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {

  customerdata?: Customer[];
  data!:Array<any>;
  totalRecords!:number;
  page:number=1;
  
  constructor(private service: AgentService) {
    let agentLoginId = sessionStorage.getItem("loginId");
    this.data=new Array<any>();
    this.service.getCustomer(agentLoginId).subscribe((data) => {
      this.customerdata = data;
      this.data=data;
      this.totalRecords=data.length;
    })

  }

  ngOnInit(): void {
  }

  cust: ICustomer = new Customer();
  edit(item: Customer) {
    this.cust = item;
    this.cust.agentLoginId=sessionStorage.getItem("loginId");
    console.log(this.cust);
  }

  custUpdate = new FormGroup({
    status: new FormControl('', Validators.required)
  })

  updateEmployee() {
    this.cust.status = this.custUpdate.value.status;
    
    console.log(this.cust);
    

    this.service.updateCustomer(this.cust).subscribe((data) => {
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
