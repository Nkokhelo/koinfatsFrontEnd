import { Component, OnInit } from '@angular/core';
import { currentUser } from '../models/User';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
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
