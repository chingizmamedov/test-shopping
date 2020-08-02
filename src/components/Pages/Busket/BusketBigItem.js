import React from 'react';
import { connect } from 'react-redux';
import styles from '../../SidebarBusket/SidebarBusket.module.scss';
import {
  addProductToBusket,
  deleteProductFromBusket,
  getFromStock,
  receiveToStok,
} from '../../../Redux/actions';

const BusketBigItem = ({ src, name, count, amount }) => {
  return (
    <div
      className={`d-flex align-items-start position-relative mb-2 pl-2 pr-2 pt-4 pb-4 w-100 ${styles.item}`}
    >
      <img className={styles.image} src={src} alt="product" />
      <div className="d-flex flex-column align-items-start justify-content-start flex-grow-1 flex-shrink-1  pt-2">
        <b>
          <p>{name}</p>
        </b>
        <div className="d-flex flex-column">
          <div className="d-flex flex-column align-items-start justify-content-center">
            <div className="mt-3">Cost: {count * amount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ productsReducer }) => {
  return {
    allProducts: productsReducer.allProducts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteProductFromBusket(item)),
  receiveItem: (item) => dispatch(receiveToStok(item)),
  addProductToBusketDispatch: (product) => dispatch(addProductToBusket(product)),
  getFromStockDisPatch: (product) => dispatch(getFromStock(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BusketBigItem);
