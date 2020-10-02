import React from "react";
import styled from "styled-components";

import { ChampionsList } from "./Champions/ChampionsList";
import { RacesList } from "./Races/RacesList";
import { SeasonContext } from "./SeasonContext";

const ContainerWrap = styled.div<{ isSeasonSelected: boolean }>`
  max-width: 700px;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  .left {
    transition: width 0.3s;
  }
  .left,
  .right {
    width: ${({ isSeasonSelected }) => (isSeasonSelected ? "45%" : "100%")};
  }
  @media screen and (max-width: 550px) {
    .left {
      display: ${({ isSeasonSelected }) =>
        isSeasonSelected ? "none" : "block"};
    }
    .right {
      width: 100%;
    }
  }
`;

export const Container = () => {
  const { seasonState } = React.useContext(SeasonContext);
  const isSeasonSelected = !!seasonState?.season ?? false;

  return (
    <ContainerWrap isSeasonSelected={isSeasonSelected}>
      <div className="left">
        <ChampionsList />
      </div>
      {isSeasonSelected && (
        <div className="right">
          <RacesList />
        </div>
      )}
    </ContainerWrap>
  );
};
