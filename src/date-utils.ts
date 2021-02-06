export type Day = {
  date: number;
  week: number;
  dayOfWeek: number;
};

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function monthName(month: number): string {
  return MONTHS[month];
}

export function numDaysInMonth(month: number, year: number): number {
  // NB: Months are 0-indexed (i.e. January = 0). Day 0 of the following month is the last day of the given month.
  return new Date(year, month + 1, 0).getDate();
}

export function generateCalendar(numDays: number, firstDay: number): Day[] {
  return [
    ...Array.from({ length: numDays }, (_, i) => ({
      date: i + 1,
      dayOfWeek: ((i + firstDay) % 7) + 1,
      week: Math.floor((i + firstDay) / 7) + 1,
    })),
  ];
}
