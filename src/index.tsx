import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { COLOURS, DEFAULT_COLOUR, getTeamColour } from './colours';
import { Day, monthName, numDaysInMonth, generateCalendar } from './date-utils';
import { getSchedule } from './espn-client';
import { Game } from './games';
import './index.css';
import { presets } from './presets';
import { LEAGUES, TEAMS } from './teams';

const ADD_SYMBOL = '➕';
const REMOVE_SYMBOL = '✖️';
const PREVIOUS_SYMBOL = '←';
const NEXT_SYMBOL = '→️';

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
  isToday: boolean;
};

function CalendarDay(props: CalendarDayProps): JSX.Element {
  const { day, isToday } = props;
  return (
    <div
      className={`day ${isToday ? 'today' : ''}`}
      style={{ gridArea: `${day.week + 1} / ${day.dayOfWeek} / span 1 / span 1` }}
    >
      <span style={{ textAlign: 'center' }}>{day.date}</span>
      {Array.from(day.games.entries())
        .sort(([, game1], [, game2]) => game1.timeString.localeCompare(game2.timeString))
        .map(([, game]) => (
          <div className={`game ${isToday ? 'i' : ''}${game.colour}`} key={game.description}>
            {game.description}
          </div>
        ))}
    </div>
  );
}

type FavouriteTeamCardProps = {
  teamName: string;
  colour: string;
  removeFromFavourites: () => void;
};

function FavouriteTeamCard(props: FavouriteTeamCardProps): JSX.Element {
  const { teamName, colour, removeFromFavourites } = props;

  return (
    <div className={`favourite-team ${colour}`}>
      <span>{teamName}</span>
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
        {Object.entries(TEAMS.get(pendingLeague) ?? {})
          .sort(([, teamName1], [, teamName2]) => teamName1.localeCompare(teamName2))
          .map(([teamCode, teamName]) => (
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
  const [pendingFavouriteTeams, setPendingFavouriteTeams] = useState(new URLSearchParams());

  useEffect(() => {
    setDays(generateCalendar(numDaysInMonth(month, year), new Date(year, month, 1).getDay()));
  }, [year, month]);

  useEffect(() => {
    favouriteTeams.forEach((favTeam) => {
      setDays((oldDays) => {
        const newDays = [...oldDays];
        for (const game of favTeam.games) {
          if (game.date.getFullYear() === year && game.date.getMonth() === month) {
            const day = { ...newDays[game.date.getDate() - 1] };
            const dayGames = new Map(day.games);
            dayGames.set(game.description, { ...game, colour: favTeam.colour });
            day.games = dayGames;
            newDays[game.date.getDate() - 1] = day;
          }
        }
        return newDays;
      });
    });
  }, [year, month, favouriteTeams]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setPendingFavouriteTeams(params);
    params.forEach(async (colour, teamId) => {
      try {
        if (favouriteTeams.has(teamId)) {
          return;
        }
        const [league, teamCode] = getLeagueAndTeamCode(teamId);
        const games = await getSchedule(league, teamCode);
        setFavouriteTeams((oldFavouriteTeams) => {
          const newFavouriteTeams = new Map(oldFavouriteTeams);
          newFavouriteTeams.set(teamId, {
            league,
            teamCode,
            colour: COLOURS.includes(colour) ? colour : DEFAULT_COLOUR,
            games,
          });
          return newFavouriteTeams;
        });
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  const addToFavourites = (league: string, teamCode: string, colour: string) => {
    setPendingFavouriteTeams((oldTeams) => {
      const newTeams = new URLSearchParams(oldTeams);
      newTeams.set(getTeamId(league, teamCode), colour);
      return newTeams;
    });
  };

  const removeFromFavourites = (league: string, teamCode: string) => {
    setPendingFavouriteTeams((oldTeams) => {
      const newTeams = new URLSearchParams(oldTeams);
      newTeams.delete(getTeamId(league, teamCode));
      return newTeams;
    });
  };

  const applyChanges = () => {
    window.location.search = pendingFavouriteTeams.toString();
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
          <CalendarDay
            key={day.date}
            day={day}
            isToday={
              currentDate.getDate() === day.date &&
              currentDate.getMonth() === month &&
              currentDate.getFullYear() === year
            }
          />
        ))}
      </div>
      {Array.from(pendingFavouriteTeams.entries()).map(([teamId, colour]) => {
        const [league, teamCode] = getLeagueAndTeamCode(teamId);
        return (
          <FavouriteTeamCard
            key={teamId}
            teamName={getTeamName(league, teamCode)}
            colour={colour}
            removeFromFavourites={() => {
              removeFromFavourites(league, teamCode);
            }}
          />
        );
      })}
      <TeamPicker
        usedColours={Array.from(pendingFavouriteTeams.values()).map((colour) => colour)}
        addToFavourites={addToFavourites}
      />
      <button onClick={applyChanges}>Apply Changes</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <p>
      All schedule data comes from the{' '}
      <a href="https://gist.github.com/akeaswaran/b48b02f1c94f873c6655e7129910fc3b">ESPN API</a>. I have no affiliation
      with ESPN or any professional sports league, and I cannot attest to the accuracy of the data.
    </p>
    <p>
      You can select your own favourite teams in the tool above, but I&apos;ve also prepared some presets based on
      likely combinations of favourite teams. My own configuration is available{' '}
      <a href="/sports-schedule?MLB_TOR=Royal&NHL_TOR=Navy&NBA_TOR=Purple&MLB_NYM=Orange&NFL_BUF=Red">here</a> and here
      are some for various regions with multiple teams:{' '}
      {presets.map(([location, query], idx) => (
        <>
          {idx === 0 || <span>, </span>}
          <a key={location} href={`/sports-schedule${query}`}>
            {location}
          </a>
        </>
      ))}
      . For areas with multiple teams in the same league, I realize most fans likely cheer for one or the other, but
      starting with a link to all of them should make it easier to customize.
    </p>
  </React.StrictMode>,
  document.getElementById('root'),
);
