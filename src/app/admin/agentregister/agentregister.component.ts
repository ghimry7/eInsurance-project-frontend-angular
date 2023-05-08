import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Agent } from '../classes/agent';
import { AdminserviceService } from '../services/adminservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agentregister',
  templateUrl: './agentregister.component.html',
  styleUrls: ['./agentregister.component.css']
})
export class AgentregisterComponent implements OnInit {


  agent:Agent=new Agent();
  constructor(private service:AdminserviceService) { }

  ngOnInit(): void {
  }

  agentData=new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    loginId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    qualification: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  })

  addAgentFun(){
    this.agent.firstName = this.agentData.value.firstName;
    this.agent.lastName = this.agentData.value.lastName;
    this.agent.loginId = this.agentData.value.loginId;
    this.agent.password = this.agentData.value.password;
    this.agent.email = this.agentData.value.email;
    this.agent.city = this.agentData.value.city;
    this.agent.state = this.agentData.value.state;
    this.agent.qualification=this.agentData.value.qualification;
    this.agent.status = this.agentData.value.status;

    this.service.addAgent(this.agent).subscribe((data)=>{
      if(data){
        Swal.fire("Registration Succesful").then(()=>{
          window.location.reload();
        });
      }
      else{
        Swal.fire("Registration Succesful");
      }

    });

  }

}
