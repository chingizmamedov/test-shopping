import React from 'react';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, Link, useRouteMatch } from 'react-router-dom';
import styles from './ProducType.module.scss';
import { selectCat } from '../../Redux/actions';

const ProductTypes = ({ categoriesList, handleSetPage }) => {
  const { url } = useRouteMatch();
  return (
    <Nav className={styles.type}>
      <div>
        <Link to={`${url}/all`}>All</Link>
      </div>
      {categoriesList.map((item) => (
        <div key={item}>
          <NavLink
            onClick={() => handleSetPage(0)}
            activeClassName={styles.active}
            to={`${url}/${item}`}
          >
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

ProductTypes.propTypes = {
  categoriesList: PropTypes.array.isRequired,
  handleSetPage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchTOProps)(ProductTypes);
