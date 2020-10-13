import { Component, OnInit } from '@angular/core';
import { DepositState } from '../Enums/koinfastEnums';
import { currentUser } from '../models/User';
import { AccountService } from '../services/account.service';
import { DepositService } from '../services/depost.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isCollapsed: boolean = false;
  currentUser: currentUser;
  deposits: number;
  pending: string;
  constructor(
    private _accountService: AccountService,
    private _depositsService: DepositService
    ) {
    this.currentUser = this._accountService.currentUserValue;

  }
  
  ngOnInit(): void {
    // pending = 
    this._depositsService.depositsByStatus('Pending').subscribe(
      (d) => {
        console.log(d);
        this.deposits = d.length;
      },
      (err) => {
        console.log(err);
    })
  }

  logout() {
    // console.log('logout')
    this._accountService.logout();
  }
}
