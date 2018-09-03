import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date | moment.Moment | string | number, format: string, args?: any): string {
    if (!value) { return ''; }
    return moment(value).format(format);
  }

}
