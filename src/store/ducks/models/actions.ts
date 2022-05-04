import { TypesVehicle } from 'services/api.types';
import { IBrand } from 'store/ducks/brands/types';
import { action } from 'typesafe-actions';

import { IModel, ModelTypes } from './types';

export const loadRequest = () => action(ModelTypes.LOAD_REQUEST);
export const toggleModel = (
  dataBrand: IBrand,
  dataModel: IModel,
  vehicleType: TypesVehicle,
) => action(ModelTypes.TOGGLE_MODEL, { dataBrand, dataModel, vehicleType });
export const loadSuccess = (data: IModel[]) => action(ModelTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(ModelTypes.LOAD_FAILURE);
