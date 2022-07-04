import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
   {
      path: '',
      component: HomePageComponent,
   },
   {
      path: 'products',
      component: ProductListComponent,
   },
   {
      path: 'product/:id',
      component: ProductComponent
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PublicRoutingModule { }
