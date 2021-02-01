import { Game } from './games';

const URLS: Map<string, string> = new Map([
  ['MLB', 'http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/'],
  ['NBA', 'http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/'],
  ['NFL', 'http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/'],
  ['NHL', 'http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/'],
]);

type ESPNGame = {
  date: string;
  shortName: string;
};

function espnToNative(espn: ESPNGame, teamOfInterest: string): Game {
  const [away, , home] = espn.shortName.split(' ');
  let opponentString = '';
  if (away === teamOfInterest) {
    opponentString = `@${home}`;
  } else {
    opponentString = `v${away}`;
  }
  return { opponentString, date: new Date(espn.date) };
}

export async function getSchedule(league: string, team: string): Promise<Game[]> {
  if (!URLS.has(league)) {
    throw new Error(`Given value ${league} is not a known league.`);
  }
  const url = `${URLS.get(league)}${team}/schedule`;
  const events: ESPNGame[] = (await (await fetch(url)).json()).events;
  return events.map((espn) => espnToNative(espn, team));
}
