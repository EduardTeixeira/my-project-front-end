import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

import { CodesComponent } from './pages/codes/codes.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { EmptyComponent } from './pages/empty/empty.component';
import { EmptyCartGuard } from 'src/app/core/guards/empty-cart.guard';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';


@NgModule({
  declarations: [
    SummaryComponent,
    CodesComponent,
    EmptyComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '', canActivate: [EmptyCartGuard], children: [
          { path: 'cart', component: SummaryComponent },
          { path: 'codes', component: CodesComponent }
        ]
      },
      { path: 'empty', component: EmptyComponent }
    ]),
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ]
})
export class CartModule { }
