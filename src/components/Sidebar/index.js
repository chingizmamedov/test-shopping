import React from 'react';
import styles from './Sidebar.module.scss';
import MinMaxFilter from '../UI/MinMaxFilter';

const Sidebar = ({ position, maxPrice, minPrice, setMinPrice, setMaxPrice }) => {
  return (
    <div
      className={styles.sidebar}
      style={{
        position,
      }}
    >
      <div className="price-filter d-flex flex-column">
        <MinMaxFilter
          maxPrice={maxPrice}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />
      </div>
    </div>
  );
};

export default Sidebar;
