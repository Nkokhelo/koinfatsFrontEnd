import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DepositsComponent } from './deposits/deposits.component';
import { HomeComponent } from './home/home.component';
import { InvestorsComponent } from './investors/investors.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'deposits', component: DepositsComponent },
  { path: 'investors', component: InvestorsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
