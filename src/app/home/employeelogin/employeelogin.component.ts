import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../services/homeservice.service';
import Swal from 'sweetalert2';
import { AgentDto } from '../classes/agentDto';
import { EmployeeDto } from '../classes/employeedto';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  constructor(private service: HomeService, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    loginId: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  employeeDto:EmployeeDto=new EmployeeDto();

  loginUser() {
    this.employeeDto.loginId = this.loginForm.value.loginId;
    this.employeeDto.password = this.loginForm.value.password;

    this.service.loginEmployee(this.employeeDto).subscribe(
      (data) => {
        if (data!=null) {
          Swal.fire("Login Succesful");
          sessionStorage.setItem('token', "asdfghjkl");
          sessionStorage.setItem('loginId', this.employeeDto.loginId);
          this.router.navigate(['/employee']);
        } else {
          Swal.fire("Wrong Credentials");
        }
      },
      (error)=>{
        console.log(error.message);
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
