import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { Colour, teamColour } from './colours';
import { Day, monthName, numDaysInMonth, generateCalendar } from './date-utils';
import { Game } from './games';
import './index.css';
import { NHLGames2021 } from './schedules/nhl-2021';
import { MLB, NBA, NFL, NHL, Team } from './teams';

type CalendarDayProps = {
  day: Day;
};

function CalendarDay(props: CalendarDayProps): JSX.Element {
  const { day } = props;
  return (
    <div className="day" style={{ gridArea: `${day.week + 1} / ${day.dayOfWeek} / span 1 / span 1` }}>
      <span style={{ textAlign: 'center' }}>{day.date}</span>
    </div>
  );
}

function App(): JSX.Element {
  const currentDate = new Date();

  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const [firstDay, setFirstDay] = useState(0);
  const [daysInMonth, setDaysInMonth] = useState(0);
  const [days, setDays] = useState<Day[]>([]);

  useEffect(() => {
    setFirstDay(new Date(year, month, 1).getDay());
    setDaysInMonth(numDaysInMonth(month, year));
  }, [year, month]);

  useEffect(() => {
    setDays(generateCalendar(daysInMonth, firstDay));
  }, [daysInMonth, firstDay]);

  return (
    <div className="App">
      <h2>
        {monthName(month)} {year}
      </h2>
      <div className="grid-container">
        {days.map((day: Day) => (
          <CalendarDay key={day.date} day={day} />
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
