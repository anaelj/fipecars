import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { getFipeInfo } from 'services/api';

import { loadFailure, loadSuccess } from './actions';
import { IVehicle } from './types';

export function* loadVehicle(action: any) {
  const {
    brandData: brand,
    modelData: model,
    yearModelData: yearModel,
    vehicleType,
  } = action.payload;

  try {
    // console.log('======>', action);
    if (brand?.code && model?.code && yearModel?.code) {
      const response: AxiosResponse<IVehicle> = yield call(getFipeInfo, {
        vehicleType: vehicleType,
        codeBrand: brand.code,
        codeModel: model.code,
        codeYearModel: yearModel.code,
      });
      yield put(loadSuccess(response));
    } else {
      yield put(loadSuccess({} as IVehicle));
    }
  } catch (error) {
    yield put(loadFailure());
  }
}
