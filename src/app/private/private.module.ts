import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      PrivateRoutingModule,
      RouterModule,
   ],
   declarations: [
      DashboardComponent,
   ]
})
export class PrivateModule { }
