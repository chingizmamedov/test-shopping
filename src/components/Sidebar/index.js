import React from 'react';
import styles from './Sidebar.module.scss';
import MinMaxFilter from '../UI/MinMaxFilter';
import ProductTypes from '../ProductTypes';

const Sidebar = ({ maxPrice, minPrice, setMinPrice, setMaxPrice }) => {
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

      <ProductTypes />
    </div>
  );
};

export default Sidebar;
