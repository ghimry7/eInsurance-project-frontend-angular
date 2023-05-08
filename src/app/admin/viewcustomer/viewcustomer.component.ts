import { Component, OnInit } from '@angular/core';
import { Customer } from '../interfaces/customer';
import { AdminserviceService } from '../services/adminservice.service';

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
  constructor(private service: AdminserviceService) {

    this.service.getCustomer().subscribe((data) => {
      this.customerdata = data;
      this.data=data;
      this.totalRecords=data.length;
    })
  }

  ngOnInit(): void {
  }

}
