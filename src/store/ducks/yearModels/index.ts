import { Reducer } from 'redux';

import { BrandTypes } from '../brands/types';
import { ModelTypes } from '../models/types';
// import { IYearModel } from 'store/ducks/YearModels/types';
import { IYearModelsState, YearModelTypes } from './types';

const INITIAL_STATE: IYearModelsState = {
  data: { yearModels: [] },
  error: false,
  loading: false,
};

const reducer: Reducer<IYearModelsState> = (state = INITIAL_STATE, action) => {
  // console.log('------IYearModelsState----------', action);

  switch (action.type) {
    case YearModelTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case YearModelTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: { yearModels: action.payload.data },
      };
    case BrandTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {},
      };
    case YearModelTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: { yearModels: [] } };

    case ModelTypes.TOGGLE_MODEL:
      return {
        ...state,
        loading: true,
      };

    case YearModelTypes.TOGGLE_YEARMODEL:
      return {
        ...state,
        data: {
          yearModels: state.data.yearModels,
          selectedYearModel: action.payload.yearModelData,
        },
      };
    case BrandTypes.TOGGLE_BRAND:
      return {
        ...state,
        data: {},
      };

    default:
      return state;
  }
};

export default reducer;
