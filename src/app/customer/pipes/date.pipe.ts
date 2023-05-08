import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(date:any, format = 'dd/MM/yyyy', dayOffset = 0, monthOffset = 0, yearOffset = 0) {
    return moment(new Date(date)).add(dayOffset, 'days')
                                 .add(monthOffset, 'months')
                                 .add(yearOffset, 'years')
                                 .format(format);
  }

}
