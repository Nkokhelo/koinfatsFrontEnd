import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KoinfastRoutingModule } from './koinfast-routing.module';
import { KoinfastComponent } from './koinfast.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [KoinfastComponent, HomeComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, KoinfastRoutingModule],
  exports: [],
})
export class KoinfastModule {}
