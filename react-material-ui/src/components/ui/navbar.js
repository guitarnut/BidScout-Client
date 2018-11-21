import React from 'react'
import {connect} from 'react-redux';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

const navigate = () => {
  return <Redirect to='/'/>
};

const _NavBar = ({user, loggedIn}) =>
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
          <NavItem eventKey={5} href="/biderrors">
            Bid Errors
          </NavItem>
          <NavItem eventKey={6} href="/account">
            Account
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={7} href="/logout">
            Logout {user.firstName}
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    ) : (
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={8} href="/login">
            Login
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    )}
  </Navbar>;

const NavigationMenu = connect(
  state => ({
    user: state.user,
    loggedIn: state.loggedIn
  })
)(_NavBar);

export default NavigationMenu;

