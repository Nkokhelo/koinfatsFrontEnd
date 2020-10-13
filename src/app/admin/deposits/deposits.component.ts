import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DepositState } from 'src/app/Enums/koinfastEnums';
import { Deposit } from 'src/app/models/Deposit';
import { AccountService } from 'src/app/services/account.service';
import { badgeColor } from 'src/app/services/badge.service';
import { DepositService } from 'src/app/services/depost.service';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.scss']
})
export class DepositsComponent implements OnInit {


  $deposits: Observable<Deposit[]>;
  state :any = DepositState;
  badgeBg : Map<string, string> = this._colorServices.color;

  constructor(
    private _depositsService: DepositService, 
    private _accountService: AccountService,    
    private _colorServices: badgeColor
    ) { }


  ngOnInit(): void {
   
    this.$deposits = this._depositsService.allDeposits();
    this.$deposits.subscribe(d => console.log(d))
  }
}
