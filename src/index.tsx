import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { Colour, teamColour } from './colours';
import { Day, monthName, numDaysInMonth, generateCalendar } from './date-utils';
import './index.css';
import { MLB, NBA, NFL, NHL, Team } from './teams';

type CalendarDayProps = {
  day: Day;
};

function CalendarDay(props: CalendarDayProps): JSX.Element {
  const { day } = props;
  return (
    <div className="day" style={{ gridArea: `${day.week + 1} / ${day.dayOfWeek} / span 1 / span 1` }}>
      <span style={{ textAlign: 'center' }}>{day.date}</span>
      <br />
      <span style={{ textAlign: 'center' }}>{day.games.length}</span>
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
  const [favouriteTeams, setFavouriteTeams] = useState([NHL.TOR]);
  const [favouriteTeamColours, setFavouriteTeamColours] = useState(
    new Map<Team, Colour>([[NHL.TOR, Colour.ROYAL]]),
  );

  // useEffect(() => {
  //   const newFirstDay = new Date(year, month, 1).getDay();
  //   const newDaysInMonth = numDaysInMonth(month, year);
  //   const newCalendar = generateCalendar(newDaysInMonth, newFirstDay);
  //   for (const team of favouriteTeams) {
  //     for (const game of schedules.get(year)?.get(month)?.get(team) ?? []) {
  //       newCalendar[game.day - 1].games.push({
  //         colour: favouriteTeamColours.get(team) ?? Colour.BLACK,
  //         label: `${game.home === team ? `v${game.visitor}` : `@${game.home}`}${game.hour}${game.minute}`,
  //       });
  //     }
  //   }
  //   setFirstDay(newFirstDay);
  //   setDaysInMonth(newDaysInMonth);
  //   setDays(newCalendar);
  // }, [year, month]);

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
