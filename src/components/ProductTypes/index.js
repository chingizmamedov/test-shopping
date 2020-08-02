import React from 'react';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink, Link, useRouteMatch } from 'react-router-dom';
import styles from './ProducType.module.scss';
import { selectCat } from '../../Redux/actions';

const ProductTypes = ({ categoriesList }) => {
  const { url } = useRouteMatch();
  return (
    <Nav className={styles.type}>
      <div>
        <Link to={`${url}/all`}>All</Link>
      </div>
      {categoriesList.map((item) => (
        <div key={item}>
          <NavLink activeClassName={styles.active} to={`${url}/${item}`}>
            {item}
          </NavLink>
        </div>
      ))}
    </Nav>
  );
};

const mapStateToProps = ({ productsReducer }) => {
  return {
    categoriesList: productsReducer.categoriesList,
  };
};

const mapDispatchTOProps = (dispatch) => {
  return {
    selectCatDispatch: (cat) => dispatch(selectCat(cat)),
  };
};

export default connect(mapStateToProps, mapDispatchTOProps)(ProductTypes);
