import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.fragment.subscribe(res=>{
      this.jumpTo(res);
    })
  }

  ngOnInit(): void {
  }

  jumpTo(section:any) {
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

}
