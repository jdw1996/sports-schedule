import { Game } from './games';

const URLS: Map<string, string> = new Map([
  ['MLB', 'https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/'],
  ['NBA', 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/'],
  ['NFL', 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/'],
  ['NHL', 'https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/'],
]);

type ESPNGame = {
  date: string;
  shortName: string;
};

function espnToNative(espn: ESPNGame, teamOfInterest: string): Game {
  const [away, , home] = espn.shortName.split(' ');
  const date = new Date(espn.date);
  const timeString = `${('00' + date.getHours()).slice(-2)}${('00' + date.getMinutes()).slice(-2)}`;
  let opponentString = '';
  if (away === teamOfInterest) {
    opponentString = `@${home}`;
  } else {
    opponentString = `v${away}`;
  }
  return { opponentString, timeString, description: `${opponentString}${timeString}`, date };
}

export async function getSchedule(league: string, teamCode: string): Promise<Game[]> {
  if (!URLS.has(league)) {
    throw new Error(`Given value ${league} is not a known league.`);
  }
  const url = `${URLS.get(league)}${teamCode}/schedule`;
  const events: ESPNGame[] = (await (await fetch(url)).json()).events;
  return events.map((espn) => espnToNative(espn, teamCode));
}
