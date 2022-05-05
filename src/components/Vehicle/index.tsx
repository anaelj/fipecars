import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { TypesVehicle } from 'services/api.types';
import { IBrand } from 'store/ducks/brands/types';
import { IModel } from 'store/ducks/models/types';
import { IVehicle } from 'store/ducks/vehicle/types';
import { IYearModel } from 'store/ducks/yearModels/types';

import * as yearModelsActions from '../../store/ducks/yearModels/actions';
import { useVehicle } from './../../context/vehicleContext';
import { IApplicationState } from './../../store/index';

interface IStatePros {
  vehicle: IVehicle;
  loading: boolean;
}

interface IDispatchProps {
  loadRequest(): void;
}

interface IOwnProps {}

type Props = IStatePros & IDispatchProps & IOwnProps;

export const Vehicle = ({ vehicle, loading }: Props) => {
  if (!vehicle.model && !loading) {
    return <></>;
  }

  return (
    <Container style={{ padding: '12px' }}>
      <header>
        <h2>Veículo</h2>
      </header>

      <Row style={{ padding: '6px' }}>
        <Col>
          {loading && (
            <ReactLoading type={'spin'} color={'blue'} height={'20%'} width={'20%'} />
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {vehicle.model && (
            <Card bg="primary" className="mb-2" text="white">
              <Card.Header>{`${vehicle.model} - ${vehicle.modelYear}`}</Card.Header>
              <Card.Body>
                <Card.Title>Preço: {vehicle.price}</Card.Title>
                <Card.Text>Combustível: {vehicle.fuel}</Card.Text>
                <Card.Text>Referência: {vehicle.referenceMonth}</Card.Text>
                <Card.Text>Código Fipe: {vehicle.codeFipe}</Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state: IApplicationState) => ({
  vehicle: state.vehicle.data.vehicle || {},
  loading: state.vehicle?.loading || false,
  // state,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(yearModelsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);
