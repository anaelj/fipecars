import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { VehicleTypes } from 'services/api.types';
import { IBrand } from 'store/ducks/brands/types';
import { IModel } from 'store/ducks/models/types';

import * as modelsActions from '../../store/ducks/models/actions';
import { useVehicle } from './../../context/vehicleContext';
import { IApplicationState } from './../../store/index';

interface IStatePros {
  models: IModel[];
  selectedBrand: IBrand;
  loading: boolean;
}

interface IDispatchProps {
  loadRequest(brand: IBrand, vehicleType: VehicleTypes): void;
  toggleModel(dataBrand: IBrand, dataModel: IModel): void;
}

interface IOwnProps {}

type Props = IStatePros & IDispatchProps & IOwnProps;

export const ModelList = ({
  models,
  loadRequest,
  toggleModel,
  selectedBrand,
  loading,
}: Props) => {
  const [localData, setLocalData] = useState([...models]);
  const [filterText, setFilterText] = useState('');
  const { currentVehicleType } = useVehicle();

  useEffect(() => {
    loadRequest(selectedBrand, currentVehicleType);
  }, [currentVehicleType]);

  useEffect(() => {
    setLocalData([...models]);
  }, [models]);

  useEffect(() => {
    if (filterText === '') {
      setLocalData([...models]);
    } else {
      setLocalData(
        models.filter((model) =>
          model.name.toUpperCase().includes(filterText.toUpperCase()),
        ),
      );
    }
  }, [filterText]);

  return (
    <Container style={{ margin: '2px' }}>
      <Row>
        {loading && (
          <ReactLoading type={'spin'} color={'blue'} height={'20%'} width={'20%'} />
        )}
      </Row>
      <Row>
        {models.length > 0 && (
          <input
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
        )}
      </Row>
      <Row style={{ color: 'black' }}>
        {localData?.length > 0 &&
          localData.map((model) => {
            return (
              model.name && (
                <Row key={model.code} style={{ padding: '2px' }}>
                  <Button
                    variant="primary"
                    onClick={() => toggleModel(selectedBrand, model)}
                  >
                    {model.name}
                  </Button>
                </Row>
              )
            );
          })}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state: IApplicationState) => ({
  models: state.models.data.models,
  loading: state.models.loading,
  selectedBrand: state.brands.data.selectedBrand,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(modelsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModelList);
