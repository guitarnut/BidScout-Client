import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavigationMenu from './components/ui/navbar';
import Campaign from './components/pages/campaign';
import Creative from './components/pages/creative';
import ViewCampaign from './components/pages/viewcampaign';
import ViewCreative from './components/pages/viewcreative';
import ViewAuction from './components/pages/viewauction';
import LoginForm from './components/pages/login';
import Error from './components/pages/error';
import User from "./components/pages/user";
import ViewBidder from "./components/pages/viewbidder";
import Logout from "./components/pages/logout";

import store from './store/index';

window.store = store;

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <NavigationMenu/>
            <div className="container" id="view">
              <Route path='/' exact component={LoginForm}/>
              <Route path='/login' component={LoginForm}/>
              <Route path='/logout' component={Logout}/>
              <Route path='/error' component={Error}/>
              <Route path='/campaign' exact component={Campaign}/>
              <Route path='/creative' exact component={Creative}/>
              <Route path='/bidder' exact component={ViewBidder}/>
              <Route path='/campaign/view/:id' component={ViewCampaign}/>
              <Route path='/creative/view/:id' component={ViewCreative}/>
              <Route path='/auction/:id' exact component={ViewAuction}/>
              <Route path='/auction' exact component={ViewAuction}/>
              <Route path='/account' component={User}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
