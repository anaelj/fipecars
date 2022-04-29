import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IBrand } from 'store/ducks/brands/types';
import { IModel } from 'store/ducks/models/types';

import * as modelsActions from '../../store/ducks/models/actions';
import { IApplicationState } from './../../store/index';

interface IStatePros {
  models: IModel[];
  selectedBrand: IBrand;
  selectedModel?: IModel;
}

interface IDispatchProps {
  loadRequest(brand: IBrand): void;
  toggleModel(dataBrand: IBrand, dataModel: IModel): void;
}

interface IOwnProps {}

type Props = IStatePros & IDispatchProps & IOwnProps;

export const ModelList = ({
  models,
  loadRequest,
  toggleModel,
  selectedBrand,
  selectedModel,
}: Props) => {
  useEffect(() => {
    loadRequest(selectedBrand);
  }, []);

  // useEffect(() => {
  //   console.log('-0->', selectedBrand);
  // }, [selectedBrand]);

  // useEffect(() => {
  //   console.log('clg-selectedmodel->', selectedModel);
  // }, [selectedModel]);

  return (
    <div style={{ color: 'black' }}>
      {models?.map((model) => (
        <div key={model.code} style={{ padding: '5px' }}>
          <button onClick={() => toggleModel(selectedBrand, model)}> {model.name}</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: IApplicationState) => ({
  models: state.models.data.models,
  selectedBrand: state.brands.data.selectedBrand,
  selectedModel: state.models.data.selectedModel,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(modelsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModelList);
