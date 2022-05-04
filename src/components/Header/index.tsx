import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { TypesVehicle } from 'services/api.types';

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
            variant={currentVehicleType === TypesVehicle.cars ? 'success' : 'secondary'}
            onClick={() => setCurrentVehicleType(TypesVehicle.cars)}
          >
            Carros
          </Button>
        </Col>
        <Col>
          <Button
            variant={
              currentVehicleType === TypesVehicle.motorcycles ? 'success' : 'secondary'
            }
            onClick={() => setCurrentVehicleType(TypesVehicle.motorcycles)}
          >
            Motos
          </Button>
        </Col>
        <Col>
          <Button
            variant={currentVehicleType === TypesVehicle.trucks ? 'success' : 'secondary'}
            onClick={() => setCurrentVehicleType(TypesVehicle.trucks)}
          >
            Caminhões
          </Button>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
