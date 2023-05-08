import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  visible?:boolean;
  checkLocalS(){
    if(!!sessionStorage.getItem('loginId')){
      this.visible=false;
    }else{
      this.visible=true;
    }
    return this.visible;
  }
}
