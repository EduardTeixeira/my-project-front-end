import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date-plus'
})
export class DatePlusPipe implements PipeTransform {

  transform(createdAt: Date, plusDays: number) {

    const moreDays = 1000 * 60 * 60 * 24 * plusDays;

    const date = new Date(createdAt + 'T00:00:00');

    return new Date(date.getTime() + moreDays);

  }

}
