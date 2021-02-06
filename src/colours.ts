export const RED = 'Red';
export const BRICK = 'Brick';
export const BROWN = 'Brown';
export const ORANGE = 'Orange';
export const YELLOW = 'Yellow';
export const GOLD = 'Gold';
export const GREEN = 'Green';
export const TEAL = 'Teal';
export const SKY = 'Sky';
export const ROYAL = 'Royal';
export const NAVY = 'Navy';
export const PURPLE = 'Purple';
export const PINK = 'Pink';
export const BLACK = 'Black';
export const SILVER = 'Silver';
export const GREY = 'Grey';

const BASIC_COLOURS = [RED, ROYAL, GREEN, PURPLE, ORANGE, YELLOW, BLACK, SKY];
export const COLOURS = [
  RED,
  BRICK,
  BROWN,
  ORANGE,
  YELLOW,
  GOLD,
  GREEN,
  TEAL,
  SKY,
  ROYAL,
  NAVY,
  PURPLE,
  PINK,
  BLACK,
  SILVER,
  GREY,
];
export const DEFAULT_COLOUR = BLACK;

export const MLB_COLOURS = new Map<string, string[]>([
  ['ARI', [BRICK, BLACK, PURPLE, TEAL, RED]],
  ['ATL', [NAVY, RED, ROYAL, SKY, YELLOW]],
  ['BAL', [ORANGE, BLACK]],
  ['BOS', [RED, NAVY, GREEN]],
  ['CHC', [ROYAL, RED, NAVY, SKY, BRICK]],
  ['CIN', [RED, BRICK, BLACK, NAVY]],
  ['CLE', [NAVY, RED]],
  ['COL', [PURPLE, SILVER, BLACK]],
  ['CHW', [BLACK, SILVER, RED]],
  ['DET', [NAVY, ORANGE, GREY]],
  ['HOU', [ORANGE, NAVY, ROYAL]],
  ['KC', [ROYAL, GOLD, SKY]],
  ['LAA', [RED, NAVY, SKY, YELLOW]],
  ['LAD', [ROYAL, SKY, RED, NAVY]],
  ['MIA', [BLACK, SKY, TEAL, ORANGE, PINK, RED, YELLOW]],
  ['MIL', [NAVY, YELLOW, ROYAL, GOLD, GREEN]],
  ['MIN', [NAVY, RED, GOLD, SKY]],
  ['NYM', [ROYAL, ORANGE, BLACK, PINK]],
  ['NYY', [NAVY, SILVER, GREY]],
  ['OAK', [GREEN, YELLOW]],
  ['PHI', [RED, ROYAL, BRICK, SKY]],
  ['PIT', [YELLOW, BLACK, RED, GOLD]],
  ['SD', [BROWN, YELLOW, ORANGE, NAVY, SKY]],
  ['SEA', [TEAL, NAVY, ROYAL, YELLOW, GREY]],
  ['SF', [ORANGE, BLACK, GOLD]],
  ['STL', [RED, NAVY, YELLOW, SKY]],
  ['TB', [SKY, NAVY, PURPLE, GREEN, YELLOW, BLACK]],
  ['TEX', [ROYAL, RED, SKY]],
  ['TOR', [ROYAL, NAVY, SKY, RED, GREY]],
  ['WSH', [NAVY, RED, SILVER, GREY]],
]);

const NBA_COLOURS = new Map<string, string[]>([
  ['ATL', [RED, BLACK, YELLOW, NAVY, SILVER, ROYAL, GREEN]],
  ['BKN', [BLACK, SILVER, GREY, SKY, NAVY, RED, ROYAL]],
  ['BOS', [GREEN, GOLD, YELLOW, ORANGE]],
  ['CHA', [TEAL, PURPLE]],
  ['CHI', [RED, BLACK, SILVER]],
  ['CLE', [BRICK, YELLOW, NAVY, GOLD, ORANGE, SKY, RED]],
  ['DAL', [ROYAL, NAVY, SILVER, GREY, BLACK, GREEN]],
  ['DEN', [NAVY, BRICK, YELLOW, SKY]],
  ['DET', [ROYAL, RED, TEAL, BLACK]],
  ['GS', [ROYAL, YELLOW, NAVY, ORANGE, SKY, GOLD]],
  ['HOU', [RED, BLACK, GREY, SILVER, YELLOW]],
  ['IND', [NAVY, YELLOW, ROYAL]],
  ['LAC', [RED, ROYAL, BLACK, SKY, ORANGE]],
  ['LAL', [PURPLE, YELLOW, BLACK, SKY, ROYAL]],
  ['MEM', [SKY, NAVY, YELLOW, TEAL, BLACK, RED, BROWN]],
  ['MIA', [RED, BLACK, PINK, SKY, YELLOW, ORANGE, BRICK]],
  ['MIL', [GREEN, BROWN, RED, PURPLE]],
  ['MIN', [ROYAL, NAVY, SILVER, GREEN, GREY, BLACK]],
  ['NO', [NAVY, GOLD, RED, BRICK, PURPLE, GREEN, YELLOW]],
  ['NY', [ROYAL, ORANGE, BLACK]],
  ['OKC', [SKY, ORANGE, YELLOW, NAVY, ROYAL]],
  ['ORL', [BLACK, ROYAL, SILVER, ORANGE]],
  ['PHI', [ROYAL, RED, BLACK, GOLD]],
  ['PHX', [PURPLE, ORANGE, YELLOW, BLACK]],
  ['POR', [BLACK, RED, SILVER, GREY]],
  ['SAC', [PURPLE, SILVER, BLACK, GREY, SKY, RED]],
  ['SA', [BLACK, SILVER, TEAL, PINK, ORANGE]],
  ['TOR', [RED, PURPLE, BLACK, GOLD]],
  ['UTH', [NAVY, YELLOW, GREEN, PURPLE, SKY, ORANGE, RED, BRICK]],
  ['WSH', [NAVY, RED, SILVER, GOLD, ROYAL, BLACK]],
]);

const NFL_COLOURS = new Map<string, string[]>([
  ['ARI', [RED, BRICK, BLACK, YELLOW, GREY]],
  ['ATL', [BLACK, RED, BRICK, SILVER, GREY]],
  ['BAL', [PURPLE, BLACK, GOLD, YELLOW, RED]],
  ['BUF', [ROYAL, RED]],
  ['CAR', [SKY, BLACK, SILVER]],
  ['CHI', [NAVY, ORANGE]],
  ['CIN', [ORANGE, BLACK]],
  ['CLE', [BROWN, ORANGE]],
  ['DAL', [NAVY, SILVER, ROYAL]],
  ['DEN', [NAVY, ORANGE, BROWN, YELLOW, ROYAL]],
  ['DET', [SKY, SILVER, ROYAL, BLACK]],
  ['GB', [GREEN, YELLOW, NAVY]],
  ['HOU', [NAVY, RED, SKY]],
  ['IND', [ROYAL, NAVY, BLACK]],
  ['JAX', [TEAL, GOLD, BLACK, YELLOW]],
  ['KC', [RED, YELLOW]],
  ['LAC', [SKY, YELLOW, NAVY, ROYAL]],
  ['LAR', [ROYAL, YELLOW, NAVY, GOLD]],
  ['LV', [BLACK, SILVER]],
  ['MIA', [TEAL, ORANGE]],
  ['MIN', [PURPLE, YELLOW]],
  ['NE', [NAVY, SILVER, RED, ROYAL]],
  ['NO', [GOLD, BLACK]],
  ['NYG', [NAVY, RED, ROYAL]],
  ['NYJ', [GREEN, BLACK]],
  ['PHI', [TEAL, GREEN, SILVER, BLACK]],
  ['PIT', [YELLOW, BLACK, SILVER]],
  ['SEA', [NAVY, SILVER, GREEN, ROYAL]],
  ['SF', [RED, GOLD, BRICK, BLACK]],
  ['TB', [RED, ORANGE, GREY, BLACK, BROWN]],
  ['TEN', [SKY, NAVY, RED, SILVER]],
  ['WSH', [BRICK, YELLOW, GOLD, BROWN]],
]);

const NHL_COLOURS = new Map<string, string[]>([
  ['ANA', [ORANGE, GOLD, BLACK, PURPLE, TEAL]],
  ['ARI', [BRICK, BLACK, GREEN, PURPLE, ORANGE, RED]],
  ['BOS', [YELLOW, BLACK, BROWN, GOLD]],
  ['BUF', [ROYAL, YELLOW, NAVY, SILVER, GOLD, BLACK, RED]],
  ['CAR', [RED, BLACK, SILVER, GREY, GREEN, NAVY, ROYAL, BRICK]],
  ['CBJ', [NAVY, RED, SILVER, YELLOW]],
  ['CGY', [RED, YELLOW, BLACK, BRICK]],
  ['CHI', [RED, BLACK, YELLOW, ORANGE, GREEN]],
  ['COL', [BRICK, SKY, NAVY, SILVER, ROYAL, BLACK, RED, YELLOW]],
  ['DAL', [GREEN, BLACK, SILVER, GOLD, YELLOW]],
  ['DET', [RED, PURPLE, SILVER, GREY, BLACK]],
  ['EDM', [ORANGE, ROYAL, NAVY, SILVER, GREY]],
  ['FLA', [RED, NAVY, GOLD, YELLOW, BRICK]],
  ['LA', [BLACK, SILVER, PURPLE, YELLOW, GREY]],
  ['MIN', [GREEN, BRICK, RED, YELLOW]],
  ['MTL', [RED, ROYAL, NAVY]],
  ['NJ', [RED, BLACK, GREEN]],
  ['NSH', [YELLOW, NAVY, SILVER, ROYAL]],
  ['NYI', [ROYAL, ORANGE, NAVY, TEAL, BLACK]],
  ['NYR', [ROYAL, RED, NAVY, SILVER]],
  ['OTT', [RED, BLACK, GOLD, BRICK, YELLOW]],
  ['PHI', [ORANGE, BLACK]],
  ['PIT', [YELLOW, BLACK, GOLD, SKY, NAVY, ROYAL, GREY]],
  ['SJ', [TEAL, BLACK, SILVER, ORANGE, GREY]],
  ['STL', [ROYAL, NAVY, YELLOW, RED, BRICK]],
  ['TB', [ROYAL, SILVER, BLACK, GREY]],
  ['TOR', [ROYAL, NAVY, GREEN, SILVER]],
  ['VAN', [ROYAL, NAVY, GREEN, BRICK, YELLOW, RED, BLACK, ORANGE, SILVER]],
  ['VGS', [GOLD, GREY, BLACK, YELLOW, RED, SILVER]],
  ['WPG', [NAVY, SKY, GREY, SILVER, ROYAL, RED]],
  ['WSH', [RED, NAVY, ROYAL, GOLD, BLACK]],
]);

const TEAM_COLOURS = new Map<string, Map<string, string[]>>([
  ['MLB', MLB_COLOURS],
  ['NBA', NBA_COLOURS],
  ['NFL', NFL_COLOURS],
  ['NHL', NHL_COLOURS],
]);

export function getTeamColour(league: string, team: string, usedColours: string[]): string {
  for (const colour of TEAM_COLOURS.get(league)?.get(team) ?? []) {
    if (!usedColours.includes(colour)) {
      return colour;
    }
  }
  for (const colour of BASIC_COLOURS) {
    if (!usedColours.includes(colour)) {
      return colour;
    }
  }
  for (const colour of COLOURS) {
    if (!usedColours.includes(colour)) {
      return colour;
    }
  }
  return BLACK;
}
