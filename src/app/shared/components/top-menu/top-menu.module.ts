import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopMenuComponent } from './top-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    TopMenuComponent,
  ],
  exports: [
    TopMenuComponent,
  ],
})
export class TopMenuModule { }
