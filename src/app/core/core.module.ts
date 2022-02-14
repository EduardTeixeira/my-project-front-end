import { MatBadgeModule } from '@angular/material/badge';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedComponentsModule } from './../shared/components/shared-components.module';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    ErrorComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '404', component: NotFoundComponent },
      { path: 'error', component: ErrorComponent },
      { path: '**', redirectTo: '/404' }
    ]),
    MatBadgeModule,
    SharedComponentsModule,
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
