import React, { useState, Fragment } from 'react';
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
  Button,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap';

const Header = () => {
  const [state, setState] = useState({
    isOpen: false
  });

  const { isOpen } = state;

  const toggleCollapsable = () => setState({ ...state, isOpen: !isOpen });

  return (
    <Fragment>
      <Navbar className='fixed-top bg-danger' dark expand='md'>
        <Container>
          <NavbarBrand href='/'>
            {' '}
            <i class='fas fa-laptop-code'></i> DevCamper{' '}
          </NavbarBrand>
          <NavbarToggler onClick={toggleCollapsable} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='/auth/login'>
                  <i class='fas fa-sign-in-alt'></i> Login
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href='/auth/register'>
                  <i class='fas fa-user-plus'></i> Register
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className='d-none d-sm-block' href='#!'>
                  |
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href='/bootcamps'>Browse Bootcamps</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
