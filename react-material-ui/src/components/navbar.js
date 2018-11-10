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
          <Link to="/"><Button>Build Campaign</Button></Link>
          <Link to="/creative"><Button>Build Creative</Button></Link>
          <Link to="/campaign/view"><Button>View Campaign</Button></Link>
          <Link to="/creative/view"><Button>View Creative</Button></Link>
          <Link to="/bid/view"><Button>View Bid</Button></Link>
          <Link to="/logins"><Button color="inherit">Login</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default NavBar;
