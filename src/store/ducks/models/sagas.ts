import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { getModels } from 'services/api';
import { vehicleTypes } from 'services/api.types';
import { IModel } from 'store/ducks/models/types';

import { loadFailure, loadSuccess } from './actions';

export function* loadModels(action: any) {
  const { data: brand } = action.payload;

  try {
    if (brand) {
      const response: AxiosResponse<IModel[]> = yield call(getModels, {
        carType: vehicleTypes.cars,
        brandCode: brand.code,
      });
      // console.log('-...-', response);
      yield put(loadSuccess(response));
    } else {
      return;
    }
  } catch (error) {
    yield put(loadFailure());
  }
}
