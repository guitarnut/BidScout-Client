import React, {Component} from 'react'
import {deleteAllBids, deleteBid, getAllBids, viewBid, viewClicks, viewImpressions} from "../../api/restapi";
import ModelAuction from "../../model/auction";
import {connect} from 'react-redux';

class _ViewAuction extends Component {

  state = {
    id: null,
    searchId: null,
    bid: ModelAuction,
    bids: {},
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
    } else {
      getAllBids()
        .then((data) => {
          this.setState({
            bids: data
          })
        });
    }
  }

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

  deleteBidRecord(id) {
    deleteBid(id);
    getAllBids()
      .then((data) => {
        this.setState({
          bids: data
        });
        this.props.history.push('/auction')
      });
  }

  deleteAllBidRecords() {
    deleteAllBids()
      .then(()=>{
        this.setState({
          bids: {}
        });
      });
  }

  formatDate(v) {
    if (v === 0) {
      return 'Not available';
    }
    return new Date(v).toLocaleDateString() + ' ' + new Date(v).toLocaleTimeString();
  }

  renderBid() {
    if (this.state.bid.id !== undefined) {
      return (
        <div>
          <h2>Bid {this.state.bid.bidRequestId}</h2>
          <p><a onClick={this.deleteBidRecord.bind(this, this.state.bid.id)}>Delete</a></p>
          <p><strong>Targeting Failures</strong></p>
          {this.state.bid.targetingFailures && this.state.bid.targetingFailures.length > 0 ?
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
          {this.state.bid.bidRequestErrors && this.state.bid.bidRequestErrors.length > 0 ?
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
          <p><strong>Request Timestamp</strong><br/>{this.formatDate(this.state.bid.requestTimestamp)}</p>
          <p><strong>Response Timestamp</strong><br/>{this.formatDate(this.state.bid.responseTimestamp)}</p>
          <p><strong>Impression Timestamp</strong><br/>{this.formatDate(this.state.bid.impressionTimestamp)}</p>
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
        <h2>Bid {this.state.id} Not Found</h2>
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
          <h2>Auction Records</h2>
          <p>View end-to-end auction results.</p>
          <p><a onClick={this.deleteAllBidRecords.bind(this)}>Delete all</a></p>
          {Object.keys(this.state.bids).map((v) => {
            return (
              <p><a href={'/auction/' + v}>{this.state.bids[v]}</a></p>
            )
          })}
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
