import React, {Component} from 'react'
import {viewBid} from "../api/restapi";
import {handleInputChange} from "../input/formInputHandler";
import TextBox from './textfield';
import UIButton from './button';

class Bid extends Component {

  state = {
    id: null,
    bid: null
  };

  constructor() {
    super();
  }

  getBid = () => {
    viewBid(this.state.id)
      .then((data)=>{
        console.log(data);
        this.setState({
          bid: data
        })
      })
  };

  handleInputChange(event) {
    handleInputChange(event, this);
  }

  render() {
    return (
      <div>
        <p>5a5511f8d43af74f4e0a4757</p>
        <TextBox name="id" label="Bid" handler={this.handleInputChange.bind(this)}/>
        <UIButton action={this.getBid.bind(this)}/>
        {this.state.bid !== null ? (
          <div>
            <h1>Bid {this.state.bid.id}</h1>
            <p><strong>Request User Agent</strong><br/>{this.state.bid.userAgent}</p>
            <p><strong>Response Timestamp</strong><br/>{this.state.bid.responseTimestamp}</p>
            <p><strong>Impression Timestamp</strong><br/>{this.state.bid.impressionTimestamp}</p>
            <p><strong>Cookies</strong><br/>{this.state.bid.cookies}</p>
            <p><strong>Host</strong><br/>{this.state.bid.host}</p>
            <p><strong>X-Forwarded</strong><br/>{this.state.bid.xForwardedFor}</p>
          </div>
        ) : <p>No bid found</p>}
      </div>
    )
  }
}

export default Bid;
