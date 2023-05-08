import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminDto } from '../classes/admin-dto';
import { HomeService } from '../services/homeservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private service:HomeService,private router:Router) { }

  ngOnInit(): void {
  
  }

  loginForm = new FormGroup({
    loginId: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  adminDto:AdminDto={loginId:'',password:''};
  adminDetail:any;
  loginUser() {
    console.log(this.loginForm.value.loginId);
    
    this.adminDto.loginId=this.loginForm.value.loginId;
    this.adminDto.password=this.loginForm.value.password;

    console.log(this.adminDto);
    
    this.service.login(this.adminDto).subscribe((data)=>{
      if(data){
        Swal.fire("Login Succesful");
        this.setSession();
        this.router.navigate(['/admin']);
      }else{
        Swal.fire("Wrong Credentials");
      }
    });
    
  }

  get userValidator() {
    return this.loginForm.get('loginId');
  }

  get passwordValidator() {
    return this.loginForm.get('password');
  }

  setSession(){
    sessionStorage.setItem('token',"asdfghjkl");
    sessionStorage.setItem('loginId',this.adminDto.loginId);
  }
}
