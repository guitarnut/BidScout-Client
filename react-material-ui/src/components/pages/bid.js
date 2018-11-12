import React, {Component} from 'react'
import {viewBid} from "../../api/restapi";
import {handleInputChange} from "../../input/formInputHandler";
import TextBox from '../ui/textfield';
import UIButton from '../ui/button';

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

  renderBid() {
    if(this.state.bid !== null && this.state.bid.id !== undefined) {
      return (
        <div>
          <h1>Bid {this.state.bid.id}</h1>
          <p><strong>Request User Agent</strong><br/>{this.state.bid.userAgent}</p>
          <p><strong>Response Timestamp</strong><br/>{this.state.bid.responseTimestamp}</p>
          <p><strong>Impression Timestamp</strong><br/>{this.state.bid.impressionTimestamp}</p>
          <p><strong>Cookies</strong><br/>{this.state.bid.cookies}</p>
          <p><strong>Host</strong><br/>{this.state.bid.host}</p>
          <p><strong>X-Forwarded</strong><br/>{this.state.bid.xForwardedFor}</p>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>Lookup Auction Record</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed turpis sit amet purus aliquam tempor.
          Etiam cursus, erat at sagittis semper, dui lectus lacinia nisl, eu imperdiet nisi arcu vitae lectus. Mauris
          rutrum urna eu justo cursus porta. Sed viverra sodales tincidunt. Sed felis mi, semper eget arcu quis,
          vestibulum commodo erat. Vivamus ut nibh fringilla, pulvinar dolor quis, rhoncus est. Vivamus nec semper nisi.
          Nulla sit amet laoreet est. Vivamus nec tincidunt orci. Ut ex leo, aliquet faucibus maximus sed, varius eu
          neque. Ut placerat est mauris. 5a5511f8d43af74f4e0a4757</p>
        <TextBox name="id" label="Bid Id" handler={this.handleInputChange.bind(this)}/>
        <UIButton text="Search" action={this.getBid.bind(this)} icon="search"/>
        {this.renderBid()}
      </div>
    )
  }
}

export default Bid;
