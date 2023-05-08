import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangePasswordData } from '../classes/changePassword';
import { EmployeeService } from '../services/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private service: EmployeeService) { }

  ngOnInit(): void {
  }

  passwordData = this.formBuilder.group({
    currentPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  },
    {
      validator: this.MustMatch('newPassword', 'confirmPassword')
    })

  get currentPasswordValidator() {
    return this.passwordData.get('currentPassword');
  }

  get newPasswordValidator() {
    return this.passwordData.get('newPassword');
  }

  get confirmPasswordValidator() {
    return this.passwordData.get('confirmPassword');
  }

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

  passworddata: ChangePasswordData = new ChangePasswordData();
  changePassword() {

    this.passworddata.loginId = sessionStorage.getItem('loginId');
    this.passworddata.currentPassword = this.passwordData.value.currentPassword;
    this.passworddata.newPassword = this.passwordData.value.newPassword;

    this.service.changePassword(this.passworddata).subscribe((data) => {
      if (data === true) {
        Swal.fire("Password Changed Succesfully");
        window.location.reload();
      }
      else {
        Swal.fire("Password Changed Unsuccesfull");
      }
    });
  }

}
