import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IBrand } from 'store/ducks/brands/types';

import * as BrandsActions from '../../store/ducks/brands/actions';
import { IApplicationState } from './../../store/index';
interface IStatePros {
  brands: IBrand[];
  selectedBrand?: IBrand;
  loading: boolean;
}

interface IDispatchProps {
  loadRequest(): void;
  toggleBrand(brand: IBrand): void;
}

interface IOwnProps {}

type Props = IStatePros & IDispatchProps & IOwnProps;

export const BrandList = ({ brands, loadRequest, toggleBrand, loading }: Props) => {
  const [localData, setLocalData] = useState([...brands]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    loadRequest();
  }, []);

  useEffect(() => {
    setLocalData([...brands]);
  }, [brands]);

  useEffect(() => {
    if (filterText === '') {
      setLocalData([...brands]);
    } else {
      setLocalData(
        brands.filter((brand) =>
          brand.name.toUpperCase().includes(filterText.toUpperCase()),
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
        {localData.map((brand) => (
          <Row key={brand.code} style={{ margin: '2px' }}>
            <Button variant="primary" onClick={() => toggleBrand(brand)}>
              {brand.name}
            </Button>
          </Row>
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state: IApplicationState) => ({
  brands: state.brands.data.brands,
  loading: state.brands.loading,
  selectedBrand: state.brands.data.selectedBrand,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(BrandsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BrandList);
