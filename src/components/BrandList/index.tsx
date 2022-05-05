import { useVehicle } from 'context/vehicleContext';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { MdOutlineClose } from 'react-icons/md';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { TypesVehicle } from 'services/api.types';
import { IBrand } from 'store/ducks/brands/types';

import * as BrandsActions from '../../store/ducks/brands/actions';
import { IApplicationState } from './../../store/index';
interface IStatePros {
  brands: IBrand[];
  loading: boolean;
}

interface IDispatchProps {
  loadRequest(_vehicleType: TypesVehicle): void;
  toggleBrand(_brand: IBrand, _vehicleType: TypesVehicle): void;
}

interface IOwnProps {}

type Props = IStatePros & IDispatchProps & IOwnProps;

export const BrandList = ({ brands, loadRequest, toggleBrand, loading }: Props) => {
  const [localData, setLocalData] = useState([...brands]);
  const [filterText, setFilterText] = useState('');
  const { currentVehicleType } = useVehicle();

  useEffect(() => {
    loadRequest(currentVehicleType);
  }, [currentVehicleType]);

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
    <Container style={{ padding: '12px' }}>
      <header>
        <h2>Marca</h2>
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
        {localData.map((brand) => (
          <Row key={brand.code} style={{ margin: '2px' }}>
            <Button
              variant="primary"
              onClick={() => {
                setFilterText(brand.name);
                toggleBrand(brand, currentVehicleType);
              }}
            >
              {brand.name}
            </Button>
          </Row>
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state: IApplicationState) => ({
  brands: state.brands?.data.brands || [],
  loading: state.brands?.loading || false,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(BrandsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BrandList);
