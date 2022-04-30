import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IBrand } from 'store/ducks/brands/types';
import { IModel } from 'store/ducks/models/types';
import { IYearModel } from 'store/ducks/yearModels/types';

import * as yearModelsActions from '../../store/ducks/yearModels/actions';
import { IApplicationState } from './../../store/index';
interface IStatePros {
  yearModels: IYearModel[];
  selectedBrand: IBrand;
  selectedModel: IModel;
  selectedyearModel?: IYearModel;
  loading: boolean;
  state: any;
}

interface IDispatchProps {
  loadRequest(brand: IBrand): void;
  toggleYearModel(yearModel: IYearModel): void;
}

interface IOwnProps {}

type Props = IStatePros & IDispatchProps & IOwnProps;

export const yearModelList = ({
  yearModels,
  loadRequest,
  toggleYearModel,
  selectedBrand,
  loading,
  selectedyearModel,
  state,
}: Props) => {
  const [localData, setLocalData] = useState([...yearModels]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    loadRequest(selectedBrand);
  }, []);

  useEffect(() => {
    console.log('state-year->', state);
  }, [state]);

  useEffect(() => {
    loadRequest(selectedBrand);
  }, []);

  useEffect(() => {
    setLocalData([...yearModels]);
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
  return (
    <Container style={{ margin: '2px' }}>
      <Row>
        {loading && (
          <ReactLoading type={'spin'} color={'blue'} height={'20%'} width={'20%'} />
        )}
        <input
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </Row>
      <Row>
        {localData?.length > 0 &&
          localData.map((yearModel) => {
            return (
              yearModel.name && (
                <Row key={yearModel.code} style={{ padding: '2px' }}>
                  <Button variant="primary" onClick={() => toggleYearModel(yearModel)}>
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
  yearModels: state.yearModels.data.yearModels,
  selectedBrand: state.selectedBrand,
  selectedModel: state.selectedModel,
  selectedYearModel: state.yearModels.data.selectedYearModel,
  loading: state.yearModels.loading,
  state: state,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(yearModelsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(yearModelList);
