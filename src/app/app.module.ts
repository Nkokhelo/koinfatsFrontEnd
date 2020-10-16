import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KoinfastModule } from './koinfast/koinfast.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { InvestorModule } from './investor/investor.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    KoinfastModule,
    AuthModule,
    AdminModule,
    InvestorModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    // SharedModule
    LoadingBarRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
