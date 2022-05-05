import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { MdOutlineClose } from 'react-icons/md';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { TypesVehicle } from 'services/api.types';
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
  loadRequest(): void;
  toggleModel(_dataBrand: IBrand, _dataModel: IModel, _vehicleType: TypesVehicle): void;
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
    loadRequest();
  }, [currentVehicleType]);

  useEffect(() => {
    setLocalData([...models]);
    setFilterText('');
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

  if (!(localData.length > 0) && !loading) {
    return <></>;
  }

  return (
    <Container style={{ padding: '12px' }}>
      <header>
        <h2>Modelo</h2>
      </header>

      <Row style={{ padding: '6px' }}>
        {loading && (
          <Col>
            <ReactLoading type={'spin'} color={'blue'} height={'30%'} width={'30%'} />
          </Col>
        )}
        {!loading && (
          <Col style={{ display: 'flex' }}>
            <input
              style={{ flex: '2' }}
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
            <Button
              variant="primary"
              onClick={() => setFilterText('')}
              style={{ marginLeft: '-2px' }}
            >
              <MdOutlineClose size={24} />
            </Button>
          </Col>
        )}
      </Row>
      <Row>
        {localData?.length > 0 &&
          localData.map((model) => {
            return (
              model.name && (
                <Row key={model.code} style={{ marginLeft: '0px', marginBottom: '6px' }}>
                  <Button
                    variant="primary"
                    onClick={() => {
                      toggleModel(selectedBrand, model, currentVehicleType);
                      setFilterText(model.name);
                    }}
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
  models: state.models?.data.models || [],
  loading: state.models?.loading || false,
  selectedBrand: state.brands?.data.selectedBrand || ({} as IBrand),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(modelsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModelList);
