import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InvestorDto } from '../models/Dto/InvestorDto';
import { Investment } from '../models/Investments';
import { Investor } from '../models/Investor';

@Injectable({
  providedIn: 'root',
})
export class InvestorsService {
  hostUrl = environment.apiUrl+"investors"
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<InvestorDto[]>(`${this.hostUrl}/all`);
  }
}
