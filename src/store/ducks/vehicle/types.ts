/* eslint-disable no-unused-vars */
export enum VehicleActionTypes {
  LOAD_REQUEST = '@VehicleActionType/LOAD_REQUEST',
  LOAD_SUCCESS = '@VehicleActionType/LOAD_SUCCESS',
  LOAD_FAILURE = '@VehicleActionType/LOAD_FAILURE',
}

export interface IVehicle {
  price: string;
  brand: string;
  model: string;
  modelYear: number;
  fuel: string;
  codeFipe: string;
  referenceMonth: string;
  vehicleType: number;
  fuelAcronym: string;
}
export interface IVehicleData {
  vehicle: IVehicle;
}

export interface IVehicleState {
  readonly data: IVehicleData;
  readonly loading: boolean;
  readonly error: boolean;
}
