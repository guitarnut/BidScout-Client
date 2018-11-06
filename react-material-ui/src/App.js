import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './App.css';
import NavBar from './components/navbar';
import Campaign from './components/campaign';
import Creative from "./components/creative";
import ViewCampaign from "./components/viewcampaign";
import ViewCreative from "./components/viewcreative";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="Content">
          <ViewCampaign/>
          <ViewCreative/>
        </div>
      </div>
    );
  }
}

export default App;
