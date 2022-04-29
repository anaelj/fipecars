import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { IBrand } from 'store/ducks/brands/types';

import { IBrandsState } from './ducks/brands/types';
import { IModel, IModelsState } from './ducks/models/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import { IYearModelsState } from './ducks/yearModels/types';

export interface IApplicationState {
  brands: IBrandsState;
  models: IModelsState;
  yearModels: IYearModelsState;
  selectedBrand: IBrand;
  selectedModel: IModel;
}
const sagaMiddleware = createSagaMiddleware();

const store: Store<IApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
