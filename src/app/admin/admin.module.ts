import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { InvestorsComponent } from './investors/investors.component';
import { InvestmentsComponent } from './investments/investments.component';
import { HomeComponent } from './home/home.component';
import { DepositsComponent } from './deposits/deposits.component';

@NgModule({
  declarations: [AdminComponent, InvestorsComponent, InvestmentsComponent, HomeComponent, DepositsComponent],
  imports: [
    // CommonModule, 
    AdminRoutingModule
  ],
  exports: [AdminComponent],
})
export class AdminModule {}
