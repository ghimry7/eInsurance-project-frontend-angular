import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../classes/employee';
import { IEmployee } from '../interfaces/employee';
import { AdminserviceService } from '../services/adminservice.service';


@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(private service:AdminserviceService) { }

  employeedata?:IEmployee[];
  data!:Array<any>;
  totalRecords!:number;
  page:number=1;
  ngOnInit(): void {
    this.service.getEmployee().subscribe((data)=>{
      this.employeedata=data;
      this.data=data;
      this.totalRecords=data.length;
    })
  }

  emp:IEmployee=new Employee();
  edit(item:Employee){
   this.emp=item;
  }

  employeeUpdate=new FormGroup({
    status:new FormControl('',Validators.required)
  })

  updateEmployee(){
    this.emp.status=this.employeeUpdate.value.status;
    console.log(this.emp);
  
    this.service.updateEmployee(this.emp).subscribe((data)=>{
      if(data){
        alert("Updated Succesfully");
        window.location.reload();
      }else{
        alert("Update Failed");
      }
    })
  }


}
