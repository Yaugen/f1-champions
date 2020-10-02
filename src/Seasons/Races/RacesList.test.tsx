import React from "react";
import {
  render,
  // @ts-ignore
  waitForElementToBeRemoved,
  // @ts-ignore
  fireEvent,
  cleanup,
} from "@testing-library/react";
import { SeasonContextProvider } from "../SeasonContext";
import { RacesList } from "./RacesList";
import { fetchSeasonRaces } from "./RacesService";

jest.mock("./RacesService");

beforeEach(() => {
  // @ts-ignore
  fetchSeasonRaces.mockClear();
});

afterEach(cleanup);

test("renders nothing if there is no season in context", async () => {
  const { container } = render(
    <SeasonContextProvider initialState={null}>
      <RacesList />
    </SeasonContextProvider>
  );

  expect(fetchSeasonRaces).toHaveBeenLastCalledWith("season-races", null);
  expect(container).toBeEmpty();
});

test("fetches season races and displays them if season is on the context", async () => {
  const { getByText } = render(
    <SeasonContextProvider
      initialState={{ season: "2008", driver: "hamilton" }}
    >
      <RacesList />
    </SeasonContextProvider>
  );

  await waitForElementToBeRemoved(() => getByText(/loading/i));

  expect(fetchSeasonRaces).toHaveBeenLastCalledWith("season-races", "2008");
  expect(getByText(/australian grand prix/i)).toBeInTheDocument();
});

test("it should be closed after clicking on the back button", () => {
  const { container, getByText } = render(
    <SeasonContextProvider
      initialState={{ season: "2008", driver: "hamilton" }}
    >
      <RacesList />
    </SeasonContextProvider>
  );

  fireEvent.click(getByText(/back/i));

  expect(container).toBeEmpty();
});
