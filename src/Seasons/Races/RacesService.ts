export const fetchSeasonRaces = async (
  key: string,
  season: string
): Promise<ErgastResponse<RaceTableResponse> | null> => {
  if (!season) {
    return null;
  }
  const response = await fetch(
    `http://ergast.com/api/f1/${season}/results/1.json`
  );

  return response.json();
};
