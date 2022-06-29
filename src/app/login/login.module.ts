import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutes } from './login.routing';
import { RegisterComponent } from './register/register.component';
import { PricingComponent } from './pricing/pricing.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';

@NgModule({
   imports: [
      CommonModule,
      LoginRoutes,
      FormsModule,
      ReactiveFormsModule
   ],
   declarations: [
      LoginComponent,
      RegisterComponent,
      PricingComponent,
      LockComponent
   ]
})

export class LoginModule { }
