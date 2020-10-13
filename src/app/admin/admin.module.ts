import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { InvestorsComponent } from './investors/investors.component';
import { InvestmentsComponent } from './investments/investments.component';
import { HomeComponent } from './home/home.component';
import { DepositsComponent } from './deposits/deposits.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent, InvestorsComponent, InvestmentsComponent, HomeComponent, DepositsComponent],
  imports: [
    CommonModule, 
    AdminRoutingModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
  ],
  exports: [AdminComponent],
})
export class AdminModule {}
