import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductTypes from '../../ProductTypes';
import PaginationWrap from '../../UI/Pagination';
import ProductList from '../../UI/ProductList';

const Products = ({ products }) => {
  const [filteredItemLength, setFilteredItemLength] = useState(0);
  const { path } = useRouteMatch();
  const [page, setPage] = useState(0);
  const handleSetPage = (pageNum) => setPage(pageNum);

  return (
    <div>
      <ProductTypes handleSetpage={handleSetPage} />
      <Switch>
        <Route exact path={path}>
          <ProductList
            setFilteredItemLength={setFilteredItemLength}
            page={page}
            products={products}
          />
        </Route>
        <Route path={`${path}/:cat`}>
          <ProductList
            setFilteredItemLength={setFilteredItemLength}
            page={page}
            products={products}
          />
        </Route>
      </Switch>
      <PaginationWrap page={page} productcount={filteredItemLength} handleSetpage={handleSetPage} />
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
