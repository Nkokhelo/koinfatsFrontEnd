import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class InvestorGuard implements CanActivate {

  constructor(private _accountService: AccountService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var user = this._accountService.currentUserValue;
    if (user) return user.roleName == "Investor";

    this._router.navigate(['/auth/login']);
    return false;
  }
}
