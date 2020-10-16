import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { currentUser, User } from '../models/User';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Investor } from '../models/Investor';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { WalletDto } from '../models/Dto/WalletDto';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  hostUrl: string = environment.apiUrl + 'wallet';
  returnUrl: string;

  constructor(private _http: HttpClient) {}

  addWallet(wallet: WalletDto) {
    return this._http.post(`${this.hostUrl}/add`, wallet);
  }

}
