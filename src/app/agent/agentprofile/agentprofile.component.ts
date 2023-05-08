import { Component, OnInit } from '@angular/core';
import { IAgent } from '../interfaces/agent';
import { AgentService } from '../service/agent.service';

@Component({
  selector: 'app-agentprofile',
  templateUrl: './agentprofile.component.html',
  styleUrls: ['./agentprofile.component.css']
})
export class AgentprofileComponent implements OnInit {

  profile?:IAgent;
  constructor(private service:AgentService) { 

    const loginId:any=sessionStorage.getItem('loginId');

    console.log(loginId);
    
    this.service.getProfile(loginId).subscribe((data)=>{
     this.profile=data;
    })
  }

  ngOnInit(): void {
  }

 

}
