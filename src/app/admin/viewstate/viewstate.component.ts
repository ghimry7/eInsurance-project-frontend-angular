import { Component, OnInit } from '@angular/core';
import { IState } from '../interfaces/state';
import { AdminserviceService } from '../services/adminservice.service';
@Component({
  selector: 'app-viewstate',
  templateUrl: './viewstate.component.html',
  styleUrls: ['./viewstate.component.css']
})
export class ViewstateComponent implements OnInit {

  state?:IState[];
  constructor(private service:AdminserviceService) {
    this.getState(); 
  }

  ngOnInit(): void {
  }

  getState(){
    this.service.getState().subscribe((data)=>{
      this.state=data;
    })
  }

}
