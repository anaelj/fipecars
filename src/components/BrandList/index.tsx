import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IBrand } from 'store/ducks/brands/types';

import * as BrandsActions from '../../store/ducks/brands/actions';
import { IApplicationState } from './../../store/index';

interface IStatePros {
  brands: IBrand[];
  selectedBrand?: IBrand;
}

interface IDispatchProps {
  loadRequest(): void;
  toggleBrand(brand: IBrand): void;
}

interface IOwnProps {}

type Props = IStatePros & IDispatchProps & IOwnProps;

export const BrandList = ({ brands, loadRequest, toggleBrand, selectedBrand }: Props) => {
  useEffect(() => {
    loadRequest();
  }, []);

  // useEffect(() => {
  //   console.log('brandlist->', selectedBrand);
  // }, [selectedBrand]);

  // console.log(brands);

  return (
    <div style={{ color: 'black' }}>
      {brands.map((brand) => (
        <div key={brand.code} style={{ padding: '5px' }}>
          <button onClick={() => toggleBrand(brand)}> {brand.name}</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: IApplicationState) => ({
  brands: state.brands.data.brands,
  selectedBrand: state.brands.data.selectedBrand,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(BrandsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BrandList);
