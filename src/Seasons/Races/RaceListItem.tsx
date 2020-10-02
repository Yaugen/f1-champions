import React from "react";
import styled from "styled-components";

const RaceItem = styled.div<{ isChampion: boolean }>`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-color: ${({ isChampion }) => (isChampion ? "#ffc8bb" : "#ddd")};
  background-color: ${({ isChampion }) => (isChampion ? "#ffecec" : "#fff")};

  strong {
    font-weight: bold;
  }
`;

interface RaceListItemProps {
  race: Race;
  championDriverId: string;
}

export const RaceListItem: React.FC<RaceListItemProps> = ({
  championDriverId,
  race,
}) => {
  const winner = race.Results[0].Driver;
  const isChampion = winner.driverId === championDriverId;
  return (
    <RaceItem isChampion={isChampion}>
      <p>Race: {race.raceName}</p>
      <p>
        Winner:{" "}
        <strong>
          {winner.givenName} {winner.familyName}
        </strong>
      </p>
    </RaceItem>
  );
};
