import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';

import { LoginRoutes } from './login.routing';
import { RegisterComponent } from './register/register.component';
import { PricingComponent } from './pricing/pricing.component';
import { LoginComponent } from './login/login.component';
import { LoginFooterComponent } from './login-footer/login-footer.component';
import { RecoveryPasswordDialog } from './recovery-password-dialog/recovery-password-dialog.component';
import { LoginNavComponent } from './login-nav/login-nav.component';

@NgModule({
   imports: [
      CommonModule,
      LoginRoutes,
      FormsModule,
      MatDialogModule,
      ReactiveFormsModule
   ],
   declarations: [
      LoginComponent,
      RegisterComponent,
      PricingComponent,
      LoginFooterComponent,
      LoginNavComponent,
      RecoveryPasswordDialog,
   ],
   schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginModule { }
