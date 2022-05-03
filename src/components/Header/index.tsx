import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { VehicleTypes } from 'services/api.types';

// import { Container } from './styles';
import { useVehicle } from './../../context/vehicleContext';

const Header = () => {
  const { currentVehicleType, setCurrentVehicleType } = useVehicle();

  return (
    <header>
      <Row style={{ gap: '5px', margin: '16px' }}>
        <Col>
          {' '}
          <Button
            variant={currentVehicleType === VehicleTypes.cars ? 'success' : 'secondary'}
            onClick={() => setCurrentVehicleType(VehicleTypes.cars)}
          >
            Carros
          </Button>
        </Col>
        <Col>
          <Button
            variant={
              currentVehicleType === VehicleTypes.motorcycles ? 'success' : 'secondary'
            }
            onClick={() => setCurrentVehicleType(VehicleTypes.motorcycles)}
          >
            Motos
          </Button>
        </Col>
        <Col>
          <Button
            variant={currentVehicleType === VehicleTypes.trucks ? 'success' : 'secondary'}
            onClick={() => setCurrentVehicleType(VehicleTypes.trucks)}
          >
            Caminhões
          </Button>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
