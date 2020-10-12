import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Investment } from 'src/app/models/Investments';
import { AccountService } from 'src/app/services/account.service';
import { InvestmentService } from 'src/app/services/investment.service';
import { InvestorsService } from 'src/app/services/investors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  $investments: Observable<Investment[]>;
  constructor(
    private _investmentService: InvestmentService,
    private _accountService: AccountService,
    private _toaster: ToastrService
  ) {}
  hasInvestments: boolean = false;
  ngOnInit(): void {
    var user = this._accountService.currentUserValue;
    this.$investments = this._investmentService.allInvestments(user.id);
    this.$investments.subscribe(
      (d) => {
        console.log(d);
        this.hasInvestments = d.length <= 0;
      },
      (e) => {
        this.hasInvestments = false;
        console.log(e)
        this._toaster.error('Connection error while getting your investments')
      }
    );
  }
}
