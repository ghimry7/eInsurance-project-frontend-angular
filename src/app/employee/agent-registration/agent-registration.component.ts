import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { Agent } from '../classes/agent';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-agent-registration',
  templateUrl: './agent-registration.component.html',
  styleUrls: ['./agent-registration.component.css']
})
export class AgentRegistrationComponent implements OnInit {

  constructor(private service:EmployeeService) { }

  
  agentRegistration = new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    loginId:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    emailId:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    qualification:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required)
    
});

  ngOnInit(): void {
  }
  agent:Agent=new Agent();
  SaveData(){
    this.agent.firstName=this.agentRegistration.value.firstName;
    this.agent.lastName=this.agentRegistration.value.lastName;
    this.agent.loginId=this.agentRegistration.value.loginId;
    this.agent.password=this.agentRegistration.value.password;
    this.agent.emailId=this.agentRegistration.value.emailId;
    this.agent.city=this.agentRegistration.value.city;
    this.agent.state=this.agentRegistration.value.state;
    this.agent.qualification=this.agentRegistration.value.qualification;
    this.agent.status=this.agentRegistration.value.status;
    console.log(this.agentRegistration.value);
    this.service.saveAgent(this.agent).subscribe();
  }

}
