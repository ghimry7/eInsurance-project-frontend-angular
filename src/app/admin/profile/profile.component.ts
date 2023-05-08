import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../services/adminservice.service';
import { Admin } from '../interfaces/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile!:Admin;
  constructor(private service:AdminserviceService) {
    
    const loginId:any=sessionStorage.getItem('loginId');

    console.log(loginId);
    
    this.service.getProfile(loginId).subscribe((data)=>{
     this.profile=data;
    })
   }

  ngOnInit(): void {
  }

}
