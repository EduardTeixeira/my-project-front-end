import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
   {
      path: 'private',
      data: {
         title: 'Área restrita'
      },
      children: [
         {
            path: '',
            component: DashboardComponent,
         },
         {
            path: 'private',
            component: DashboardComponent,
         },
         {
            path: 'teste',
            component: DashboardComponent,
         },
      ]
   },
];

@NgModule({
   imports: [
      RouterModule.forChild(routes),
   ],
   exports: [
      RouterModule
   ]
})
export class PrivateRoutingModule { }
