import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { concat } from 'rxjs';

import { SessionService } from '../../services/session.service';
import { HeaderService } from '../../services/header.service';
import { CartService } from './../../../shared/services/cart.service';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   cartAmount: number = 0;
   isLoggedIn: boolean = false;
   showButtons: boolean = true;

   constructor(
      private session: SessionService,
      private snackBar: MatSnackBar,
      private cart: CartService,
      private header: HeaderService
   ) { }

   ngOnInit() {
      this.session.isCustomerLoggedIn()
         .subscribe(
            () => {
               this.isLoggedIn = true;
               this.session.setLoggedInStatus(true);
            }
         );

      this.session.loggedInStatus$.subscribe(status => this.isLoggedIn = status);

      this.header.showHeaderButtons$.subscribe(visible => this.showButtons = visible);

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
