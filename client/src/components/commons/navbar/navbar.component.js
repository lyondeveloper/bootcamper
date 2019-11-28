import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  Container,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Button
} from 'reactstrap';

import { selectCurrentUser } from '../../../redux/users/users.selectors';
import { logoutUser } from '../../../redux/users/users.actions';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, logoutUser }) => {
  const [state, setState] = useState({
    isOpen: false,
    isOpenDropdown: false
  });

  const { isOpen, isOpenDropdown } = state;

  const toggleCollapsable = () => setState({ ...state, isOpen: !isOpen });

  const toggleDropdown = () =>
    setState({ ...state, isOpenDropdown: !isOpenDropdown });

  return (
    <Navbar className='fixed-top bg-danger' dark expand='md'>
      <Container>
        <NavLink tag={Link} to='/'>
          <NavbarBrand href='/'>
            {' '}
            <i className='fas fa-laptop-code'></i> DevCamper{' '}
          </NavbarBrand>
        </NavLink>
        <NavbarToggler onClick={toggleCollapsable} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            {Object.keys(currentUser).length > 0 ? (
              <Fragment>
                <Dropdown isOpen={isOpenDropdown} toggle={toggleDropdown}>
                  <NavItem>
                    <DropdownToggle
                      tag='a'
                      className='nav-link'
                      caret
                      style={{ cursor: 'pointer' }}
                    >
                      {' '}
                      <i className='fas fa-user' /> {currentUser.name}
                    </DropdownToggle>
                  </NavItem>

                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink
                        tag={Link}
                        className='text-dark'
                        to='/account/manage-bootcamps'
                      >
                        <i className='fas fa-user'></i> Account
                      </NavLink>
                    </DropdownItem>

                    {/* <DropdownItem divider />
                    <DropdownItem>
                      <NavLink
                        tag={Link}
                        className='text-dark'
                        to='/account/manage-reviews'
                      >
                        Manage Bootcamps
                      </NavLink>
                    </DropdownItem>

                    <DropdownItem>
                      <NavLink
                        tag={Link}
                        className='text-dark'
                        to='/account/manage-bootcamps'
                      >
                        Manage Reviews
                      </NavLink>
                    </DropdownItem> */}

                    <DropdownItem divider />

                    <DropdownItem onClick={logoutUser}>
                      <i className='fas fa-sign-out-alt' /> Logout
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Fragment>
            ) : (
              <Fragment>
                <NavItem>
                  <NavLink tag={Link} to='/auth/login'>
                    <i className='fas fa-sign-in-alt'></i> Login
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={Link} to='/auth/register'>
                    <i className='fas fa-sign-in-alt'></i> Register
                  </NavLink>
                </NavItem>
              </Fragment>
            )}
            <NavItem>
              <NavLink className='d-none d-sm-block' href='#!'>
                |
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/bootcamps'>
                Browse Bootcamps
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
