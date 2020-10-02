export const fetchChampions = jest.fn().mockImplementation(() =>
  Promise.resolve({
    MRData: {
      xmlns: "http://ergast.com/mrd/1.4",
      series: "f1",
      url: "http://ergast.com/api/f1/driverstandings/1.json",
      limit: "11",
      offset: "55",
      total: "70",
      StandingsTable: {
        driverStandings: "1",
        StandingsLists: [
          {
            season: "2005",
            round: "19",
            DriverStandings: [
              {
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
              },
            ],
          },
        ],
      },
    },
  })
);
