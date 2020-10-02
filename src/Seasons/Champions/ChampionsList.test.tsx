import React from "react";
import {
  render,
  // @ts-ignore
  waitForElementToBeRemoved,
  cleanup,
} from "@testing-library/react";

import { ChampionsList } from "./ChampionsList";
import { SeasonContextProvider } from "../SeasonContext";
import { fetchChampions } from "./ChampionsService";

jest.mock("./ChampionsService");

beforeEach(() => {
  // @ts-ignore
  fetchChampions.mockClear();
});

afterEach(cleanup);

test("fetches list of champions and displays the list", async () => {
  const { getByText } = render(
    <SeasonContextProvider>
      <ChampionsList />
    </SeasonContextProvider>
  );

  expect(getByText(/loading/i)).toBeInTheDocument();

  await waitForElementToBeRemoved(() => getByText(/loading/i));

  expect(fetchChampions).toHaveBeenCalledWith("champions-list");
  expect(getByText(/fernando alonso/i)).toBeInTheDocument();
});

// test("2", async () => {
//   fetchChampions.mockResolvedValue({
//     MRData: {
//       xmlns: "http://ergast.com/mrd/1.4",
//       series: "f1",
//       url: "http://ergast.com/api/f1/driverstandings/1.json",
//       limit: "11",
//       offset: "55",
//       total: "70",
//       StandingsTable: {
//         driverStandings: "1",
//         StandingsLists: [
//           {
//             season: "2005",
//             round: "19",
//             DriverStandings: [
//               {
//                 position: "1",
//                 positionText: "1",
//                 points: "133",
//                 wins: "7",
//                 Driver: {
//                   driverId: "alonso",
//                   permanentNumber: "14",
//                   code: "ALO",
//                   url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
//                   givenName: "Fernando11",
//                   familyName: "Alonso",
//                   dateOfBirth: "1981-07-29",
//                   nationality: "Spanish",
//                 },
//                 Constructors: [
//                   {
//                     constructorId: "renault",
//                     url: "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
//                     name: "Renault",
//                     nationality: "French",
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     },
//   });
//   const { getByText } = render(
//     <SeasonContextProvider>
//       <ChampionsList />
//     </SeasonContextProvider>
//   );

//   await waitForElementToBeRemoved(() => getByText(/loading/i));

//   expect(getByText(/fernando alonso/i)).toBeInTheDocument();
// });
