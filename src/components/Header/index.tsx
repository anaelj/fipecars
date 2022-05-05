import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { TypesVehicle } from 'services/api.types';

// import { Container } from './styles';
import { useVehicle } from './../../context/vehicleContext';

const Header = () => {
  const { currentVehicleType, setCurrentVehicleType } = useVehicle();

  return (
    <header>
      <Row style={{ gap: '5px', margin: '16px' }}>
        <Card
          bg="primary"
          className="mb-2"
          text="white"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '110px',
            minWidth: '350px',
          }}
        >
          <Button
            variant={currentVehicleType === TypesVehicle.cars ? 'success' : 'secondary'}
            onClick={() => setCurrentVehicleType(TypesVehicle.cars)}
            style={{ width: '200px', margin: '16px' }}
          >
            Carros
          </Button>
          <Button
            variant={
              currentVehicleType === TypesVehicle.motorcycles ? 'success' : 'secondary'
            }
            onClick={() => setCurrentVehicleType(TypesVehicle.motorcycles)}
            style={{ width: '200px', margin: '16px' }}
          >
            Motos
          </Button>
          <Button
            variant={currentVehicleType === TypesVehicle.trucks ? 'success' : 'secondary'}
            onClick={() => setCurrentVehicleType(TypesVehicle.trucks)}
            style={{ width: '200px', margin: '16px' }}
          >
            Caminhões
          </Button>
        </Card>
        {/* <Col xl={4} md={4} sm={2}>
          <Button
            variant={currentVehicleType === TypesVehicle.cars ? 'success' : 'secondary'}
            onClick={() => setCurrentVehicleType(TypesVehicle.cars)}
          >
            Carros
          </Button>
        </Col>
        <Col xl={2} md={2} sm={2}>
          <Button
            variant={
              currentVehicleType === TypesVehicle.motorcycles ? 'success' : 'secondary'
            }
            onClick={() => setCurrentVehicleType(TypesVehicle.motorcycles)}
          >
            Motos
          </Button>
        </Col>
        <Col xl={3} md={3} sm={2}>
          <Button
            variant={currentVehicleType === TypesVehicle.trucks ? 'success' : 'secondary'}
            onClick={() => setCurrentVehicleType(TypesVehicle.trucks)}
          >
            Caminhões
          </Button>
        </Col> */}
      </Row>
    </header>
  );
};

export default Header;
