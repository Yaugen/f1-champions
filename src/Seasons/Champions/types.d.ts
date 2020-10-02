type StandingsTableResponse = { StandingsTable: StandingsTable };

interface StandingsTable {
  driverStandings: string;
  StandingsLists: SeasonStanding[];
}

interface SeasonStanding {
  season: string;
  round: string;
  DriverStandings: DriverStanding[];
}

interface DriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: DriverData;
  Constructors: ConstructorData[];
}
