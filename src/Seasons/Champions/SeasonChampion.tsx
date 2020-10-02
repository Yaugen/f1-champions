import React from "react";
import styled from "styled-components";

interface ChampionContainerProps {
  isSelected?: boolean;
}

const ChampionContainer = styled.div<ChampionContainerProps>`
  height: 75px;
  margin-bottom: 10px;
  padding-left: 5px;
  border: 1px solid #ccc;
  border-color: ${({ isSelected = false }) =>
    isSelected ? "#ffc8bb" : "#ddd"};
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ isSelected = false }) =>
    isSelected ? "#ffecec" : "#fff"};

  &:hover {
    background-color: #ffecec;
  }
`;

const SeasonYear = styled.span`
  width: 40px;
  font-weight: bold;
  font-size: 28px;
  writing-mode: tb-rl;
  transform: rotate(-180deg);
  color: #ddd;
`;

const ChampionName = styled.h2`
  font-size: 22px;
  font-weight: 700;
`;
const ChampionStats = styled.p`
  padding-top: 3px;
  color: #999;
`;

interface SeasonChampionProps {
  season: string;
  isSelected: boolean;
  driverStanding: DriverStanding;
  onSelect?: () => void;
}

export const SeasonChampion: React.FC<SeasonChampionProps> = ({
  season,
  isSelected,
  driverStanding,
  onSelect,
}) => {
  return (
    <ChampionContainer
      onClick={() => onSelect && onSelect()}
      isSelected={isSelected}
    >
      <SeasonYear>{season}</SeasonYear>
      <div>
        <ChampionName>
          {driverStanding.Driver.givenName} {driverStanding.Driver.familyName}
        </ChampionName>
        <ChampionStats>
          Wins: {driverStanding.wins} Points: {driverStanding.points}
        </ChampionStats>
      </div>
    </ChampionContainer>
  );
};
