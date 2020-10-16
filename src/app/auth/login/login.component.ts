import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingBarService } from '@ngx-loading-bar/core';
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
  isLoading: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _accountService: AccountService,
    private _toastr: ToastrService,
    private _loadingBar : LoadingBarService
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
    const state = this._loadingBar.useRef('router');

    if (this.loginForm.valid) {
      this.isLoading =true;
      state.start();
      console.log(val);
      var user: User = val;
      this._accountService.login(user).subscribe(
        (u) => {
          console.log(u);
          if (u.token && u.roleName) {
            this._accountService.navigateUser(u);
            state.complete();
          }
        },
        (e) => {
          console.log(e);
          var errorMessage = e.error.message || e.message;
          this._toastr.error(errorMessage);
          this.isLoading =false;
          state.complete();
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
