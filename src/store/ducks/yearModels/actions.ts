import { TypesVehicle } from 'services/api.types';
import { action } from 'typesafe-actions';

import { IBrand } from '../brands/types';
import { IModel } from '../models/types';
import { IYearModel, YearModelTypes } from './types';

export const loadRequest = () => action(YearModelTypes.LOAD_REQUEST);
export const toggleYearModel = (
  brandData: IBrand,
  modelData: IModel,
  yearModelData: IYearModel,
  vehicleType: TypesVehicle,
) =>
  action(YearModelTypes.TOGGLE_YEARMODEL, {
    brandData,
    modelData,
    yearModelData,
    vehicleType,
  });
export const loadSuccess = (data: IYearModel[]) =>
  action(YearModelTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(YearModelTypes.LOAD_FAILURE);
