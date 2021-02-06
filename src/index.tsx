import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { COLOURS, DEFAULT_COLOUR, getTeamColour } from './colours';
import { Day, monthName, numDaysInMonth, generateCalendar } from './date-utils';
import { getSchedule } from './espn-client';
import { Game } from './games';
import './index.css';
import { LEAGUES, TEAMS } from './teams';

const ADD_SYMBOL = '➕';
const REMOVE_SYMBOL = '✖️';
const PREVIOUS_SYMBOL = '⬅️';
const NEXT_SYMBOL = '➡️';

type FavouriteTeam = {
  league: string;
  teamCode: string;
  colour: string;
  games: Game[];
};

function getTeamId(league: string, teamCode: string): string {
  return `${league}_${teamCode}`;
}

function getLeagueAndTeamCode(teamId: string): [string, string] {
  const splitId = teamId.split('_');
  if (splitId.length !== 2) {
    throw new Error('Invalid team ID!');
  }
  return splitId as [string, string];
}

function getTeamName(league: string, teamCode: string): string {
  return TEAMS.get(league)?.[teamCode] ?? 'Team Not Found';
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
    </div>
  );
}

type FavouriteTeamCardProps = {
  teamName: string;
  colour: string;
  numGames: number;
  removeFromFavourites: () => void;
};

function FavouriteTeamCard(props: FavouriteTeamCardProps): JSX.Element {
  const { teamName, colour, numGames, removeFromFavourites } = props;

  return (
    <div className={`favourite-team ${colour}`}>
      <span>{`${teamName} (${numGames})`}</span>
      <button className="remove-button" onClick={removeFromFavourites}>
        {REMOVE_SYMBOL}
      </button>
    </div>
  );
}

type TeamPickerProps = {
  addToFavourites: (league: string, team: string, colour: string) => void;
  usedColours: string[];
};

function TeamPicker(props: TeamPickerProps) {
  const { addToFavourites, usedColours } = props;

  const [pendingLeague, setPendingLeague] = useState(LEAGUES[0]);
  const [pendingTeam, setPendingTeam] = useState(defaultTeam(pendingLeague));
  const [colour, setColour] = useState(DEFAULT_COLOUR);

  useEffect(() => {
    if (!(pendingTeam in (TEAMS.get(pendingLeague) ?? {}))) {
      setPendingTeam(defaultTeam(pendingLeague));
    }
  }, [pendingLeague]);

  useEffect(() => {
    setColour(getTeamColour(pendingLeague, pendingTeam, usedColours));
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
        className="remove-button"
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
  const [days, setDays] = useState<Day[]>([]);
  const [favouriteTeams, setFavouriteTeams] = useState<Map<string, FavouriteTeam>>(new Map([]));

  useEffect(() => {
    setDays(generateCalendar(numDaysInMonth(month, year), new Date(year, month, 1).getDay()));
  }, [year, month]);

  useEffect(() => {
    const getGamesFor = async (favTeam: FavouriteTeam) => {
      if (favTeam.games.length > 0) {
        return;
      }
      const games = await getSchedule(favTeam.league, favTeam.teamCode);
      setFavouriteTeams((oldFavouriteTeams) => {
        const newFavouriteTeams = new Map(oldFavouriteTeams);
        const teamId = getTeamId(favTeam.league, favTeam.teamCode);
        const team = newFavouriteTeams.get(teamId);
        if (team) {
          const newTeam = { ...team };
          newTeam.games = games;
          newFavouriteTeams.set(teamId, newTeam);
        }
        return newFavouriteTeams;
      });
    };
    favouriteTeams.forEach((favTeam) => {
      getGamesFor(favTeam);
    });
  }, [favouriteTeams]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.forEach((colour, teamId) => {
      try {
        const [league, teamCode] = getLeagueAndTeamCode(teamId);
        setFavouriteTeams((oldFavouriteTeams) => {
          const newFavouriteTeamKey = getTeamId(league, teamCode);
          if (oldFavouriteTeams.has(newFavouriteTeamKey)) {
            return oldFavouriteTeams;
          }
          const newFavouriteTeams = new Map(oldFavouriteTeams);
          newFavouriteTeams.set(newFavouriteTeamKey, {
            league,
            teamCode,
            colour: COLOURS.includes(colour) ? colour : DEFAULT_COLOUR,
            games: [],
          });
          return newFavouriteTeams;
        });
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  const addToFavourites = (league: string, teamCode: string, colour: string) => {
    const params = new URLSearchParams(window.location.search);
    const oldParams = params.toString();
    params.set(getTeamId(league, teamCode), colour);
    const newParams = params.toString();
    if (oldParams !== newParams) {
      window.location.search = newParams;
    }
  };

  const removeFromFavourites = (league: string, teamCode: string) => {
    const params = new URLSearchParams(window.location.search);
    const oldParams = params.toString();
    params.delete(getTeamId(league, teamCode));
    const newParams = params.toString();
    if (oldParams !== newParams) {
      window.location.search = newParams;
    }
  };

  return (
    <div className="App">
      <h2>
        <button
          className="previous-button"
          onClick={() => {
            let newMonth = month - 1;
            if (newMonth < 0) {
              setYear((oldYear) => oldYear - 1);
              newMonth += 12;
            }
            setMonth(newMonth);
          }}
        >
          {PREVIOUS_SYMBOL}
        </button>
        {monthName(month)} {year}
        <button
          className="next-button"
          onClick={() => {
            let newMonth = month + 1;
            if (newMonth > 11) {
              setYear((oldYear) => oldYear + 1);
              newMonth %= 12;
            }
            setMonth(newMonth);
          }}
        >
          {NEXT_SYMBOL}
        </button>
      </h2>
      <div className="grid-container">
        {days.map((day: Day) => (
          <CalendarDay key={day.date} day={day} />
        ))}
      </div>
      {Array.from(favouriteTeams.entries()).map(([teamId, favTeam]: [string, FavouriteTeam]) => (
        <FavouriteTeamCard
          key={teamId}
          teamName={getTeamName(favTeam.league, favTeam.teamCode)}
          colour={favTeam.colour}
          numGames={favTeam.games.length}
          removeFromFavourites={() => {
            removeFromFavourites(favTeam.league, favTeam.teamCode);
          }}
        />
      ))}
      <TeamPicker
        usedColours={Array.from(favouriteTeams.values()).map((favTeam) => favTeam.colour)}
        addToFavourites={addToFavourites}
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
