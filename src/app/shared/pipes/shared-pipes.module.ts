import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WordWrapPipe } from './word-wrap/word-wrap.pipe';
import { CurrencyFormatterPipe } from './currency-formatter/currency-formatter.pipe';
import { DatePlusPipe } from './date-plus/date-plus.pipe';

const pipes = [
   CurrencyFormatterPipe,
   DatePlusPipe,
   WordWrapPipe
];

@NgModule({
   imports: [
      CommonModule,
   ],
   declarations: [
      ...pipes
   ],
   exports: [
      ...pipes
   ],
})
export class SharedPipesModule { }
