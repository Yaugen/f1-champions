type RaceTableResponse = { RaceTable: RaceTable };

interface RaceTable {
  season: string;
  position: string;
  Races: Race[];
}

interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  Results: RaceResult[];
}

interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: LocationData;
}

interface LocationData {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

interface RaceResult {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: DriverData;
  Constructor: ConstructorData;
  grid: string;
  laps: string;
  status: string;
  Time: {
    millis: string;
    time: string;
  };
  FastestLap: FastestLap;
}

interface FastestLap {
  rank: string;
  lap: string;
  Time: { time: string };
  AverageSpeed: { units: string; speed: string };
}
