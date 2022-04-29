import React, { useEffect } from 'react';
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
  selectedyearModel,
}: Props) => {
  useEffect(() => {
    loadRequest(selectedBrand);
  }, []);

  // useEffect(() => {
  //   console.log('clg-selectedyearModel->', selectedyearModel);
  // }, [selectedyearModel]);

  return (
    <div style={{ color: 'black' }}>
      {yearModels?.map((yearModel) => (
        <div key={yearModel.code} style={{ padding: '5px' }}>
          <button onClick={() => toggleYearModel(yearModel)}> {yearModel.name}</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: IApplicationState) => ({
  yearModels: state.yearModels.data.yearModels,
  selectedBrand: state.selectedBrand,
  selectedModel: state.selectedModel,
  selectedYearModel: state.yearModels.data.selectedYearModel,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(yearModelsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(yearModelList);
