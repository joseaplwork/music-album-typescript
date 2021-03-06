import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesSeconds',
})
export class MinutesSecondsPipe implements PipeTransform {
  transform(value: number): string {
    const minutes = Math.floor(value / 60000);
    const seconds = (value % 60000) / 1000;

    return minutes + ':' + (seconds <= 9 ? '0' : '') + seconds.toFixed(0);
  }
}
