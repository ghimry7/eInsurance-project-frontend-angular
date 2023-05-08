import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Marketing } from '../classes/marketing';
import { AgentService } from '../service/agent.service';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {

  constructor(private service:AgentService) { }

  ngOnInit(): void {
  }

  marketingdata:Marketing=new Marketing();

  formData=new FormGroup({
    email:new FormControl('',Validators.required),
    subject:new FormControl('',Validators.required),
    message:new FormControl('',Validators.required)
  })

  sendMail(){
    this.marketingdata.loginId=sessionStorage.getItem('loginId');
    this.marketingdata.email=this.formData.value.email;
    this.marketingdata.subject=this.formData.value.subject;
    this.marketingdata.message=this.formData.value.message;


    console.log(this.marketingdata);
    
    this.service.sendMail(this.marketingdata).subscribe((data)=>{
      if(data){
        Swal.fire("Sended Succesfully").then(()=>{
          window.location.reload();
        });
      }else{
        Swal.fire("Couldn't send");
      }
    });
  }

}
