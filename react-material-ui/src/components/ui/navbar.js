import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            BidScout v1.0
          </Typography>
          <Link to="/campaign"><Button>Campaign</Button></Link>
          <Link to="/creative"><Button>Creative</Button></Link>
          <Link to="/view"><Button>Bidder</Button></Link>
          <Link to="/bid/view"><Button>Auction</Button></Link>
          <Link to="/account"><Button>Account</Button></Link>
          <Link to="/logins"><Button>Login</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default NavBar;
