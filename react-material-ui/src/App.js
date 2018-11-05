import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './App.css';
import NavBar from './components/navbar';
import Campaign from './components/campaign';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Campaign/>
      </div>
    );
  }
}

export default App;
