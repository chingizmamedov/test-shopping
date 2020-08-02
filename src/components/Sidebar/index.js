import React from 'react';
import styles from './Sidebar.module.scss';
import MinMaxFilter from '../UI/MinMaxFilter';
import PropTypes from 'prop-types';
import ProductTypes from '../ProductTypes';

const Sidebar = ({ maxPrice, minPrice, setMinPrice, setMaxPrice, handleSetPage }) => {
  return (
    <div className={styles.sidebar}>
      <div className="price-filter d-flex flex-column">
        <MinMaxFilter
          maxPrice={maxPrice}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />
      </div>

      <ProductTypes handleSetPage={handleSetPage} />
    </div>
  );
};

Sidebar.propTypes = {
  maxPrice: PropTypes.number.isRequired,
  minPrice: PropTypes.number.isRequired,
  setMinPrice: PropTypes.func.isRequired,
  setMaxPrice: PropTypes.func.isRequired,
};

export default Sidebar;
