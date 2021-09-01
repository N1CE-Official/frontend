import * as moment from 'moment';

export class TimeUtils {
  static toDate(date: string): Date {
    if (date) {
      const parsed = moment(date, 'YYYYMMDDHHmmss');
      return parsed.toDate();
    }
    return new Date();
  }

}
