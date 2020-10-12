import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './guads/admin.guard';
import { InvestorGuard } from './guads/investor.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'investor',
    loadChildren: () => import('./investor/investor.module').then((m) => m.InvestorModule),
    canActivate: [InvestorGuard]
  },
  {
    path: '',
    loadChildren: () => import('./koinfast/koinfast.module').then((m) => m.KoinfastModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
