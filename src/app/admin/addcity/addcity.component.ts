import { Component, OnInit } from '@angular/core';
import { IState } from '../interfaces/state';
import { AdminserviceService } from '../services/adminservice.service';
import {FormGroup,Validators,FormControl} from '@angular/forms';
import { City } from '../classes/city';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent implements OnInit {

  state?:IState[];
  constructor(private service:AdminserviceService) {
    this.getState();
   }

  ngOnInit(): void {
  }

  getState(){
    this.service.getState().subscribe((data)=>{
      this.state=data;
    })
  }

  cityData=new FormGroup({
    stateName:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required)
  });

  city:City=new City();

  addCity(){
    this.city.stateName=this.cityData.value.stateName;
    this.city.name=this.cityData.value.name;

    this.service.addCity(this.city).subscribe((data)=>{
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
