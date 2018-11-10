import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import Campaign from './components/campaign';
import Creative from './components/creative';
import ViewCampaign from './components/viewcampaign';
import ViewCreative from './components/viewcreative';
import Bid from './components/bid';
import LoginForm from './components/login';

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
                <Route path='/logins' component={LoginForm}/>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
