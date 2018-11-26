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
import ViewErrors from './components/pages/viewerrors';
import Error from './components/pages/error';
import User from "./components/pages/user";
import ViewBidder from "./components/pages/viewbidder";
import Logout from "./components/pages/logout";

import store from './store/index';
import XML from "./components/pages/xml";

window.store = store;

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <img src="/img/logo.png" style={{width: 50 + '%', height: 50 + '%'}}/>
              </div>
              <NavigationMenu/>
            </div>
            <div className="container" id="view">
              <Route path='/' exact component={LoginForm}/>
              <Route path='/login' component={LoginForm}/>
              <Route path='/logout' component={Logout}/>
              <Route path='/error' component={Error}/>
              <Route path='/campaign' exact component={Campaign}/>
              <Route path='/creative' exact component={Creative}/>
              <Route path='/xml' exact component={XML}/>
              <Route path='/campaign/edit/:id' exact component={Campaign}/>
              <Route path='/creative/edit/:id' exact component={Creative}/>
              <Route path='/bidder' exact component={ViewBidder}/>
              <Route path='/campaign/view/:id' component={ViewCampaign}/>
              <Route path='/creative/view/:id' component={ViewCreative}/>
              <Route path='/auction/:id' exact component={ViewAuction}/>
              <Route path='/auction' exact component={ViewAuction}/>
              <Route path='/biderrors' exact component={ViewErrors}/>
              <Route path='/account' component={User}/>
            </div>
          </div>
        </Router>
        <hr/>
        <section id="footer">
          <div className="container">
            <div className="row text-center text-xs-center text-sm-left text-md-left">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <h5>Quick links</h5>
                <ul className="list-unstyled quick-links">
                  <li><a href="#"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right"></i>Pricing</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right"></i>Tutorial</a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                <p>Auction Scout is a GNut LLC. Property</p>
                <p className="h6">&copy; All right Reversed. >GNut LLC</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
