import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';
import { InvestorRoutingModule } from './investor-routing.module';
import { InvestorComponent } from './investor.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { DepositsComponent } from './deposits/deposits.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InvestorComponent,
    HomeComponent,
    PackagesComponent,
    TransactionsComponent,
    DepositsComponent,
  ],
  imports: [
    CommonModule,
    InvestorRoutingModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
  ],
  exports: [InvestorComponent],
})
export class InvestorModule {}
