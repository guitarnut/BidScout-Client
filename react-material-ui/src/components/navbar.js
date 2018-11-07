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
          <Button><Link to="/">Build Campaign</Link></Button>
          <Button><Link to="/creative">Build Creative</Link></Button>
          <Button><Link to="/campaign/view">View Campaign</Link></Button>
          <Button><Link to="/creative/view">View Creative</Link></Button>
          <Button><Link to="/bid/view/">View Bid</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default NavBar;
