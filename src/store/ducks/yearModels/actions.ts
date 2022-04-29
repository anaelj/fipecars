import { action } from 'typesafe-actions';

import { IYearModel, YearModelTypes } from './types';

export const loadRequest = () => action(YearModelTypes.LOAD_REQUEST);
export const toggleYearModel = (data: IYearModel) =>
  action(YearModelTypes.TOGGLE_YEARMODEL, { data });
export const loadSuccess = (data: IYearModel[]) =>
  action(YearModelTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(YearModelTypes.LOAD_FAILURE);
