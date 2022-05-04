import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BrandList from 'components/BrandList';
import Header from 'components/Header';
import ModelList from 'components/ModelList';
import Vehicle from 'components/Vehicle';
import YearModelList from 'components/YearModelList';
import { VehicleContextPrivider } from 'context/vehicleContext';
import { Col, Container, Row } from 'react-bootstrap';
import { Provider } from 'react-redux';

import store from './store';

function App() {
  return (
    <div className="App">
      <VehicleContextPrivider>
        <Provider store={store}>
          <Header />
          <Container>
            <Row>
              <Col xl={3} md={3} sm={12}>
                <BrandList />
              </Col>
              <Col xl={3} md={3} sm={12}>
                <ModelList />
              </Col>
              <Col xl={3} md={3} sm={12}>
                <YearModelList />
              </Col>
              <Col xl={3} md={3} sm={12}>
                <Vehicle />
              </Col>
            </Row>
          </Container>
        </Provider>
      </VehicleContextPrivider>
    </div>
  );
}

export default App;
