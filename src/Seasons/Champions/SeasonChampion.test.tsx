import React from "react";
// @ts-ignore
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { SeasonChampion } from "./SeasonChampion";

const driverStanding = {
  position: "1",
  positionText: "1",
  points: "133",
  wins: "7",
  Driver: {
    driverId: "alonso",
    permanentNumber: "14",
    code: "ALO",
    url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
    givenName: "Fernando",
    familyName: "Alonso",
    dateOfBirth: "1981-07-29",
    nationality: "Spanish",
  },
  Constructors: [
    {
      constructorId: "renault",
      url: "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
      name: "Renault",
      nationality: "French",
    },
  ],
};

test("Renders season champion data", () => {
  const { getByText } = render(
    <SeasonChampion
      driverStanding={driverStanding}
      season="2020"
      isSelected={false}
    />
  );
  const name = getByText(/Fernando Alonso/);
  expect(name).toBeInTheDocument();
});

test("Should execute callback when clicked", () => {
  const selectHandlerMock = jest.fn();
  const { getByText } = render(
    <SeasonChampion
      driverStanding={driverStanding}
      season="2020"
      isSelected={false}
      onSelect={selectHandlerMock}
    />
  );

  fireEvent.click(getByText(/Fernando Alonso/));

  expect(selectHandlerMock).toHaveBeenCalled();
});
