import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './App.css';
import NavBar from './components/navbar';
import Campaign from './components/campaign';
import Creative from "./components/creative";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="Content">
          <Campaign/>
          <Creative/>
        </div>
      </div>
    );
  }
}

export default App;
