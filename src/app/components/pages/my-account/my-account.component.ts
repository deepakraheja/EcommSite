import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/Service/users.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedDataService } from 'src/app/Service/shared-data.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.sass']
})
export class MyAccountComponent implements OnInit {
  RegistrationForm: FormGroup;
  LoginForm: FormGroup;
  phoneMask = null;
  showMask: boolean = false;
  IsLogin: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router,
    public snackBar: MatSnackBar,
    private _SharedDataService: SharedDataService
  ) { }

  ngOnInit() {
    this.RegistrationForm = this.formBuilder.group({
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      mobileNo: ['', Validators.required]
    });

    this.LoginForm = this.formBuilder.group({
      LoginId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.RegistrationForm.controls; }
  get f1() { return this.LoginForm.controls; }

  addMask(obj: Object) {
    this.phoneMask = "000-000-0000";
    this.showMask = false;
  }

  Login() {
 
    if (this.LoginForm.invalid) {
      this.snackBar.open('All the * marked fields are mandatory', '�', { panelClass: ['success'], verticalPosition: 'top', duration: 3000 });
      return;
    }
    else {
      this.userService.ValidLogin(this.LoginForm.value).subscribe(res => {
        if (res.length > 0) {
       
          sessionStorage.setItem('LoggedInUser',JSON.stringify(res));
          this._SharedDataService.AssignUser(res);
       
          this.router.navigate(['/shop/products/all']);
        }
        else {
          this.snackBar.open('Invalid email address and password', '�', { panelClass: ['success'], verticalPosition: 'top', duration: 3000 });
          return;
        }
      });
    }
  }

  CreateRegistration() {
 
    let message, status;
    if (this.RegistrationForm.invalid) {
   
      message = 'All the * marked fields are mandatory';
      status = 'success';
      this.snackBar.open(message, '�', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
      return;
    }
    else {
      this.userService.UserRegistration(this.RegistrationForm.value).subscribe(res => {
        if (res > 0)
          this.router.navigate(['/shop/products/all']);
        else {
          this.snackBar.open("email address already exists", '�', { panelClass: ['success'], verticalPosition: 'top', duration: 3000 });
          return;
        }
      });
    }
  }

}
