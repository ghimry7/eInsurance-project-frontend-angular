import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agentnavbar',
  templateUrl: './agentnavbar.component.html',
  styleUrls: ['./agentnavbar.component.css']
})
export class AgentnavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    window.sessionStorage.clear();
    this.router.navigate(["/home"]);
    Swal.fire("Logout Succesful");
  }
}
