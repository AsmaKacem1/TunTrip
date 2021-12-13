import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ShareService } from '../services/share.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAdminGuard implements CanActivate {
  //constractor(private s:ShareService,private router:Router) {}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //if(this.s.isAdmin())
    return true;
  }

}
