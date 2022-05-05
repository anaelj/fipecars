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
              <Col
                xl={3}
                md={4}
                sm={12}
                style={{ minWidth: '300px', padding: '0px', margin: '0px' }}
              >
                <BrandList />
              </Col>
              <Col
                xl={3}
                md={4}
                sm={12}
                style={{ minWidth: '300px', padding: '0px', margin: '0px' }}
              >
                <ModelList />
              </Col>
              <Col
                xl={3}
                md={4}
                sm={12}
                style={{ minWidth: '300px', padding: '0px', margin: '0px' }}
              >
                <YearModelList />
              </Col>
              <Col
                xl={3}
                md={4}
                sm={12}
                style={{ minWidth: '300px', padding: '0px', margin: '0px' }}
              >
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
