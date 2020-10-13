import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Investment } from '../models/Investments';
import { Package } from '../models/Packages';
import { currentUser } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  serverUrl: string = environment.apiUrl+"investments";
  constructor(private _http: HttpClient) { }

  allInvestments(investorId: number) {
    const user:currentUser = JSON.parse(localStorage.getItem("currentUser"))
    console.log(user);
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer '+user.token);

    return this._http.get<Investment[]>(this.serverUrl+"/investor/"+investorId);
  }
  investments() {
    const user:currentUser = JSON.parse(localStorage.getItem("currentUser"))
    console.log(user);
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer '+user.token);

    return this._http.get<Investment[]>(this.serverUrl+"/all");
  }

  allPackages() {
    return this._http.get<Package[]>(environment.apiUrl+"package");
  }
}
