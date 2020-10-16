import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { KoinfastRoutingModule } from './koinfast-routing.module';
import { KoinfastComponent } from './koinfast.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PackagesComponent } from './packages/packages.component';

@NgModule({
  declarations: [
    KoinfastComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PackagesComponent,
  ],
  imports: [
    CommonModule,
    KoinfastRoutingModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  exports: [KoinfastComponent],
})
export class KoinfastModule {}
