import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { getYearModels } from 'services/api';
import { IYearModel } from 'store/ducks/yearModels/types';

import { loadFailure, loadSuccess } from './actions';

export function* loadYearModels(action: any) {
  const { dataBrand: brand, dataModel: model, vehicleType } = action.payload;

  try {
    if (brand?.code && model?.code) {
      const response: AxiosResponse<IYearModel[]> = yield call(getYearModels, {
        vehicleType: vehicleType,
        codeBrand: brand.code,
        codeModel: model.code,
      });
      yield put(loadSuccess(response));
    } else {
      yield put(loadSuccess([]));
    }
  } catch (error) {
    yield put(loadFailure());
  }
}
