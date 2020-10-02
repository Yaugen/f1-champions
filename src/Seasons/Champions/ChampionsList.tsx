import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { Loading } from "../../Elements/Loading";
import { SeasonContext } from "../SeasonContext";
import { fetchChampions } from "./ChampionsService";
import { SeasonChampion } from "./SeasonChampion";

const List = styled.ul``;

export const ChampionsList = () => {
  const { seasonState, setSeasonState } = React.useContext(SeasonContext);

  const { data, isLoading } = useQuery("champions-list", fetchChampions, {
    // staleTime: Infinity,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  return (
    <List>
      {data.MRData.StandingsTable.StandingsLists.map((item) => (
        <li key={item.season}>
          <SeasonChampion
            isSelected={item.season === seasonState?.season}
            season={item.season}
            driverStanding={item.DriverStandings[0]}
            onSelect={() =>
              setSeasonState({
                season: item.season,
                driver: item.DriverStandings[0].Driver.driverId,
              })
            }
          />
        </li>
      ))}
    </List>
  );
};
