import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { getBrands } from 'services/api';
import { IBrand } from 'store/ducks/brands/types';

import { loadFailure, loadSuccess } from './actions';

export function* loadBrands(data: any) {
  try {
    const { data: vehicleType } = data.payload;

    const response: AxiosResponse<IBrand[]> = yield call(getBrands, vehicleType);

    yield put(loadSuccess(response));
  } catch (error) {
    yield put(loadFailure());
  }
}
