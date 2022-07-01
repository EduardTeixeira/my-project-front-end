import { SharedComponentsModule } from './../../shared/components/shared-components.module';
import { MatIconModule } from '@angular/material/icon';
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
import { EmptyCartGuard } from 'src/app/shared/guards/empty-cart.guard';

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
    SharedComponentsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
  ]
})
export class CartModule { }
