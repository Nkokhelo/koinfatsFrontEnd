import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Investment } from '../models/Investments';

@Injectable({
  providedIn: 'root',
})
export class InvestorsService {
  constructor(private http: HttpClient) {}

  getAll(id: number) {
    return this.http.get<Investment[]>(`${environment.apiUrl}/investors`);
  }
}
