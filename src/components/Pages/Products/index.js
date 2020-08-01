import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductTypes from '../../ProductTypes';
import PaginationWrap from '../../UI/Pagination';
import ProductList from '../../UI/ProductList';
import Sidebar from '../../Sidebar';

const Products = ({ products }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [position, setPosition] = useState('absolute');
  const myRef = useRef();
  const [filteredItemLength, setFilteredItemLength] = useState(0);
  const { path } = useRouteMatch();
  const [page, setPage] = useState(0);
  const handleSetPage = (pageNum) => setPage(pageNum);

  const handleSetMinPrice = (e) => {
    setMinPrice(e.target.value);
    handleSetPage(0);
  };
  const handleSetMaxPrive = (e) => {
    setMaxPrice(e.target.value);
    handleSetPage(0);
  };

  useEffect(() => {
    function stickySidebar() {
      const { top } = myRef.current.getBoundingClientRect();
      if (top <= 0) {
        setPosition('fixed');
      } else {
        setPosition('absolute');
      }
    }
    window.addEventListener('scroll', stickySidebar);
    return () => {
      window.removeEventListener('scroll', stickySidebar);
    };
  }, []);
  return (
    <div className="d-flex flex-column">
      <ProductTypes handleSetpage={handleSetPage} />
      <div ref={myRef} className="d-flex position-relative">
        <Sidebar
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={handleSetMinPrice}
          setMaxPrice={handleSetMaxPrive}
          position={position}
        />
        <div className="d-flex flex-column w-100">
          <Switch>
            <Route exact path={path}></Route>
            <Route path={`${path}/:cat`}>
              <ProductList
                setFilteredItemLength={setFilteredItemLength}
                page={page}
                products={products}
                minPrice={minPrice}
                maxPrice={maxPrice}
                a={'iki'}
              />
            </Route>
          </Switch>
          <PaginationWrap
            page={page}
            productcount={filteredItemLength}
            handleSetpage={handleSetPage}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ productsReducer }) => {
  return {
    products: productsReducer.allProducts,
    selectedCat: productsReducer.selectedCat,
  };
};

export default connect(mapStateToProps)(Products);
