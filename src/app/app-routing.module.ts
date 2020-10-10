import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, { path: 'investor', loadChildren: () => import('./investor/investor.module').then(m => m.InvestorModule) }, { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }, { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'koinfast', loadChildren: () => import('./koinfast/koinfast.module').then(m => m.KoinfastModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
