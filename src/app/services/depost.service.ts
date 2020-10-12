import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Deposit } from '../models/Deposit';
import { DepositDto } from '../models/Dto/DepositDto';

@Injectable({
  providedIn: 'root',
})
export class DepositService {
  hostUrl : string = environment.apiUrl+"deposits";
  constructor(private http: HttpClient) {}

  makeDeposit(deposit: DepositDto) {
    return this.http.post(`${this.hostUrl}/invest`, deposit);
  }

  getByInvestor(id: number) {
    return this.http.get<Deposit[]>(`${this.hostUrl}/investor/${id}`);
  }
}
