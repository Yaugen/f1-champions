import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { Loading } from "../../Elements/Loading";
import { SeasonContext } from "../SeasonContext";
import { RaceListItem } from "./RaceListItem";
import { fetchSeasonRaces } from "./RacesService";

const ListHeader = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  h2 {
    font-size: 20px;
    font-weight: bold;
    padding-left: 10px;
  }
`;

export const RacesList = () => {
  const { seasonState, setSeasonState } = React.useContext(SeasonContext);
  const { isLoading, data } = useQuery(
    ["season-races", seasonState?.season],
    fetchSeasonRaces,
    { staleTime: Infinity }
  );

  if (!seasonState) {
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <ListHeader>
        <button onClick={() => setSeasonState(null)}>Back</button>
        <h2>{seasonState.season} Season</h2>
      </ListHeader>
      <ul>
        {data.MRData.RaceTable.Races.map((race) => (
          <li key={race.round}>
            <RaceListItem race={race} championDriverId={seasonState.driver} />
          </li>
        ))}
      </ul>
    </div>
  );
};
