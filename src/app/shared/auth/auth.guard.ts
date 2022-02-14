import { Injectable } from '@angular/core';
import {
   CanActivate,
   Router,
   ActivatedRouteSnapshot,
   RouterStateSnapshot,
   CanActivateChild,
   NavigationExtras,
   CanLoad,
   Route
} from '@angular/router';

import { AuthService } from './auth.service';
import { UserService } from '../services/user.service';

@Injectable({
   providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {

   constructor(
      private authService: AuthService,
      private router: Router,
      private userService: UserService
   ) { }

   canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.userService.userIsAuthenticated()) {
         this.authService.redirectUrl = state.url;
         return true;
      } else {
         this.router.navigate(['/login']);
         return false;
      }
   }

   canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return this.canActivate(route, state);
   }

}
