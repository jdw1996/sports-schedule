import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './team-colours';

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

function monthName(month: number): string {
  return MONTHS[month];
}

function numDaysInMonth(month: number, year: number): number {
  // NB: Months are 0-indexed (i.e. January = 0). Day 0 of the following month is the last day of the given month.
  return new Date(year, month + 1, 0).getDate();
}

type Day = {
  date: number;
  week: number;
  dayOfWeek: number;
};

type CalendarDayProps = {
  day: Day;
};

function CalendarDay(props: CalendarDayProps): JSX.Element {
  return (
    <div className="day">
      date {props.day.date}, dayOfWeek {props.day.dayOfWeek}, week {props.day.week}
    </div>
  );
}

function App(): JSX.Element {
  const currentDate = new Date();

  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const [firstDay, setFirstDay] = useState(currentDate.getDay());
  const [daysInMonth, setDaysInMonth] = useState(numDaysInMonth(month, year));

  const [days, setDays] = useState<Day[]>([
    ...Array.from({ length: daysInMonth }, (_, i) => ({
      date: i + 1,
      dayOfWeek: ((i + firstDay - 1) % 7) + 1,
      week: Math.floor((i + firstDay - 1) / 7) + 1,
    })),
  ]);

  return (
    <div className="App">
      <h2>
        {monthName(month)} {year}
      </h2>
      {days.map((day: Day) => (
        <CalendarDay key={day.date} day={day} />
      ))}
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
