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

window.store = store;

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4">BidScout Builder</h1>
                <p className="lead">Build auction campaigns and creatives.</p>
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
        <section id="footer">
          <div className="container">
            <div className="row text-center text-xs-center text-sm-left text-md-left">
              <div className="col-xs-12 col-sm-4 col-md-4">
                <h5>Quick links</h5>
                <ul className="list-unstyled quick-links">
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Videos</a></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <h5>Quick links</h5>
                <ul className="list-unstyled quick-links">
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Videos</a></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <h5>Quick links</h5>
                <ul className="list-unstyled quick-links">
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                  <li><a href="https://wwwe.sunlimetech.com" title="Design and developed by"><i
                    className="fa fa-angle-double-right"></i>Imprint</a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                <ul className="list-unstyled list-inline social text-center">
                  <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook"></i></a>
                  </li>
                  <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter"></i></a>
                  </li>
                  <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram"></i></a>
                  </li>
                  <li className="list-inline-item"><a href="javascript:void();"><i
                    className="fa fa-google-plus"></i></a></li>
                  <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i
                    className="fa fa-envelope"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                <p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a
                  Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis,
                  MN]
                </p>
                <p className="h6">&copy All right Reversed.<a className="text-green ml-2"
                                                              href="https://www.sunlimetech.com"
                                                              target="_blank">Sunlimetech</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
