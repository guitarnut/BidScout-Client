import React from 'react'
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

const _NavBar = ({loggedIn, username}) =>
  <div>
    <AppBar position="static" color="default">
      {loggedIn ? (
        <Toolbar>
          <Typography variant="title" color="inherit">
            BidScout v1.0
          </Typography>
          <Link to="/campaign"><Button>Campaign</Button></Link>
          <Link to="/creative"><Button>Creative</Button></Link>
          <Link to="/view"><Button>Bidder</Button></Link>
          <Link to="/bid/view"><Button>Auction</Button></Link>
          <Link to="/account"><Button>Account {username}</Button></Link>
          <Link to="/logout"><Button>Logout</Button></Link>
        </Toolbar>
      ) : (
        <Toolbar>
          <Typography variant="title" color="inherit">
            BidScout v1.0
          </Typography>
        </Toolbar>
      )}
    </AppBar>
  </div>;

const NavBar = connect(
  state => ({
    loggedIn: state.login.loggedIn,
    username: state.login.username
  })
)(_NavBar);

export default NavBar;
