import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { InvestmentState } from 'src/app/Enums/koinfastEnums';
import { InvestorDto } from 'src/app/models/Dto/InvestorDto';
import { Investment } from 'src/app/models/Investments';
import { Investor } from 'src/app/models/Investor';
import { AccountService } from 'src/app/services/account.service';
import { badgeColor } from 'src/app/services/badge.service';
import { InvestmentService } from 'src/app/services/investment.service';
import { InvestorsService } from 'src/app/services/investors.service';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.scss']
})
export class InvestorsComponent implements OnInit {

  $investors: Observable<InvestorDto[]>;
  hasInvestors: boolean = false;
  constructor(
    private _investorService: InvestorsService,
    private _accountService: AccountService,
    private _toaster: ToastrService,
  ) {}
  
  ngOnInit(): void {
    this.$investors = this._investorService.getAll();
    this.$investors.subscribe(
      (d) => {
        console.log(d);
        this.hasInvestors = d.length <= 0;
        this._toaster.success('Welcome to koinfast')
      },
      (e) => {
        this.hasInvestors = false;
        console.log(e)
        this._toaster.error('Connection error while getting your investors')
      }
    );
  }
}
