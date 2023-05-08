import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentDto } from '../classes/agentDto';
import { HomeService } from '../services/homeservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agentlogin',
  templateUrl: './agentlogin.component.html',
  styleUrls: ['./agentlogin.component.css']
})
export class AgentloginComponent implements OnInit {

  constructor(private service: HomeService, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    loginId: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  agentDto: AgentDto = new AgentDto();

  loginUser() {
    this.agentDto.loginId = this.loginForm.value.loginId;
    this.agentDto.password = this.loginForm.value.password;

    this.service.loginAgent(this.agentDto).subscribe(
      (data) => {
        if (data) {
          Swal.fire("Login Succesful");
          sessionStorage.setItem('token', "asdfghjkl");
          sessionStorage.setItem('loginId', this.agentDto.loginId);
          this.router.navigate(['/Agent']);
        } else {
          Swal.fire("Wrong Credentials");
        }
      }
      
    )
  }
  get userValidator() {
    return this.loginForm.get('loginId');
  }

  get passwordValidator() {
    return this.loginForm.get('password');
  }
}
