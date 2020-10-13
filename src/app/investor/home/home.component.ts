import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { InvestmentState } from 'src/app/Enums/investmentState';
import { Investment } from 'src/app/models/Investments';
import { AccountService } from 'src/app/services/account.service';
import { badgeColor } from 'src/app/services/badge.service';
import { InvestmentService } from 'src/app/services/investment.service';
import { InvestorsService } from 'src/app/services/investors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  $investments: Observable<Investment[]>;
  hasInvestments: boolean = false;
  state: any = InvestmentState;
  badgeBg : Map<string, string> = this._colorBg.color; 
  constructor(
    private _investmentService: InvestmentService,
    private _accountService: AccountService,
    private _toaster: ToastrService,
    private _colorBg: badgeColor
  ) {}
  
  ngOnInit(): void {
    var user = this._accountService.currentUserValue;
    this.$investments = this._investmentService.allInvestments(user.id);
    this.$investments.subscribe(
      (d) => {
        console.log(d);
        this.hasInvestments = d.length <= 0;
        // this._toaster.success('Welcome to koinfast')
      },
      (e) => {
        this.hasInvestments = false;
        console.log(e)
        this._toaster.error('Connection error while getting your investments')
      }
    );
  }

}
