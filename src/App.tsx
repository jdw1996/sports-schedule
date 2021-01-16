import React, { useState } from 'react';

import './App.css';
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

type CalendarDayProps = {
  date: number;
};

function CalendarDay(props: CalendarDayProps): JSX.Element {
  return <td>{props.date}</td>;
}

function App(): JSX.Element {
  const currentDate = new Date();

  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const [daysInMonth, setDaysInMonth] = useState(numDaysInMonth(month, year));

  return (
    <div className="App">
      <p>The current month is {month}.</p>
      <p>The current year is {year}.</p>
      <p>There are {daysInMonth} days in this month.</p>
    </div>
  );
}

export default App;
