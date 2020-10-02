export const fetchChampions = async (): Promise<
  ErgastResponse<StandingsTableResponse>
> => {
  const response = await fetch(
    "http://ergast.com/api/f1/driverStandings/1.json?offset=55&limit=11"
  );

  const data = await response.json();

  return data;
};
