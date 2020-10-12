import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { currentUser, User } from '../models/User';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Investor } from '../models/Investor';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private currentUserSubject: BehaviorSubject<currentUser>;
  public currentUser: Observable<currentUser>;
  hostUrl: string = environment.apiUrl + 'account';
  returnUrl: string;

  constructor(private _http: HttpClient, private _router: Router, private _route: ActivatedRoute
  ) {
    this.currentUserSubject = new BehaviorSubject<currentUser>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(user: User) {
    return this._http.post<currentUser>(`${this.hostUrl}/login`, user).pipe(
      map((u) => {
        localStorage.setItem('currentUser', JSON.stringify(u));
        this.currentUserSubject.next(u);
        return u;
      })
    );
  }

  register(investor: Investor) {
    return this._http.post<currentUser>(`${this.hostUrl}/register`, investor).pipe(
      map((u) => {
        localStorage.setItem('currentUser', JSON.stringify(u));
        this.currentUserSubject.next(u);
        return u;
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this._router.navigate(['/home']);
  }

  navigateUser(u: currentUser) {
    if (u.roleName == 'Admin') {
      this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/admin/home';
    } else {
      this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/investor/home';
    }
    this._router.navigate([this.returnUrl]);
  }
}
