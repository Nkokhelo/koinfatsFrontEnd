import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { currentUser, User } from '../models/User';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.scss'],
})
export class InvestorComponent implements OnInit {
  isCollapsed: boolean = false;
  currentUser: currentUser;
  constructor(
    private _accountService: AccountService
    ) {
    this.currentUser = this._accountService.currentUserValue;
  }

  ngOnInit(): void {}

  logout() {
    // console.log('logout')
    this._accountService.logout();
  }
}
