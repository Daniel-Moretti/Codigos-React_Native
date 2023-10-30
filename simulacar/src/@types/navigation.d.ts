export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Login: undefined;
      PersonData: {
        name: string;
      };
      VehicleData: {
        name: string,
        idade : string
      };
      FinalResult: {
        name: string,
        nameCar: string,
        carYear: string,
        idade: string
      };
    }
  }
}
