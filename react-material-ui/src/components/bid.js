import React, {Component} from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import TextBox from './textfield';

class Bid extends Component {

  state = {
    bid: []
  };

  constructor() {
    super();
    this.getBid(this)
  }

  getBid = (t) => {
    axios.get('http://localhost:8080/api/bid/5a5511f8d43af74f4e0a4757')
      .then(function (response) {
        t.setState({bid: response.data});
      })
      .catch(function (error) {
        console.log("Error occurred while fetching bid");
        console.error(error)
      });
  };

  render() {
    return (
      <div>
        {this.state.bid ? (
          <div>
            <h1>Bid {this.state.bid.id}</h1>
            <p><strong>Request User Agent</strong><br/>{this.state.bid.userAgent}</p>
            <p><strong>Response Timestamp</strong><br/>{this.state.bid.responseTimestamp}</p>
            <p><strong>Impression Timestamp</strong><br/>{this.state.bid.impressionTimestamp}</p>
            <p><strong>Cookies</strong><br/>{this.state.bid.cookies}</p>
            <p><strong>Host</strong><br/>{this.state.bid.host}</p>
            <p><strong>X-Forwarded</strong><br/>{this.state.bid.xForwardedFor}</p>
          </div>
          ) : "No bid found"}
      </div>
    )
  }
}

export default Bid;
