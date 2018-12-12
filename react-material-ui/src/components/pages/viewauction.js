import React, {Component} from 'react'
import {deleteAllBids, deleteBid, getAllBids, viewBid, viewClicks, viewImpressions} from "../../api/restapi";
import ModelAuction from "../../model/auction";
import {connect} from 'react-redux';
import {FaRegTrashAlt} from 'react-icons/fa';

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
        viewImpressions(this.state.bid.bidRequestId)
          .then((data) => {
            this.setState({
              impressions: data
            });
          });
        viewClicks(this.state.bid.bidRequestId)
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
      .then(() => {
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
        <div className={'row'}>
          <div className={'col-md-12'}>
            <h2>Bid {this.state.bid.bidRequestId}</h2>
            <p><a onClick={this.deleteBidRecord.bind(this, this.state.bid.id)}><FaRegTrashAlt/></a></p>
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
          </div>
          <div className={'col-md-12'}>
            <hr/>
          </div>
          <div className={'col-md-3'}>
            <p><strong>Campaign</strong><br/>{this.state.campaigns[this.state.bid.campaign]}</p>
          </div>
          <div className={'col-md-3'}>
            <p><strong>Creative</strong><br/>{this.state.creatives[this.state.bid.creative]}</p>
          </div>
          <div className={'col-md-3'}>
            <p><strong>Request Timestamp</strong><br/>{this.formatDate(this.state.bid.requestTimestamp)}</p>
          </div>
          {this.state.bid.responseTimestamp > 0 &&
          <div className={'col-md-3'}>
            <p><strong>Response
              Milliseconds</strong><br/>
              {this.state.bid.responseTimestamp - this.state.bid.requestTimestamp}
            </p>
          </div>
          }
          <div className={'col-md-12'}>
            <hr/>
          </div>
          <div className={'col-md-12'}>
            <p><strong>Request User Agent</strong><br/>
              <pre><code>{this.state.bid.userAgent}</code></pre>
            </p>
          </div>
          <div className={'col-md-12'}>
            <hr/>
          </div>
          <div className={'col-md-12'}>
            <p><strong>Cookies</strong><br/>
              <pre><code>{this.state.bid.cookies}</code></pre>
            </p>
          </div>
          <div className={'col-md-12'}>
            <hr/>
          </div>
          <div className={'col-md-4'}>
            <p><strong>Host</strong><br/>{this.state.bid.host}</p>
          </div>
          <div className={'col-md-4'}>
            <p><strong>IP</strong><br/>{this.state.bid.ip}</p>
          </div>
          <div className={'col-md-4'}>
            <p><strong>X-Forwarded</strong><br/>{this.state.bid.xForwardedFor}</p>
          </div>
          <div className={'col-md-12'}>
            <hr/>
          </div>
          <div className={'col-md-12'}>
            <p><strong>Markup</strong><br/>
              <pre><code>{this.state.bid.markup}</code></pre>
            </p>
          </div>
          <div className={'col-md-12'}>
            <hr/>
          </div>
          <div className={'col-md-12'}>
            <p><strong>Bid Request</strong><br/>
              <pre><code>{this.state.request}</code></pre>
            </p>
          </div>
          <div className={'col-md-12'}>
            <hr/>
          </div>
          <div className={'col-md-12'}>
            <p><strong>Bid Response</strong><br/>
              <pre><code>{this.state.response}</code></pre>
            </p>
          </div>
          <div className={'col-md-12'}>
            <hr/>
          </div>
          <div className={'col-md-12'}>
            <h4>Impressions</h4>
            {this.state.impressions.map((v) => {
              return (
                <p key={v}>{v.url}<br/>
                  Timestamp: {this.formatDate(v.impressionTimestamp)}<br/>
                  User Agent: {v.userAgent}<br/>
                  Bid Price: {v.bidPrice} - Clearing Price: {v.cp}<br/>
                  Host: {v.host}<br/>
                  IP: {v.ip}
                </p>
              )
            })}
          </div>
          <div className={'col-md-12'}>
            <hr/>
          </div>
          <div className={'col-md-12'}>
            <h4>Events</h4>
            {this.state.clicks.map((v) => {
              return (
                <p key={v}>{v.url}<br/>
                  Timestamp: {this.formatDate(v.clickTimestamp)}<br/>
                  User Agent: {v.userAgent}<br/>
                  Host: {v.host}<br/>
                  IP: {v.ip}
                </p>
              )
            })}
          </div>
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
      <p><a onClick={this.deleteAllBidRecords.bind(this)}><FaRegTrashAlt/> Delete all</a></p>
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
