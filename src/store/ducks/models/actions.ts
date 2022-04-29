import { IBrand } from 'store/ducks/brands/types';
import { action } from 'typesafe-actions';

import { IModel, ModelTypes } from './types';

export const loadRequest = () => action(ModelTypes.LOAD_REQUEST);
export const toggleModel = (dataBrand: IBrand, dataModel: IModel) =>
  action(ModelTypes.TOGGLE_MODEL, { dataBrand, dataModel });
export const loadSuccess = (data: IModel[]) => action(ModelTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(ModelTypes.LOAD_FAILURE);
