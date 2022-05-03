import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BrandList from 'components/BrandList';
import Header from 'components/Header';
import ModelList from 'components/ModelList';
import YearModelList from 'components/YearModelList';
import { VehicleContextPrivider } from 'context/vehicleContext';
import { Provider } from 'react-redux';

import store from './store';

function App() {
  return (
    <div className="App">
      <VehicleContextPrivider>
        <Provider store={store}>
          <Header />
          <div style={{ display: 'flex' }}>
            <BrandList />
            <ModelList />
            <YearModelList />
          </div>
        </Provider>
      </VehicleContextPrivider>
    </div>
  );
}

export default App;
