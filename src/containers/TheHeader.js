import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const TheHeader = () => {
  const logout = () => {
    localStorage.removeItem('auth');
    window.location.reload();
  };
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className='site-header'>
      <Container>
        <div className='header-main'>
          <div className='site-logo'>
            <Link to='/'>
              <img
                src='assets/images/kikeroo-logo.png'
                alt='site-logo'
                className='d-xl-block d-none'
              />
            </Link>
          </div>
          <Navbar bg='dark' variant='dark' expand='lg'>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto'>
                <NavLink
                  activeClassName='active'
                  className='nav-link'
                  to='/dashboard'
                >
                  Search
                </NavLink>
                <NavLink
                  exact
                  activeClassName='active'
                  className='nav-link'
                  to='/dashboard'
                >
                  About Us
                </NavLink>
                <NavLink
                  exact
                  activeClassName='active'
                  className='nav-link'
                  to='/'
                >
                  Support
                </NavLink>
                <NavLink
                  exact
                  activeClassName='active'
                  className='nav-link'
                  to='/'
                >
                  Register a company
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className='header-right d-flex'>
            {isAuthenticated ? (
              <Link to='#' onClick={logout}>
                Logout
              </Link>
            ) : (
              <>
                <NavLink
                  exact
                  activeClassName='active'
                  className='nav-link'
                  to='/sign-up'
                >
                  Sign up
                </NavLink>
                <NavLink
                  exact
                  activeClassName='active'
                  className='nav-link pr-0'
                  to='/login'
                >
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default TheHeader;
