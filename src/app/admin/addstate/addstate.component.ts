import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormControl} from '@angular/forms';
import Swal from 'sweetalert2';
import { State } from '../classes/state';
import { AdminserviceService } from '../services/adminservice.service';
@Component({
  selector: 'app-addstate',
  templateUrl: './addstate.component.html',
  styleUrls: ['./addstate.component.css']
})
export class AddstateComponent implements OnInit {

  constructor(private service:AdminserviceService) { }

  ngOnInit(): void {
  }


  stateData=new FormGroup({
    name:new FormControl('',Validators.required)
  }
  );

  state:State=new State();
  addState(){
    this.state.name=this.stateData.value.name;

    console.log(this.state);
    
    this.service.addState(this.state).subscribe((data)=>{
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
