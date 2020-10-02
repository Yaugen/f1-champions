import React from "react";
import { Container } from "./Container";
import { SeasonContextProvider } from "./SeasonContext";

export const Seasons = () => (
  <SeasonContextProvider>
    <Container />
  </SeasonContextProvider>
);
