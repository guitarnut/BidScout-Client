import React, {Component} from 'react'
import {viewBid, viewClicks, viewImpressions, viewBidErrors} from "../../api/restapi";
import {handleInputChange} from "../../input/formInputHandler";
import TextBox from '../ui/textfield';
import UIButton from '../ui/button';
import ModelAuction from "../../model/auction";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class _ViewAuction extends Component {

  state = {
    id: null,
    searchId: null,
    bid: ModelAuction,
    impressions: [],
    clicks: [],
    campaigns: {},
    creatives: {},
    errors: []
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
    this.setState({
      campaigns: this.props.campaigns,
      creatives: this.props.creatives
    });
    if (this.state.id !== null) {
      this.getBid();
    }
  }

  handleClick() {
    if (this.state.searchId !== undefined) {
      this.props.history.push('/auction/' + this.state.searchId);
    }
  };

  getBid() {
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
          <p><strong>Targeting Failures</strong></p>
          {this.state.bid.targetingFailures.length > 0 ?
            <ul>
              {Object.keys(this.state.bid.targetingFailures).map((v) => {
                return (
                  <li key={v}>{v}: {this.state.bid.targetingFailures[v]}</li>
                )
              })}
            </ul>
            : <p>No targeting failures found.</p>
          }
          <p><strong>Bid Request Errors</strong></p>
          {this.state.bid.bidRequestErrors.length > 0 ?
            <ul>
              {Object.keys(this.state.bid.bidRequestErrors).map((v) => {
                return (
                  <li key={v}>{this.state.bid.bidRequestErrors[v]}</li>
                )
              })}
            </ul>
            : <p>No bid request errors found.</p>
          }
          <p><strong>Campaign</strong><br/>{this.state.campaigns[this.state.bid.campaign]}</p>
          <p><strong>Creative</strong><br/>{this.state.creatives[this.state.bid.creative]}</p>
          <p><strong>Request User Agent</strong><br/>{this.state.bid.userAgent}</p>
          <p><strong>Response Timestamp</strong><br/>{this.state.bid.responseTimestamp}</p>
          <p><strong>Impression Timestamp</strong><br/>{this.state.bid.impressionTimestamp}</p>
          <p><strong>Cookies</strong><br/>{this.state.bid.cookies}</p>
          <p><strong>Host</strong><br/>{this.state.bid.host}</p>
          <p><strong>IP</strong><br/>{this.state.bid.ip}</p>
          <p><strong>X-Forwarded</strong><br/>{this.state.bid.xForwardedFor}</p>
          <p><strong>Markup</strong><br/>{this.state.bid.markup}</p>
          <p><strong>Bid Request</strong><br/>{this.state.request}</p>
          <p><strong>Bid Response</strong><br/>{this.state.response}</p>
          <h3>Impressions</h3>
          {this.state.impressions.map((v) => {
            return (
              <p key={v}>{v.url}<br/>
                Timestamp: {v.impressionTimestamp}<br/>
                User Agent: {v.userAgent}<br/>
                Bid Price: {v.bidPrice} - Clearing Price: {v.cp}<br/>
                Host: {v.host}<br/>
                IP: {v.ip}
              </p>
            )
          })}
          <h3>Clicks</h3>
          {this.state.clicks.map((v) => {
            return (
              <p key={v}>{v.url}<br/>
                Timestamp: {v.clickTimestamp}<br/>
                User Agent: {v.userAgent}<br/>
                Host: {v.host}<br/>
                IP: {v.ip}
              </p>
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
    if (this.state.id) {
      return (
        this.renderBid()
      )
    } else {
      return (
        <div>
          <h1>Lookup Auction Record</h1>
          <p>View end-to-end auction results using your Bid Request ID as the lookup key. 5a5511f8d43af74f4e0a4757</p>
          <TextBox name="searchId" label="Bid Id" handler={this.handleInputChange.bind(this)}/>
          <UIButton text="Search" action={this.handleClick.bind(this)} icon="search"/>

        </div>
      )
    }

  }
}

const ViewAuction = connect(
  state => ({
    campaigns: state.campaigns,
    creatives: state.creatives
  })
)(_ViewAuction);

export default ViewAuction;
