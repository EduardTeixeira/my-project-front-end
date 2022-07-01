import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { PricingComponent } from './pricing/pricing.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
   {
      path: '',
      children: [
         {
            path: '',
            component: LoginComponent
         },
         {
            path: 'register',
            component: RegisterComponent
         },
         {
            path: 'pricing',
            component: PricingComponent
         }
      ]
   }
];

export const LoginRoutes = RouterModule.forChild(routes);
