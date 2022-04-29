import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { getYearModels } from 'services/api';
import { vehicleTypes } from 'services/api.types';
import { IYearModel } from 'store/ducks/yearModels/types';

import { loadFailure, loadSuccess } from './actions';

export function* loadYearModels(action: any) {
  const { dataBrand: brand, dataModel: model } = action.payload;

  try {
    if (brand) {
      const response: AxiosResponse<IYearModel[]> = yield call(getYearModels, {
        carType: vehicleTypes.cars,
        codeBrand: brand.code,
        codeModel: model.code,
      });
      yield put(loadSuccess(response));
    } else {
      return;
    }
  } catch (error) {
    yield put(loadFailure());
  }
}
