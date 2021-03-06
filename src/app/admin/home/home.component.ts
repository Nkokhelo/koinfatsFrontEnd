import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/internal/Observable';
import { InvestmentState } from 'src/app/Enums/investmentState';
import { Investment } from 'src/app/models/Investments';
import { currentUser } from 'src/app/models/User';
import { AccountService } from 'src/app/services/account.service';
import { badgeColor } from 'src/app/services/badge.service';
import { InvestmentService } from 'src/app/services/investment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  $investments: Observable<Investment[]>;
  hasInvestments: boolean = false;
  state: any = InvestmentState;
  badgeBg : Map<string, string> = this._colorBg.color; 
  user: currentUser = JSON.parse(localStorage.getItem("currentUser"));
  constructor(
    private _investmentService: InvestmentService,
    private _toaster: ToastrService,
    private _colorBg: badgeColor
  ) {}
  
  ngOnInit(): void {
    this.$investments = this._investmentService.investments();
    this.$investments.subscribe(
      (d) => {
        console.log(d);
        this.hasInvestments = d.length <= 0;
        // this._toaster.success('Welcome to koinfast')
      },
      (e) => {
        this.hasInvestments = false;
        console.log(e)
        this._toaster.error('Connection error while getting you investments')
      }
    );
  }

}
