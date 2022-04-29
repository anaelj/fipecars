/* eslint-disable no-unused-vars */
export enum ModelTypes {
  LOAD_REQUEST = '@ModelTypes/LOAD_REQUEST',
  LOAD_SUCCESS = '@ModelTypes/LOAD_SUCCESS',
  LOAD_FAILURE = '@ModelTypes/LOAD_FAILURE',
  TOGGLE_MODEL = '@ModelTypes/TOGGLE_MODEL',
}

export interface IModel {
  code: number;
  name: string;
}

export interface IModelData {
  models: IModel[];
  selectedModel?: IModel;
}

export interface IModelsState {
  readonly data: IModelData;
  readonly loading: boolean;
  readonly error: boolean;
}
