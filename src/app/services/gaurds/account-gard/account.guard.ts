import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate {
  constructor(
    private router: Router,
    private _storage: StorageService
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this._storage.token) {
        console.log(this._storage.token);
        console.log(this._storage.token);
        const tree: UrlTree = this.router.parseUrl('/');
        return tree;
      } else {
        return true;
      }
  }
}
