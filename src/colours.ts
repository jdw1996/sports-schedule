export enum Colour {
  RED = '#df0606',
  BRICK = '#910808',
  BROWN = '#613a05',
  ORANGE = '#f96a20',
  YELLOW = '#f9cb06',
  GOLD = '#bfa740',
  GREEN = '#248e0b',
  TEAL = '#16999d',
  SKY = '#20c0f9',
  ROYAL = '#2039df',
  NAVY = '#211b7e',
  PURPLE = '#6f0fbd',
  PINK = '#f25ae9',
  BLACK = '#000000',
  SILVER = '#a6a6a6',
  GREY = '#4d4d4d',
}

const BASIC_COLOURS = [
  Colour.RED,
  Colour.ROYAL,
  Colour.GREEN,
  Colour.PURPLE,
  Colour.ORANGE,
  Colour.YELLOW,
  Colour.BLACK,
  Colour.SKY,
];

export const MLB_COLOURS = new Map<string, Colour[]>([
  ['ARI', [Colour.BRICK, Colour.BLACK, Colour.PURPLE, Colour.TEAL, Colour.RED]],
  ['ATL', [Colour.NAVY, Colour.RED, Colour.ROYAL, Colour.SKY, Colour.YELLOW]],
  ['BAL', [Colour.ORANGE, Colour.BLACK]],
  ['BOS', [Colour.RED, Colour.NAVY, Colour.GREEN]],
  ['CHC', [Colour.ROYAL, Colour.RED, Colour.NAVY, Colour.SKY, Colour.BRICK]],
  ['CIN', [Colour.RED, Colour.BRICK, Colour.BLACK, Colour.NAVY]],
  ['CLE', [Colour.NAVY, Colour.RED]],
  ['COL', [Colour.PURPLE, Colour.SILVER, Colour.BLACK]],
  ['CHW', [Colour.BLACK, Colour.SILVER, Colour.RED]],
  ['DET', [Colour.NAVY, Colour.ORANGE, Colour.GREY]],
  ['HOU', [Colour.ORANGE, Colour.NAVY, Colour.ROYAL]],
  ['KC', [Colour.ROYAL, Colour.GOLD, Colour.SKY]],
  ['LAA', [Colour.RED, Colour.NAVY, Colour.SKY, Colour.YELLOW]],
  ['LAD', [Colour.ROYAL, Colour.SKY, Colour.RED, Colour.NAVY]],
  ['MIA', [Colour.BLACK, Colour.SKY, Colour.TEAL, Colour.ORANGE, Colour.PINK, Colour.RED, Colour.YELLOW]],
  ['MIL', [Colour.NAVY, Colour.YELLOW, Colour.ROYAL, Colour.GOLD, Colour.GREEN]],
  ['MIN', [Colour.NAVY, Colour.RED, Colour.GOLD, Colour.SKY]],
  ['NYM', [Colour.ROYAL, Colour.ORANGE, Colour.BLACK, Colour.PINK]],
  ['NYY', [Colour.NAVY, Colour.SILVER, Colour.GREY]],
  ['OAK', [Colour.GREEN, Colour.YELLOW]],
  ['PHI', [Colour.RED, Colour.ROYAL, Colour.BRICK, Colour.SKY]],
  ['PIT', [Colour.YELLOW, Colour.BLACK, Colour.RED, Colour.GOLD]],
  ['SD', [Colour.BROWN, Colour.YELLOW, Colour.ORANGE, Colour.NAVY, Colour.SKY]],
  ['SEA', [Colour.TEAL, Colour.NAVY, Colour.ROYAL, Colour.YELLOW, Colour.GREY]],
  ['SF', [Colour.ORANGE, Colour.BLACK, Colour.GOLD]],
  ['STL', [Colour.RED, Colour.NAVY, Colour.YELLOW, Colour.SKY]],
  ['TB', [Colour.SKY, Colour.NAVY, Colour.PURPLE, Colour.GREEN, Colour.YELLOW, Colour.BLACK]],
  ['TEX', [Colour.ROYAL, Colour.RED, Colour.SKY]],
  ['TOR', [Colour.ROYAL, Colour.NAVY, Colour.SKY, Colour.RED, Colour.GREY]],
  ['WSH', [Colour.NAVY, Colour.RED, Colour.SILVER, Colour.GREY]],
]);

const NBA_COLOURS = new Map<string, Colour[]>([
  ['ATL', [Colour.RED, Colour.BLACK, Colour.YELLOW, Colour.NAVY, Colour.SILVER, Colour.ROYAL, Colour.GREEN]],
  ['BKN', [Colour.BLACK, Colour.SILVER, Colour.GREY, Colour.SKY, Colour.NAVY, Colour.RED, Colour.ROYAL]],
  ['BOS', [Colour.GREEN, Colour.GOLD, Colour.YELLOW, Colour.ORANGE]],
  ['CHA', [Colour.TEAL, Colour.PURPLE]],
  ['CHI', [Colour.RED, Colour.BLACK, Colour.SILVER]],
  ['CLE', [Colour.BRICK, Colour.YELLOW, Colour.NAVY, Colour.GOLD, Colour.ORANGE, Colour.SKY, Colour.RED]],
  ['DAL', [Colour.ROYAL, Colour.NAVY, Colour.SILVER, Colour.GREY, Colour.BLACK, Colour.GREEN]],
  ['DEN', [Colour.NAVY, Colour.BRICK, Colour.YELLOW, Colour.SKY]],
  ['DET', [Colour.ROYAL, Colour.RED, Colour.TEAL, Colour.BLACK]],
  ['GS', [Colour.ROYAL, Colour.YELLOW, Colour.NAVY, Colour.ORANGE, Colour.SKY, Colour.GOLD]],
  ['HOU', [Colour.RED, Colour.BLACK, Colour.GREY, Colour.SILVER, Colour.YELLOW]],
  ['IND', [Colour.NAVY, Colour.YELLOW, Colour.ROYAL]],
  ['LAC', [Colour.RED, Colour.ROYAL, Colour.BLACK, Colour.SKY, Colour.ORANGE]],
  ['LAL', [Colour.PURPLE, Colour.YELLOW, Colour.BLACK, Colour.SKY, Colour.ROYAL]],
  ['MEM', [Colour.SKY, Colour.NAVY, Colour.YELLOW, Colour.TEAL, Colour.BLACK, Colour.RED, Colour.BROWN]],
  ['MIA', [Colour.RED, Colour.BLACK, Colour.PINK, Colour.SKY, Colour.YELLOW, Colour.ORANGE, Colour.BRICK]],
  ['MIL', [Colour.GREEN, Colour.BROWN, Colour.RED, Colour.PURPLE]],
  ['MIN', [Colour.ROYAL, Colour.NAVY, Colour.SILVER, Colour.GREEN, Colour.GREY, Colour.BLACK]],
  ['NO', [Colour.NAVY, Colour.GOLD, Colour.RED, Colour.BRICK, Colour.PURPLE, Colour.GREEN, Colour.YELLOW]],
  ['NY', [Colour.ROYAL, Colour.ORANGE, Colour.BLACK]],
  ['OKC', [Colour.SKY, Colour.ORANGE, Colour.YELLOW, Colour.NAVY, Colour.ROYAL]],
  ['ORL', [Colour.BLACK, Colour.ROYAL, Colour.SILVER, Colour.ORANGE]],
  ['PHI', [Colour.ROYAL, Colour.RED, Colour.BLACK, Colour.GOLD]],
  ['PHX', [Colour.PURPLE, Colour.ORANGE, Colour.YELLOW, Colour.BLACK]],
  ['POR', [Colour.BLACK, Colour.RED, Colour.SILVER, Colour.GREY]],
  ['SAC', [Colour.PURPLE, Colour.SILVER, Colour.BLACK, Colour.GREY, Colour.SKY, Colour.RED]],
  ['SA', [Colour.BLACK, Colour.SILVER, Colour.TEAL, Colour.PINK, Colour.ORANGE]],
  ['TOR', [Colour.RED, Colour.PURPLE, Colour.BLACK, Colour.GOLD]],
  [
    'UTH',
    [Colour.NAVY, Colour.YELLOW, Colour.GREEN, Colour.PURPLE, Colour.SKY, Colour.ORANGE, Colour.RED, Colour.BRICK],
  ],
  ['WSH', [Colour.NAVY, Colour.RED, Colour.SILVER, Colour.GOLD, Colour.ROYAL, Colour.BLACK]],
]);

const NFL_COLOURS = new Map<string, Colour[]>([
  ['ARI', [Colour.RED, Colour.BRICK, Colour.BLACK, Colour.YELLOW, Colour.GREY]],
  ['ATL', [Colour.BLACK, Colour.RED, Colour.BRICK, Colour.SILVER, Colour.GREY]],
  ['BAL', [Colour.PURPLE, Colour.BLACK, Colour.GOLD, Colour.YELLOW, Colour.RED]],
  ['BUF', [Colour.ROYAL, Colour.RED]],
  ['CAR', [Colour.SKY, Colour.BLACK, Colour.SILVER]],
  ['CHI', [Colour.NAVY, Colour.ORANGE]],
  ['CIN', [Colour.ORANGE, Colour.BLACK]],
  ['CLE', [Colour.BROWN, Colour.ORANGE]],
  ['DAL', [Colour.NAVY, Colour.SILVER, Colour.ROYAL]],
  ['DEN', [Colour.NAVY, Colour.ORANGE, Colour.BROWN, Colour.YELLOW, Colour.ROYAL]],
  ['DET', [Colour.SKY, Colour.SILVER, Colour.ROYAL, Colour.BLACK]],
  ['GB', [Colour.GREEN, Colour.YELLOW, Colour.NAVY]],
  ['HOU', [Colour.NAVY, Colour.RED, Colour.SKY]],
  ['IND', [Colour.ROYAL, Colour.NAVY, Colour.BLACK]],
  ['JAX', [Colour.TEAL, Colour.GOLD, Colour.BLACK, Colour.YELLOW]],
  ['KC', [Colour.RED, Colour.YELLOW]],
  ['LAC', [Colour.SKY, Colour.YELLOW, Colour.NAVY, Colour.ROYAL]],
  ['LAR', [Colour.ROYAL, Colour.YELLOW, Colour.NAVY, Colour.GOLD]],
  ['LV', [Colour.BLACK, Colour.SILVER]],
  ['MIA', [Colour.TEAL, Colour.ORANGE]],
  ['MIN', [Colour.PURPLE, Colour.YELLOW]],
  ['NE', [Colour.NAVY, Colour.SILVER, Colour.RED, Colour.ROYAL]],
  ['NO', [Colour.GOLD, Colour.BLACK]],
  ['NYG', [Colour.NAVY, Colour.RED, Colour.ROYAL]],
  ['NYJ', [Colour.GREEN, Colour.BLACK]],
  ['PHI', [Colour.TEAL, Colour.GREEN, Colour.SILVER, Colour.BLACK]],
  ['PIT', [Colour.YELLOW, Colour.BLACK, Colour.SILVER]],
  ['SEA', [Colour.NAVY, Colour.SILVER, Colour.GREEN, Colour.ROYAL]],
  ['SF', [Colour.RED, Colour.GOLD, Colour.BRICK, Colour.BLACK]],
  ['TB', [Colour.RED, Colour.ORANGE, Colour.GREY, Colour.BLACK, Colour.BROWN]],
  ['TEN', [Colour.SKY, Colour.NAVY, Colour.RED, Colour.SILVER]],
  ['WSH', [Colour.BRICK, Colour.YELLOW, Colour.GOLD, Colour.BROWN]],
]);

const NHL_COLOURS = new Map<string, Colour[]>([
  ['ANA', [Colour.ORANGE, Colour.GOLD, Colour.BLACK, Colour.PURPLE, Colour.TEAL]],
  ['ARI', [Colour.BRICK, Colour.BLACK, Colour.GREEN, Colour.PURPLE, Colour.ORANGE, Colour.RED]],
  ['BOS', [Colour.YELLOW, Colour.BLACK, Colour.BROWN, Colour.GOLD]],
  ['BUF', [Colour.ROYAL, Colour.YELLOW, Colour.NAVY, Colour.SILVER, Colour.GOLD, Colour.BLACK, Colour.RED]],
  [
    'CAR',
    [Colour.RED, Colour.BLACK, Colour.SILVER, Colour.GREY, Colour.GREEN, Colour.NAVY, Colour.ROYAL, Colour.BRICK],
  ],
  ['CBJ', [Colour.NAVY, Colour.RED, Colour.SILVER, Colour.YELLOW]],
  ['CGY', [Colour.RED, Colour.YELLOW, Colour.BLACK, Colour.BRICK]],
  ['CHI', [Colour.RED, Colour.BLACK, Colour.YELLOW, Colour.ORANGE, Colour.GREEN]],
  [
    'COL',
    [Colour.BRICK, Colour.SKY, Colour.NAVY, Colour.SILVER, Colour.ROYAL, Colour.BLACK, Colour.RED, Colour.YELLOW],
  ],
  ['DAL', [Colour.GREEN, Colour.BLACK, Colour.SILVER, Colour.GOLD, Colour.YELLOW]],
  ['DET', [Colour.RED, Colour.PURPLE, Colour.SILVER, Colour.GREY, Colour.BLACK]],
  ['EDM', [Colour.ORANGE, Colour.ROYAL, Colour.NAVY, Colour.SILVER, Colour.GREY]],
  ['FLA', [Colour.RED, Colour.NAVY, Colour.GOLD, Colour.YELLOW, Colour.BRICK]],
  ['LA', [Colour.BLACK, Colour.SILVER, Colour.PURPLE, Colour.YELLOW, Colour.GREY]],
  ['MIN', [Colour.GREEN, Colour.BRICK, Colour.RED, Colour.YELLOW]],
  ['MTL', [Colour.RED, Colour.ROYAL, Colour.NAVY]],
  ['NJ', [Colour.RED, Colour.BLACK, Colour.GREEN]],
  ['NSH', [Colour.YELLOW, Colour.NAVY, Colour.SILVER, Colour.ROYAL]],
  ['NYI', [Colour.ROYAL, Colour.ORANGE, Colour.NAVY, Colour.TEAL, Colour.BLACK]],
  ['NYR', [Colour.ROYAL, Colour.RED, Colour.NAVY, Colour.SILVER]],
  ['OTT', [Colour.RED, Colour.BLACK, Colour.GOLD, Colour.BRICK, Colour.YELLOW]],
  ['PHI', [Colour.ORANGE, Colour.BLACK]],
  ['PIT', [Colour.YELLOW, Colour.BLACK, Colour.GOLD, Colour.SKY, Colour.NAVY, Colour.ROYAL, Colour.GREY]],
  ['SJ', [Colour.TEAL, Colour.BLACK, Colour.SILVER, Colour.ORANGE, Colour.GREY]],
  ['STL', [Colour.ROYAL, Colour.NAVY, Colour.YELLOW, Colour.RED, Colour.BRICK]],
  ['TB', [Colour.ROYAL, Colour.SILVER, Colour.BLACK, Colour.GREY]],
  ['TOR', [Colour.ROYAL, Colour.NAVY, Colour.GREEN, Colour.SILVER]],
  [
    'VAN',
    [
      Colour.ROYAL,
      Colour.NAVY,
      Colour.GREEN,
      Colour.BRICK,
      Colour.YELLOW,
      Colour.RED,
      Colour.BLACK,
      Colour.ORANGE,
      Colour.SILVER,
    ],
  ],
  ['VGS', [Colour.GOLD, Colour.GREY, Colour.BLACK, Colour.YELLOW, Colour.RED, Colour.SILVER]],
  ['WPG', [Colour.NAVY, Colour.SKY, Colour.GREY, Colour.SILVER, Colour.ROYAL, Colour.RED]],
  ['WSH', [Colour.RED, Colour.NAVY, Colour.ROYAL, Colour.GOLD, Colour.BLACK]],
]);

const TEAM_COLOURS = new Map<string, Map<string, Colour[]>>([
  ['MLB', MLB_COLOURS],
  ['NBA', NBA_COLOURS],
  ['NFL', NFL_COLOURS],
  ['NHL', NHL_COLOURS],
]);

export function teamColour(league: string, team: string, usedColours: Colour[]): Colour {
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
  for (const colour of Object.values(Colour)) {
    if (!usedColours.includes(colour)) {
      return colour;
    }
  }
  return Colour.BLACK;
}
