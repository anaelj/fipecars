/* eslint-disable no-unused-vars */
export enum YearModelTypes {
  LOAD_REQUEST = '@YearModelTypes/LOAD_REQUEST',
  LOAD_SUCCESS = '@YearModelTypes/LOAD_SUCCESS',
  LOAD_FAILURE = '@YearModelTypes/LOAD_FAILURE',
  TOGGLE_YEARMODEL = '@YearModelTypes/TOGGLE_YEARMODEL',
}

export interface IYearModel {
  code: number;
  name: string;
}
export interface IYearModelData {
  yearModels: IYearModel[];
  selectedYearModel?: IYearModel;
}

export interface IYearModelsState {
  readonly data: IYearModelData;
  readonly loading: boolean;
  readonly error: boolean;
}
