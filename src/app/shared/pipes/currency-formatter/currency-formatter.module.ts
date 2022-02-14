import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyFormatterPipe } from './currency-formatter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CurrencyFormatterPipe,
  ],
  exports: [
    CurrencyFormatterPipe,
  ]
})
export class CurrencyFormatterPipeModule { }
