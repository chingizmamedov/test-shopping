import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PaginationWrap from '../../UI/Pagination';
import ProductList from '../../UI/ProductList';
import Sidebar from '../../Sidebar';

const Products = ({ products }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
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

  return (
    <div className="d-flex flex-column">
      {/*<ProductTypes handleSetpage={handleSetPage} />*/}
      <div className="d-flex position-relative">
        <Sidebar
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={handleSetMinPrice}
          setMaxPrice={handleSetMaxPrive}
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
