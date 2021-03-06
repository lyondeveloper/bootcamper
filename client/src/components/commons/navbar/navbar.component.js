import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
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
  DropdownMenu
} from 'reactstrap';

import { selectCurrentUser } from '../../../redux/users/users.selectors';
import { logoutUserStart } from '../../../redux/users/users.actions';
import { createStructuredSelector } from 'reselect';

import { deleteDataOnLogout } from '../../../utils/functions';

const Header = ({ currentUser, logoutUser, history }) => {
  const [state, setState] = useState({
    isOpen: false,
    isOpenDropdown: false
  });

  const { isOpen, isOpenDropdown } = state;

  const toggleCollapsable = () => setState({ ...state, isOpen: !isOpen });

  const toggleDropdown = () =>
    setState({ ...state, isOpenDropdown: !isOpenDropdown });

  const logout = () => {
    logoutUser(history);

    deleteDataOnLogout(['userSession', 'jwtToken']);
  };

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
                        to='/account/manage-account'
                      >
                        <i className='fas fa-user'></i> Manage Account
                      </NavLink>
                    </DropdownItem>

                    <DropdownItem divider />
                    <DropdownItem>
                      <NavLink
                        tag={Link}
                        className='text-dark'
                        to='/account/manage-bootcamp'
                      >
                        Manage Bootcamp
                      </NavLink>
                    </DropdownItem>

                    <DropdownItem>
                      <NavLink
                        tag={Link}
                        className='text-dark'
                        to='/account/manage-reviews'
                      >
                        Manage Reviews
                      </NavLink>
                    </DropdownItem>

                    <DropdownItem divider />

                    <DropdownItem onClick={logout}>
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
  logoutUser: history => dispatch(logoutUserStart(history))
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
