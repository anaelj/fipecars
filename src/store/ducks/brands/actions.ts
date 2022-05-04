import { TypesVehicle } from 'services/api.types';
import { action } from 'typesafe-actions';

import { BrandTypes, IBrand } from './types';

export const loadRequest = (data: any) => action(BrandTypes.LOAD_REQUEST, { data });
export const toggleBrand = (data: IBrand, vehicleType: TypesVehicle) =>
  action(BrandTypes.TOGGLE_BRAND, { data, vehicleType });
export const loadSuccess = (data: IBrand[]) => action(BrandTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(BrandTypes.LOAD_FAILURE);
