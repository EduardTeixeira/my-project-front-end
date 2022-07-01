import { SharedComponentsModule } from './../../shared/components/shared-components.module';
import { SharedPipesModule } from './../../shared/pipes/shared-pipes.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ProductComponent } from './pages/product/product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  imports: [
    RouterModule.forChild([
      { path: 'product/:id', component: ProductComponent },
      { path: '', component: ProductListComponent }
    ]),
    SharedComponentsModule,
    SharedPipesModule,
    LayoutModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductsModule { }
