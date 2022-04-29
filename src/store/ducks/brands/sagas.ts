import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { getBrands } from 'services/api';
import { vehicleTypes } from 'services/api.types';
import { IBrand } from 'store/ducks/brands/types';

import { loadFailure, loadSuccess } from './actions';

export function* loadBrands() {
  try {
    const response: AxiosResponse<IBrand[]> = yield call(getBrands, vehicleTypes.cars);

    yield put(loadSuccess(response));
  } catch (error) {
    yield put(loadFailure());
  }
}
