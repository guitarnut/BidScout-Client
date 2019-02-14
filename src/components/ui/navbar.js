import React from 'react'
import {connect} from 'react-redux';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {authorized} from "../../api/restapi";

const _NavBar = ({user, loggedIn}) =>
  <Navbar collapseOnSelect fixedTop inverse>
    <Navbar.Header>
      <Navbar.Brand>
        Admin
      </Navbar.Brand>
      <Navbar.Toggle/>
    </Navbar.Header>
    {loggedIn ? (
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/bidder">
            Bidder
          </NavItem>
          <NavItem eventKey={2} href="/auction">
            Auctions
          </NavItem>
          <NavItem eventKey={5} href="/vast">
            VAST Tag Requests
          </NavItem>
          <NavItem eventKey={3} href="/account">
            Account
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={4} href="/logout">
            Logout {user.firstName}
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    ) : (
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={4} href="/login">
            Login
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    )}
  </Navbar>;

const NavigationMenu = connect(
  state => ({
    user: state.user,
    loggedIn: authorized()
  })
)(_NavBar);

export default NavigationMenu;

