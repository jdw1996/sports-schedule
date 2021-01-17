import { Team } from './teams';

export type Game = {
  visitor: Team;
  home: Team;
  hour: number;
  minute: number;
  year: number;
  month: number;
  day: number;
};

export function makeGame(
  visitor: Team,
  home: Team,
  hour: number,
  minute: number,
  year: number,
  month: number,
  day: number,
): Game {
  return { visitor, home, hour, minute, year, month, day };
}
