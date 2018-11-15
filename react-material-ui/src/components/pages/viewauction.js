import React, {Component} from 'react'
import {viewBid, viewClicks, viewImpressions} from "../../api/restapi";
import {handleInputChange} from "../../input/formInputHandler";
import TextBox from '../ui/textfield';
import UIButton from '../ui/button';
import ModelAuction from "../../model/auction";

class ViewAuction extends Component {

  state = {
    id: null,
    bid: ModelAuction,
    impressions: [],
    clicks: []
  };

  constructor() {
    super();
  }

  componentWillMount() {
    const {id} = this.props.match.params;
    if (id !== undefined) {
      this.setState({
        id: id
      })
    }
  }

  componentDidMount() {
    if (this.state.id !== null) {
      this.getBid();
    }
  }

  getBid = () => {
    viewBid(this.state.id)
      .then((data) => {
        this.setState({
          bid: data,
          request: JSON.stringify(data.bidRequest),
          response: JSON.stringify(data.bidResponse)
        });
        viewImpressions(this.state.id)
          .then((data) => {
            this.setState({
              impressions: data
            });
          });
        viewClicks(this.state.id)
          .then((data) => {
            this.setState({
              clicks: data
            });
          })
      })
  };

  handleInputChange(event) {
    handleInputChange(event, this);
  }

  renderBid() {
    if (this.state.bid.id !== undefined) {
      return (
        <div>
          <h3>Bid {this.state.bid.bidRequestId}</h3>
          <p><strong>Campaign</strong><br/>{this.state.bid.campaign}</p>
          <p><strong>Creative</strong><br/>{this.state.bid.creative}</p>
          <p><strong>Request User Agent</strong><br/>{this.state.bid.userAgent}</p>
          <p><strong>Response Timestamp</strong><br/>{this.state.bid.responseTimestamp}</p>
          <p><strong>Impression Timestamp</strong><br/>{this.state.bid.impressionTimestamp}</p>
          <p><strong>Cookies</strong><br/>{this.state.bid.cookies}</p>
          <p><strong>Host</strong><br/>{this.state.bid.host}</p>
          <p><strong>X-Forwarded</strong><br/>{this.state.bid.xForwardedFor}</p>
          <p><strong>Markup</strong><br/>{this.state.bid.markup}</p>
          <p><strong>Bid Request</strong><br/>{this.state.request}</p>
          <p><strong>Bid Response</strong><br/>{this.state.response}</p>
          <h3>Impressions</h3>
          {this.state.impressions.map((v) => {
            return (
              <p>{v.url}<br/>
                Timestamp: {v.impressionTimestamp}<br/>
                User Agent: {v.userAgent}<br/>
                Bid Price: {v.bidPrice} - Clearing Price: {v.cp}<br/>
                Host: {v.host}<br/>
              </p>
            )
          })}
          <h3>Clicks</h3>
          {this.state.clicks.map((v) => {
            return (
              <p>{v.url}<br/>
                Timestamp: {v.clickTimestamp}<br/>
                User Agent: {v.userAgent}<br/>
                Host: {v.host}<br/></p>
            )
          })}
        </div>
      )
    } else {
      return (
        <h3>Bid {this.state.id} Not Found</h3>
      )
    }
  }

  render() {
    if(this.state.id) {
      return(
        this.renderBid()
      )
    } else {
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

        </div>
      )
    }

  }
}

export default ViewAuction;
