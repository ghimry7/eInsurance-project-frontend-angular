import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../interfaces/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {

  profile?: ICustomer;
  constructor(private service: CustomerService) {
    const loginId: any = sessionStorage.getItem('loginId');
    this.service.getProfile(loginId).subscribe((data) => {
      this.profile = data;
    })
  }

  ngOnInit(): void {
  }

}
