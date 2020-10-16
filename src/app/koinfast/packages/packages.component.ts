import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Package } from 'src/app/models/Packages';
import { InvestmentService } from 'src/app/services/investment.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  $packages: Observable<Package[]>;

  constructor(
    private _packages: InvestmentService,
  ) { }

  ngOnInit(): void {
    this.$packages = this._packages.allPackages();
  }

}
