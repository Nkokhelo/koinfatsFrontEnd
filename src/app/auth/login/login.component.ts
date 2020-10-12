import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/User';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _accountService: AccountService,
    private _toastr: ToastrService
  ) {
    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    var user = this._accountService.currentUserValue;
    if (user) {
      this._accountService.navigateUser(user);
    }
  }

  async login() {
    const val = this.loginForm.value;
    if (this.loginForm.valid) {
      console.log(val);
      var user: User = val;
      this._accountService.login(user).subscribe(
        (u) => {
          console.log(u);
          if (u.token && u.roleName) {
            this._accountService.navigateUser(u);
          }
        },
        (e) => {
          console.log(e);
          this._toastr.error(e.message);
        }
      );
    }
  }

  get userName() {
    return this.loginForm.controls.username;
  }
  get passWord() {
    return this.loginForm.controls.password;
  }
}
