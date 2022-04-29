import { Reducer } from 'redux';

// import { IModel } from 'store/ducks/Models/types';
import { IModelsState, ModelTypes } from './types';

const INITIAL_STATE: IModelsState = {
  data: { models: [{ code: 1, name: 'teste' }] },
  error: false,
  loading: false,
};

const reducer: Reducer<IModelsState> = (state = INITIAL_STATE, action) => {
  // console.log(':::', action);

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

    case ModelTypes.TOGGLE_MODEL:
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          models: state.data.models,
        },
      };

    default:
      return state;
  }
};

export default reducer;
