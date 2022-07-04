import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { concat } from 'rxjs';

import { SessionService } from '../../../shared/services/session.service';
import { CartService } from '../../services/cart.service';

@Component({
   selector: 'app-nav-brand',
   templateUrl: './nav-brand.component.html',
   styleUrls: ['./nav-brand.component.scss'],
})
export class NavBrandComponent implements OnInit {

   cartAmount: number = 0;
   isLoggedIn: boolean = false;

   constructor(
      private session: SessionService,
      private snackBar: MatSnackBar,
      private cart: CartService,
   ) { }

   ngOnInit() {
      this.session.isCustomerLoggedIn()
         .subscribe(
            () => {
               // this.isLoggedIn = true;
               this.session.setLoggedInStatus(true);
            }
         );

      // this.session.loggedInStatus$.subscribe(status => this.isLoggedIn = status);

      this.cart.cartValue.subscribe(cart => this.cartAmount = cart.itemCount);
   }

   logout() {
      concat(
         this.session.logout(),
      ).subscribe(
         () => {
            this.snackBar.open('You have been logged out.', 'Close', { duration: 4000 });
            this.session.setLoggedInStatus(false);
         },
         err => this.snackBar.open('There was a problem logging you out.', 'Close', { duration: 4000 })
      );
   }

}
