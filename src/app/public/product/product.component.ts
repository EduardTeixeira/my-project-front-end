import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { UntilDestroy } from '@ngneat/until-destroy';

import { map, mergeMap } from 'rxjs/operators';

import { Order } from '../../shared/models/order';
import { Sku } from '../../shared/models/sku';
import { CartService } from '../../shared/services/cart.service';
import { LineItemService } from '../../shared/services/line-item.service';
import { OrderService } from '../../shared/services/order.service';
import { SkuService } from '../../shared/services/sku.service';

@UntilDestroy({ checkProperties: true })
@Component({
   selector: 'app-product',
   templateUrl: './product.component.html',
   styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

   id: string = '';
   product!: Sku;
   quantity: number = 0;

   constructor(
      private route: ActivatedRoute,
      private skus: SkuService,
      private location: Location,
      private router: Router,
      private orders: OrderService,
      private lineItems: LineItemService,
      private cart: CartService,
      private snackBar: MatSnackBar
   ) { }

   ngOnInit() {
      this.route.paramMap
         .pipe(
            mergeMap(params => {
               const id = params.get('id')
               this.id = id ? id : '';

               return this.skus.getSku(this.id);
            }),
            map((sku) => {
               this.product = sku;
            })
         ).subscribe({
            error: (err) => this.router.navigateByUrl('/error')
         });
   }

   addItemToCart() {
      if (this.quantity > 0) {
         if (this.cart.orderId == '') {
            this.orders.createOrder()
               .pipe(
                  mergeMap((order: Order) => {
                     this.cart.orderId = order.id || '';

                     return this.lineItems.createLineItem({
                        orderId: order.id,
                        name: this.product.name,
                        imageUrl: this.product.imageUrl,
                        quantity: this.quantity,
                        skuCode: this.product.code
                     });
                  })
               )
               .subscribe(
                  () => {
                     this.cart.incrementItemCount(this.quantity);
                     this.showSuccessSnackBar();
                  },
                  err => this.showErrorSnackBar()
               );
         } else {
            this.lineItems.createLineItem({
               orderId: this.cart.orderId,
               name: this.product.name,
               imageUrl: this.product.imageUrl,
               quantity: this.quantity,
               skuCode: this.product.code
            }).subscribe(
               () => {
                  this.cart.incrementItemCount(this.quantity);
                  this.showSuccessSnackBar();
               },
               err => this.showErrorSnackBar()
            );
         }
      } else {
         this.snackBar.open('Select a quantity greater than 0.', 'Close', { duration: 8000 });
      }
   }

   setQuantity(no: number) {
      this.quantity = no;
   }

   goBack() {
      this.location.back();
   }

   private showSuccessSnackBar() {
      this.snackBar.open('Item successfully added to cart.', 'Close', { duration: 8000 });
   }

   private showErrorSnackBar() {
      this.snackBar.open('Failed to add your item to the cart.', 'Close', { duration: 8000 });
   }

}
