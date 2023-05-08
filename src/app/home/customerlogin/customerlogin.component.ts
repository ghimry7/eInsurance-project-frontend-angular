import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerDto } from '../classes/customerDto';
import { HomeService } from '../services/homeservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  constructor(private service: HomeService, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    loginId: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  customerDto: CustomerDto = new CustomerDto();

  loginUser() {
    this.customerDto.loginId = this.loginForm.value.loginId;
    this.customerDto.password = this.loginForm.value.password;

    this.service.loginCustomer(this.customerDto).subscribe(
      (data) => {
        if (data) {
          Swal.fire("Login Succesful");
          sessionStorage.setItem('token', "asdfghjkl");
          sessionStorage.setItem('loginId', this.customerDto.loginId);
          this.router.navigate(['/customer']);
        } else {
          Swal.fire("Wrong Credentials");
        }
      }
      
    )
  }


  get userValidator() {
    return this.loginForm.get('loginId');
  }

  get passwordValidator() {
    return this.loginForm.get('password');
  }
}
