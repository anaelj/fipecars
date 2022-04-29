/* eslint-disable no-unused-vars */

export enum BrandTypes {
  LOAD_REQUEST = '@brandTypes/LOAD_REQUEST',
  LOAD_SUCCESS = '@brandTypes/LOAD_SUCCESS',
  LOAD_FAILURE = '@brandTypes/LOAD_FAILURE',
  TOGGLE_BRAND = '@brandTypes/TOGGLE_BRAND',
}

export interface IBrand {
  code: number;
  name: string;
}

export interface IBrandData {
  brands: IBrand[];
  selectedBrand?: IBrand;
}

export interface IBrandsState {
  readonly data: IBrandData;
  readonly loading: boolean;
  readonly error: boolean;
}
