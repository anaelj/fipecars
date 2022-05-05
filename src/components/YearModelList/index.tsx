import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { MdOutlineClose } from 'react-icons/md';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { TypesVehicle } from 'services/api.types';
import { IBrand } from 'store/ducks/brands/types';
import { IModel } from 'store/ducks/models/types';
import { IYearModel } from 'store/ducks/yearModels/types';

import * as yearModelsActions from '../../store/ducks/yearModels/actions';
import { useVehicle } from './../../context/vehicleContext';
import { IApplicationState } from './../../store/index';
interface IStatePros {
  yearModels: IYearModel[];
  selectedBrand: IBrand;
  selectedModel: IModel;
  loading: boolean;
}

interface IDispatchProps {
  loadRequest(): void;
  toggleYearModel(
    _brand: IBrand,
    _model: IModel,
    _yearModel: IYearModel,
    _vehicleType: TypesVehicle,
  ): void;
}

interface IOwnProps {}

type Props = IStatePros & IDispatchProps & IOwnProps;

export const YearModelList = ({
  yearModels,
  loadRequest,
  toggleYearModel,
  loading,
  selectedBrand,
  selectedModel,
}: Props) => {
  const [localData, setLocalData] = useState([...yearModels]);
  const [filterText, setFilterText] = useState('');

  const { currentVehicleType } = useVehicle();

  useEffect(() => {
    loadRequest();
  }, [currentVehicleType]);

  useEffect(() => {
    setLocalData([...yearModels]);
    setFilterText('');
  }, [yearModels]);

  useEffect(() => {
    if (filterText === '') {
      setLocalData([...yearModels]);
    } else {
      setLocalData(
        yearModels.filter((model) =>
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
        <h2>Ano</h2>
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
          localData.map((yearModel) => {
            return (
              yearModel.name && (
                <Row
                  key={yearModel.code}
                  style={{ marginLeft: '0px', marginBottom: '6px' }}
                >
                  <Button
                    variant="primary"
                    onClick={() => {
                      toggleYearModel(
                        selectedBrand,
                        selectedModel,
                        yearModel,
                        currentVehicleType,
                      );
                      setFilterText(yearModel.name);
                    }}
                  >
                    {yearModel.name}
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
  yearModels: state.yearModels?.data.yearModels || [],
  selectedBrand: state.brands?.data.selectedBrand || ({} as IBrand),
  selectedModel: state.models?.data.selectedModel || ({} as IModel),
  loading: state.yearModels?.loading || false,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(yearModelsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(YearModelList);
