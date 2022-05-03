import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { getModels } from 'services/api';
import { VehicleTypes } from 'services/api.types';
import { IModel } from 'store/ducks/models/types';

import { loadFailure, loadSuccess } from './actions';

export function* loadModels(action: any) {
  const { data: brand } = action.payload;
  console.log(':---->', action.payload);
  try {
    if (brand?.code) {
      const response: AxiosResponse<IModel[]> = yield call(getModels, {
        vehicleType: VehicleTypes.cars,
        codeBrand: brand.code,
      });
      yield put(loadSuccess(response));
    } else {
      yield put(loadSuccess([]));
    }
  } catch (error) {
    yield put(loadFailure());
  }
}
