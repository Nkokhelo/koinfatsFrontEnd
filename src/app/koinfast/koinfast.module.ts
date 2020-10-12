import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { KoinfastRoutingModule } from './koinfast-routing.module';
import { KoinfastComponent } from './koinfast.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    KoinfastComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    // CommonModule,
    KoinfastRoutingModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
  ],
  exports: [KoinfastComponent],
})
export class KoinfastModule {}
