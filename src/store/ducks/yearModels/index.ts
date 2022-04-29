import { Reducer } from 'redux';

// import { IYearModel } from 'store/ducks/YearModels/types';
import { IYearModelsState, YearModelTypes } from './types';

const INITIAL_STATE: IYearModelsState = {
  data: { yearModels: [{ code: 1, name: 'teste year model' }] },
  error: false,
  loading: false,
};

const reducer: Reducer<IYearModelsState> = (state = INITIAL_STATE, action) => {
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
    case YearModelTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: { yearModels: [] } };

    case YearModelTypes.TOGGLE_YEARMODEL:
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          yearModels: state.data.yearModels,
          selectedYearModel: action.payload.data,
        },
      };

    default:
      return state;
  }
};

export default reducer;
