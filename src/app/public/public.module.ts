import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { PublicRoutingModule } from './public-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterModule } from '../shared/components/footer/footer.module';
import { ProductComponent } from './product/product.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { SignupComponent } from './signup/signup.component';
import { LoginModule } from './login/login.module';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PublicRoutingModule,
      FooterModule,
      RouterModule,
      LoginModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      SharedComponentsModule,
   ],
   declarations: [
      HomePageComponent,
      ProductComponent,
      SignupComponent,
   ],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ],
   exports: [],
})
export class PublicModule { }
