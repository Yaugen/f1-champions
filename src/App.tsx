import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Seasons } from "./Seasons";

const GlobalStyles = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Seasons />
    </>
  );
}

export default App;
