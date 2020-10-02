import React from "react";

type SeasonContextState = {
  season: string;
  driver: string;
} | null;

interface SeasonContextShape {
  seasonState: SeasonContextState;
  setSeasonState: React.Dispatch<React.SetStateAction<SeasonContextState>>;
}

export const SeasonContext = React.createContext<SeasonContextShape>({
  seasonState: null,
  setSeasonState: () => null,
});

interface SeasonContextProviderProps {
  initialState?: SeasonContextState;
}

export const SeasonContextProvider: React.FC<SeasonContextProviderProps> = ({
  children,
  initialState = null,
}) => {
  const [seasonState, setSeasonState] = React.useState(initialState);

  return (
    <SeasonContext.Provider value={{ seasonState, setSeasonState }}>
      {children}
    </SeasonContext.Provider>
  );
};
