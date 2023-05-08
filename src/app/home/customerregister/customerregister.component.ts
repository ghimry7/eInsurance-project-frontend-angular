import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,Validator, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { Customer } from '../classes/customer';
import { HomeService } from '../services/homeservice.service';


@Component({
  selector: 'app-customerregister',
  templateUrl: './customerregister.component.html',
  styleUrls: ['./customerregister.component.css']
})
export class CustomerregisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private service:HomeService) { }

  ngOnInit(): void {
  }

  customerData=this.formBuilder.group({
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    loginId:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    confirmPassword:new FormControl('',Validators.required),
    phoneNumber:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    nominee:new FormControl('',Validators.required),
    nomineeRelation:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required),
    agentLoginId:new FormControl('',Validators.required)
  },
  {
    validator:this.MustMatch('password','confirmPassword')
  })

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true })
      }
      else {
        matchingControl.setErrors(null);
      }
    }
  }

  get passwordValidator() {
    return this.customerData.get('Password');
  }

  get confirmPasswordValidator() {
    return this.customerData.get('confirmPassword');
  }

  cust:Customer=new Customer();
  registerCust(){
    this.cust.firstName=this.customerData.value.firstName;
    this.cust.lastName=this.customerData.value.lastName;
    this.cust.dateOfBirth=this.customerData.value.dob;
    this.cust.loginId=this.customerData.value.loginId;
    this.cust.password=this.customerData.value.password;
    this.cust.email=this.customerData.value.email;
    this.cust.phoneNumber=this.customerData.value.phoneNumber;
    this.cust.city=this.customerData.value.city;
    this.cust.state=this.customerData.value.state;
    this.cust.nominee=this.customerData.value.nominee;
    this.cust.nomineeRelation=this.customerData.value.nomineeRelation;
    this.cust.agentLoginId=this.customerData.value.agentLoginId;
    this.cust.status="inactive";

    this.service.registerCust(this.cust).subscribe((data)=>{
      if(data){
        Swal.fire("Success").then(()=>{
          window.location.reload();
        });
      }
      else{
        Swal.fire("Failed");
      }
    });


  }

}
