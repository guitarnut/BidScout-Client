import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import Campaign from './components/campaign';
import Creative from './components/creative';
import ViewCampaign from './components/viewcampaign';
import ViewCreative from './components/viewcreative';
import Bid from './components/bid';
import LoginForm from './components/login';
import Error from './components/error';
import User from "./components/user";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <NavBar/>
            <div className='Content'>
              <div>
                <Route path='/' exact component={Campaign}/>
                <Route path='/creative' exact component={Creative}/>
                <Route path='/campaign/view' component={ViewCampaign}/>
                <Route path='/creative/view' component={ViewCreative}/>
                <Route path='/bid/view' component={Bid}/>
                <Route path='/account' component={User}/>
                <Route path='/logins' component={LoginForm}/>
                <Route path='/error' component={Error}/>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
