import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../classes/employee';
import { AdminserviceService } from '../services/adminservice.service';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private service:AdminserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  employeeData = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    loginId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  });

  employeedata:Employee=new Employee();

  addEmployeeFun() {
    this.employeedata.firstName = this.employeeData.value.firstName;
    this.employeedata.lastName = this.employeeData.value.lastName;
    this.employeedata.loginId = this.employeeData.value.loginId;
    this.employeedata.password = this.employeeData.value.password;
    this.employeedata.email = this.employeeData.value.email;
    this.employeedata.city = this.employeeData.value.city;
    this.employeedata.state = this.employeeData.value.state;
    this.employeedata.status = this.employeeData.value.status;
    this.employeedata.adminLoginId=sessionStorage.getItem('loginId');

    this.service.addEmployee(this.employeedata).subscribe((data)=>{
      if(data){
        Swal.fire("Register Success").then(()=>{
          window.location.reload();
        });
      }
      else{
        Swal.fire("Register Failed");
      }
    },error=>{
      Swal.fire(error);
    });
    
  }

}
