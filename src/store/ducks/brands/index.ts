import { Reducer } from 'redux';

// import { IBrand } from 'store/ducks/brands/types';
import { BrandTypes, IBrandsState } from './types';

const INITIAL_STATE: IBrandsState = {
  data: { brands: [] },
  error: false,
  loading: false,
};

const reducer: Reducer<IBrandsState> = (state = INITIAL_STATE, action) => {
  console.log('reducer brands:----------------------', action, state);
  switch (action.type) {
    case BrandTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case BrandTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: { brands: action.payload.data },
      };
    case BrandTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: { brands: [] } };

    case BrandTypes.TOGGLE_BRAND:
      return {
        ...state,
        data: {
          brands: state.data.brands,
          selectedBrand: action.payload.data,
          yearModels: null,
        },
      };

    default:
      return state;
  }
};

export default reducer;
