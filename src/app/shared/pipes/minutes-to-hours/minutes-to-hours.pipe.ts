import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours',
})
export class MinutesToHoursPipe implements PipeTransform {
  transform(minutes: number): string {
    if (minutes >= 0 && minutes / 60 < 1) {
      return minutes + 'min';
    } else {
      const min = minutes % 60;
      const hours = Math.floor(minutes / 60);

      return `${hours}h` + (min ? ` ${min}min` : '');
    }
  }
}
