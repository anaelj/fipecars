import { combineReducers } from 'redux';

import brands from './brands';
import models from './models';
import yearModels from './yearModels';

export default combineReducers({
  brands,
  models,
  yearModels,
});
