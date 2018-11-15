import React from 'react'
import {connect} from 'react-redux';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

const navigate = ()=> {
  console.log(1);
  return <Redirect to='/'/>
}

const _NavBar = ({loggedIn, username}) =>
  <Navbar collapseOnSelect fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        BidScout
      </Navbar.Brand>
      <Navbar.Toggle/>
    </Navbar.Header>
    {loggedIn ? (
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/campaign">
          Campaign
        </NavItem>
        <NavItem eventKey={2} href="/creative">
          Creative
        </NavItem>
        <NavItem eventKey={3} href="/bidder">
          Bidder
        </NavItem>
        <NavItem eventKey={4} href="/auction">
          Auctions
        </NavItem>
        <NavItem eventKey={5} href="/account">
          Account
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={6} href="/logout">
          Logout {username}
        </NavItem>
      </Nav>
    </Navbar.Collapse>
      ) : (
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={7} href="/login">
            Login
          </NavItem>
        </Nav>
      </Navbar.Collapse>
      )}
  </Navbar>;

const NavigationMenu = connect(
  state => ({
    loggedIn: state.login.loggedIn,
    username: state.login.username
  })
)(_NavBar);

export default NavigationMenu;

