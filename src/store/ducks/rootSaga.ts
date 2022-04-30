import { all, takeLatest } from 'redux-saga/effects';

import { loadBrands } from './brands/sagas';
import { BrandTypes } from './brands/types';
import { loadModels } from './models/sagas';
import { ModelTypes } from './models/types';
import { loadYearModels } from './yearModels/sagas';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export default function* rootSaga() {
  const response: ResponseGenerator = yield all([
    takeLatest(BrandTypes.LOAD_REQUEST, loadBrands),
    takeLatest(BrandTypes.TOGGLE_BRAND, loadModels),
    takeLatest(ModelTypes.TOGGLE_MODEL, loadYearModels),
    // takeLatest(BrandTypes.LOAD_SUCCESS, loadModels),
    // takeLatest(ModelTypes.LOAD_SUCCESS, loadYearModels),
  ]);
  return response;
}
