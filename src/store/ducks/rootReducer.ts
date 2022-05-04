import { combineReducers } from 'redux';

import brands from './brands';
import models from './models';
import vehicle from './vehicle';
import yearModels from './yearModels';

export default combineReducers({
  brands,
  models,
  yearModels,
  vehicle,
});
