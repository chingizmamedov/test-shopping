import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Badge, Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { CSSTransition } from 'react-transition-group';
import Logout from '../../images/logout.svg';
import Store from '../../images/local_grocery_store_24px_rounded.svg';
import styles from './Header.module.scss';
import SidebarBusket from '../SidebarBusket';

const Header = ({ buyProduct }) => {
  const [cookie, , removeCookie] = useCookies(['token']);
  const [isShowMiniList, setIsShowMiniList] = useState(false);
  const handleSignOut = () => {
    removeCookie('token');
    window.location.reload();
  };
  const [state, setState] = useState([]);
  const handleShowMiniList = () => (state[0] !== 0 ? setIsShowMiniList(!isShowMiniList) : null);

  useEffect(() => {
    let count = 0;
    let allCost = 0;
    buyProduct.forEach((item) => {
      count += parseInt(item.count);
      allCost += parseInt(item.count) * parseInt(item.amount);
    });
    setState([count, allCost]);
  }, [buyProduct, cookie]);

  return (
    <div className={styles.header}>
      <Navbar className="p-0 pl-3 pr-3" collapseOnSelect expand="lg" bg="light" variant="light">
        <Link to="/">
          <div className={styles.logo} href="#home">
            ShopAz
          </div>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex ml-auto align-items-center">
            <span className={`position-relative ${styles.nav_item}`}>
              <img src={Store} alt="store" onMouseEnter={handleShowMiniList} />
              {state[0] > 0 && (
                <Badge
                  style={{
                    borderRadius: '50%',
                    fontSize: '10px',
                    position: 'absolute',
                    bottom: '10px',
                    right: '4px',
                  }}
                  variant="success"
                >
                  {state[0]}
                </Badge>
              )}

              <CSSTransition
                unmountOnExit
                in={isShowMiniList && state[0] > 0}
                timeout={400}
                classNames="my-node"
              >
                <SidebarBusket handleShowMiniList={handleShowMiniList} />
              </CSSTransition>
            </span>
            {cookie.token ? (
              <span className={styles.nav_item} onClick={handleSignOut}>
                <img src={Logout} alt="logout" />
              </span>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = ({ busketReducer }) => ({
  buyProduct: busketReducer.buyProducts,
});

Header.propTypes = {
  buyProduct: PropTypes.array,
};

export default connect(mapStateToProps)(Header);
