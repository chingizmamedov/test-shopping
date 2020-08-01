import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import styles from './Header.module.scss';

const Header = () => {
  const [cookie, , removeCookie] = useCookies(['token']);

  const handleSignOut = () => {
    removeCookie('token');
  };

  return (
    <div className="header">
      <Navbar className="p-0 pl-3 pr-3" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
          <div className={styles.logo} href="#home">
            ShopItto
          </div>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              activeClassName={styles.nav_item_active}
              className={` ${styles.nav_item}`}
              to="/man"
            >
              Man
            </NavLink>
          </Nav>
          <Nav>
            {cookie.token ? (
              <span className={styles.nav_item} onClick={handleSignOut}>
                Logout
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

export default Header;
