interface ErgastResponse<T> {
  MRData: ErgastPaging & T;
}

interface ErgastPaging {
  xlmns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
}

interface DriverData {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

interface ConstructorData {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}
