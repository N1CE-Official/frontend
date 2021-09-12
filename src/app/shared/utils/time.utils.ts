import * as moment from 'moment';
import { Moment } from 'moment';
import { CountdownFormatFn } from 'ngx-countdown';

export class TimeUtils {
  static CountdownTimeUnits: Array<[string, number]> = [
    ['Y', 1000 * 60 * 60 * 24 * 365], // years
    ['M', 1000 * 60 * 60 * 24 * 30], // months
    ['D', 1000 * 60 * 60 * 24], // days
    ['H', 1000 * 60 * 60], // hours
    ['m', 1000 * 60], // minutes
    ['s', 1000], // seconds
    ['S', 1] // million seconds
  ];

  static toDate(date: string, time: boolean = true): Date {
    if (date) {
      let format = 'YYYYMMDD';
      if (time) {
        format += 'HHmmss';
      }
      const parsed = moment(date, format);
      return parsed.toDate();
    }
    return new Date();
  }

  static toMoment(date: string): Moment {
    return moment(date, 'YYYYMMDDHHmmss');
  }

  static leftTime(date: string): number {
    if (date) {
      const endTime: Moment = this.toMoment(date);
      return endTime.diff(moment(), 'seconds');
    }
    return 0;
  }

  static formatDate?: CountdownFormatFn = ({date, formatStr, timezone}) => {
    let duration = Number(date || 0);

    return TimeUtils.CountdownTimeUnits.reduce((current, [name, unit]) => {
      if (current.indexOf(name) !== -1) {
        const v = Math.floor(duration / unit);
        duration -= v * unit;
        return current.replace(new RegExp(`${name}+`, 'g'), (match: string) => {
          return v.toString().padStart(match.length, '0');
        });
      }
      return current;
    }, formatStr);
  };

}
