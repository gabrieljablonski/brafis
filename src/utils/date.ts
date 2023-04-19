import { addMinutes, endOfMonth, format } from 'date-fns';

export function endOfMonthTz(date: Date): Date {
  const offset = date.getTimezoneOffset() * 60 * 1000;
  return new Date(endOfMonth(date.getTime() + offset).getTime() - offset);
}

export function formatTZ(date: Date, f: string): string {
  return format(addMinutes(date, date.getTimezoneOffset()), f);
}
