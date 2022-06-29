import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AppGuardService } from './app-guard.service';

const routes: Routes = [
   {
      path: '',
      children: [
         {
            path: '',
            loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
         },
         {
            path: '',
            loadChildren: () => import('./private/private.module').then(m => m.PrivateModule),
            canActivate: [AppGuardService],
            // canActivate: [AppGuardService],
            // canLoad: [AuthGuard],
            canActivateChild: [AppGuardService],
         },
      ]
   },
   {
      path: '',
      component: AuthLayoutComponent,
      children: [
         {
            path: 'login',
            loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
         }
      ]
   },
   {
      path: '**',
      component: PageNotFoundComponent,
   },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
