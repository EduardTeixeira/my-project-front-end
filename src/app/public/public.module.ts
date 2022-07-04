import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { SharedPipesModule } from '../shared/pipes/shared-pipes.module';

import { PublicRoutingModule } from './public-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PublicRoutingModule,
      RouterModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatGridListModule,
      MatPaginatorModule,
      ReactiveFormsModule,
      SharedComponentsModule,
      SharedPipesModule,
      LayoutModule
   ],
   declarations: [
      HomePageComponent,
      ProductComponent,
      ProductListComponent
   ],
   schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class PublicModule { }
