import { Component, OnInit } from '@angular/core';
import { ICity } from '../interfaces/city';
import { AdminserviceService } from '../services/adminservice.service';

@Component({
  selector: 'app-viewcity',
  templateUrl: './viewcity.component.html',
  styleUrls: ['./viewcity.component.css']
})
export class ViewcityComponent implements OnInit {

  constructor(private service:AdminserviceService) {
    this.getCity();
   }

  ngOnInit(): void {
  }

  city?:ICity[];
  getCity(){
    this.service.getCity().subscribe((data)=>{
      this.city=data;
    })
  }


}
