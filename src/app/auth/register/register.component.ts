import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { investorTitle } from 'src/app/Enums/investorTitle';
import { Investor } from 'src/app/models/Investor';
import { AccountService } from 'src/app/services/account.service';
import { ValidationService } from 'src/app/services/validation.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isLoading: boolean;
  isSubmitted: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _accountService: AccountService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _validationService: ValidationService,
    private _loadingBar : LoadingBarService
  ) {
    this.registerForm = this._formBuilder.group({
      Title: ['', Validators.required],
      Name: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/), Validators.minLength(3)]],
      Surname: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/), Validators.minLength(3)]],
      Phone: ['', [Validators.required, Validators.pattern(/[0-9]/), Validators.minLength(8)]],
      Country: ['', Validators.required],
      City: ['', Validators.required],
      AccNo: ['', [Validators.required, Validators.pattern(/[0-9]{6,20}/)]],
      Bank: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
      ConfirmPassword: ['', Validators.required],
      SponsorId: ['0', Validators.required], //TODO: remove this after u done
    }, {
      validators: this._validationService.MatchPassword("Password", "ConfirmPassword")
    });

  }

  ngOnInit(): void {
    var user = this._accountService.currentUserValue;
    if (user) {
      this._accountService.navigateUser(user);
    }
  }

  createAccount() {
    const state = this._loadingBar.useRef('router');
    this.isSubmitted = true; 
    if (this.registerForm.valid) {
      state.start();
      this.isLoading = true;
      const val = this.registerForm.value;
      var investor: Investor = val;
      this._accountService.register(investor).subscribe(
        (u) => {
          console.log(u);
          state.complete();

          if (u.token && u.roleName) {
            this._accountService.navigateUser(u);
          }
        },
        (e) => {
          this.isLoading = false;
          console.log(e);
          state.complete();
          this._toastr.error(e.message);
        }
      );
    }
  }

  get Title() {
    return this.registerForm.controls.Title;
  }
  get Name() {
    return this.registerForm.controls.Name;
  }
  get Surname() {
    return this.registerForm.controls.Surname;
  }
  get Phone() {
    return this.registerForm.controls.Phone;
  }
  get Country() {
    return this.registerForm.controls.Country;
  }
  get City() {
    return this.registerForm.controls.City;
  }
  get AccNo() {
    return this.registerForm.controls.AccNo;
  }
  get Bank() {
    return this.registerForm.controls.Bank;
  }
  get Email() {
    return this.registerForm.controls.Email;
  }
  get Password() {
    return this.registerForm.controls.Password;
  }
  get ConfirmPassword() {
    return this.registerForm.controls.ConfirmPassword;
  }
}
