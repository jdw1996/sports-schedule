import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { COLOURS, DEFAULT_COLOUR, teamColour } from './colours';
import { Day, monthName, numDaysInMonth, generateCalendar } from './date-utils';
import { getSchedule } from './espn-client';
import { Game } from './games';
import './index.css';
import { LEAGUES, TEAMS } from './teams';

const ADD_SYMBOL = '➕';
const REMOVE_SYMBOL = '✖️';

type FavouriteTeam = {
  league: string;
  teamCode: string;
  colour: string;
  games: Game[];
};

function favouriteTeamId(fav: FavouriteTeam): string {
  return `${fav.league}${fav.teamCode}`;
}

function defaultTeam(league: string): string {
  if (league === 'NFL') {
    return 'BUF';
  }
  return 'TOR';
}

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

type TeamPickerProps = {
  addToFavourites: (league: string, team: string, colour: string) => void;
};

function TeamPicker(props: TeamPickerProps) {
  const { addToFavourites } = props;

  const [pendingLeague, setPendingLeague] = useState(LEAGUES[0]);
  const [pendingTeam, setPendingTeam] = useState(defaultTeam(pendingLeague));
  const [colour, setColour] = useState(DEFAULT_COLOUR);

  useEffect(() => {
    if (!(pendingTeam in (TEAMS.get(pendingLeague) ?? {}))) {
      setPendingTeam(defaultTeam(pendingLeague));
    }
  }, [pendingLeague]);

  useEffect(() => {
    setColour(teamColour(pendingLeague, pendingTeam, []));
  }, [pendingLeague, pendingTeam]);

  return (
    <div className={`new-team ${colour}`}>
      <select
        className="league-select"
        onChange={(event) => {
          setPendingLeague(event.target.value);
        }}
        value={pendingLeague}
      >
        {LEAGUES.map((league) => (
          <option key={league} value={league}>
            {league}
          </option>
        ))}
      </select>
      <select
        className="team-select"
        onChange={(event) => {
          setPendingTeam(event.target.value);
        }}
        value={pendingTeam}
      >
        {Object.entries(TEAMS.get(pendingLeague) ?? {}).map(([teamCode, teamName]) => (
          <option key={teamCode} value={teamCode}>
            {teamName}
          </option>
        ))}
      </select>
      <select
        className="colour-select"
        onChange={(event) => {
          setColour(event.target.value);
        }}
        value={colour}
      >
        {COLOURS.map((colourOption) => (
          <option key={colourOption} value={colourOption}>
            {colourOption}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          addToFavourites(pendingLeague, pendingTeam, colour);
        }}
      >
        {ADD_SYMBOL}
      </button>
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
  const [favouriteTeams, setFavouriteTeams] = useState<Map<string, FavouriteTeam>>(new Map([]));

  useEffect(() => {
    const newFirstDay = new Date(year, month, 1).getDay();
    const newDaysInMonth = numDaysInMonth(month, year);
    const newCalendar = generateCalendar(newDaysInMonth, newFirstDay);
    setFirstDay(newFirstDay);
    setDaysInMonth(newDaysInMonth);
    setDays(newCalendar);
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
      <span>{`You have ${favouriteTeams.size} favourite teams.`}</span>
      <TeamPicker
        addToFavourites={(league: string, teamCode: string, colour: string) => {
          setFavouriteTeams((oldFavouriteTeams) => {
            const newFavouriteTeam = {
              league,
              teamCode,
              colour,
              games: [], // TODO: Actually get games here.
            };
            const newFavouriteTeamKey = favouriteTeamId(newFavouriteTeam);
            const newFavouriteTeams = new Map(oldFavouriteTeams);
            if (!oldFavouriteTeams.has(newFavouriteTeamKey)) {
              newFavouriteTeams.set(newFavouriteTeamKey, newFavouriteTeam);
            }
            return newFavouriteTeams;
          });
        }}
      />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
