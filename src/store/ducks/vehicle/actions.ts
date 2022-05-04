import { action } from 'typesafe-actions';

import { IVehicle, VehicleActionTypes } from './types';

export const loadRequest = () => action(VehicleActionTypes.LOAD_REQUEST);
export const loadSuccess = (data: IVehicle) =>
  action(VehicleActionTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(VehicleActionTypes.LOAD_FAILURE);
