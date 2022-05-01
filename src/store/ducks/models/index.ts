import { Reducer } from 'redux';

import { BrandTypes } from '../brands/types';
import { IModelsState, ModelTypes } from './types';

const INITIAL_STATE: IModelsState = {
  data: { models: [] },
  error: false,
  loading: false,
};

const reducer: Reducer<IModelsState> = (state = INITIAL_STATE, action) => {
  // console.log(':::', action);
  // console.log('reducer models:----------------------', action, state);
  switch (action.type) {
    case ModelTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ModelTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: { models: action.payload.data },
      };
    case ModelTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: { models: [] } };

    case BrandTypes.TOGGLE_BRAND:
      return {
        ...state,
        loading: true,
      };

    case ModelTypes.TOGGLE_MODEL:
      return {
        ...state,
        data: {
          models: state.data.models,
          selectedModel: action.payload.data,
        },
      };

    default:
      return state;
  }
};

export default reducer;
