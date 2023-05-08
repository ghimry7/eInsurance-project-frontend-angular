import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/admin/classes/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:Employee=new Employee();
  constructor(private service:EmployeeService) {
    
    const loginId:any=sessionStorage.getItem('loginId');

    console.log(loginId);
    
    this.service.getProfile(loginId).subscribe((data)=>{
     this.profile=data;
     console.log("profile"+data);
     
    })
   }

  ngOnInit(): void {
  }

}
