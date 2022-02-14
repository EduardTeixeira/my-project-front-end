import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePlusPipe } from './date-plus.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DatePlusPipe,
   ],
  exports: [
    DatePlusPipe,
  ]
})
export class DatePlusPipeModule { }
