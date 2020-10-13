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

  changeState(id: number, state: string) {
    let dep : DepositDto = new DepositDto();
    dep.Id = id;
    dep.State = state;
    return this.http.post(`${this.hostUrl}/respond`, dep);
  }

  getByInvestor(id: number) {
    return this.http.get<Deposit[]>(`${this.hostUrl}/investor/${id}`);
  }

  depositsByStatus(status:string) {
    return this.http.get<Deposit[]>(`${this.hostUrl}/status/${status}`);
  }
  allDeposits() {
    return this.http.get<Deposit[]>(`${this.hostUrl}/all`);
  }
}
