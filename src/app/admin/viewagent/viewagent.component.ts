import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Agent } from '../classes/agent';
import { IAgent } from '../interfaces/agent';
import { AdminserviceService } from '../services/adminservice.service';

@Component({
  selector: 'app-viewagent',
  templateUrl: './viewagent.component.html',
  styleUrls: ['./viewagent.component.css']
})
export class ViewagentComponent implements OnInit {

  agentdata!:Agent[];
  data!:Array<any>;
  totalRecords!:number;
  page:number=1;
  constructor(private service:AdminserviceService) {
    service.getAgent().subscribe((data)=>{
      this.agentdata=data;
      this.data=data;
      this.totalRecords=data.length;
    }) 
   }

  ngOnInit(): void {

  }

  agent:Agent=new Agent();
  edit(item:Agent){
   this.agent=item;
   console.log(this.agent);
  }

  agentUpdate=new FormGroup({
    status:new FormControl('',Validators.required)
  })

  updateAgent(){
    this.agent.status=this.agentUpdate.value.status;
    
    

    this.service.updateAgent(this.agent).subscribe((data)=>{
      if(data){
        Swal.fire("Updated Succesfully");
        window.location.reload();
      }else{
        Swal.fire("Update Failed");
      }
    })
  }





}
