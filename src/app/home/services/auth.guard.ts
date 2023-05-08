import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { HomeService } from './homeservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:HomeService,private router:Router){

  }

  canActivate(){
    if(this.auth.isLoggedIn()){
      return true;
    }
    Swal.fire("Login First").then(()=>{
      this.router.navigate(['/DashboardComponent']);
    });
    return false;
  }
}
