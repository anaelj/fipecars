import { Reducer } from 'redux';
import { IVehicle, IVehicleState, VehicleActionTypes } from 'store/ducks/vehicle/types';

import { BrandTypes } from '../brands/types';
import { ModelTypes } from '../models/types';
import { YearModelTypes } from '../yearModels/types';

const INITIAL_STATE: IVehicleState = {
  data: { vehicle: {} as IVehicle },
  error: false,
  loading: false,
};

const reducer: Reducer<IVehicleState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VehicleActionTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case VehicleActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: { vehicle: action.payload.data },
      };
    case BrandTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {},
      };
    case BrandTypes.TOGGLE_BRAND:
      return {
        ...state,
        data: {},
      };
    case YearModelTypes.TOGGLE_YEARMODEL:
      return {
        ...state,
        loading: true,
        data: {},
      };

    case VehicleActionTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: { vehicle: {} as IVehicle } };

    default:
      return state;
  }
};

export default reducer;
