import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BrandList from 'components/BrandList';
import ModelList from 'components/ModelList';
import YearModelList from 'components/YearModelList';
import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Provider store={store}>
        <div style={{ display: 'flex' }}>
          <BrandList />
          <ModelList />
          <YearModelList />
        </div>
      </Provider>
    </div>
  );
}

export default App;
