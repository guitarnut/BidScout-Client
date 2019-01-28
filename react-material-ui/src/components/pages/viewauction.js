import React, {Component} from 'react'
import {
  authorized,
  deleteAllBids,
  deleteBid,
  getAllBids,
  viewBid,
  viewClicks,
  viewImpressions
} from "../../api/restapi";
import ModelAuction from "../../model/auction";
import {connect} from 'react-redux';
import {FaRegTrashAlt} from 'react-icons/fa';
import {Badge, Label, Panel} from 'react-bootstrap';
import '../../App.css';

const padding = {
  marginRight: '5px'
};

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
    if (!authorized()) {
      this.props.history.push('/login')
    }
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
    return new Date(v).toString();
  }

  renderBid() {
    if (this.state.bid.id !== undefined) {
      return (
        <div className={'container'}>
          <div className={'col-md-12'}>
            <h2>Bid Id: {this.state.bid.bidRequestId}</h2>
            <p><a onClick={this.deleteBidRecord.bind(this, this.state.bid.id)}><FaRegTrashAlt/></a></p>
          </div>
          <div className={'col-md-12'}>
            <p><strong>Request Timestamp</strong><br/>{this.formatDate(this.state.bid.requestTimestamp)}</p>
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
            <p><strong>Targeting Failures</strong></p>
            {this.state.bid.targetingFailures && Object.keys(this.state.bid.targetingFailures).length > 0 ?
              <h4>
                {Object.keys(this.state.bid.targetingFailures).map((v) => {
                  return (
                    <Label bsStyle='warning' key={v}>{v}: {this.state.bid.targetingFailures[v]}</Label>
                  )
                })}
              </h4>
              : <p>No targeting failures found.</p>
            }
            <p><strong>Errors/Warnings</strong></p>
            {this.state.bid.bidRequestErrors && this.state.bid.bidRequestErrors.length > 0 ?
              <h4>
                {Object.keys(this.state.bid.bidRequestErrors).map((v) => {
                  return (
                    <Label style={padding} bsStyle='warning' key={v}>{this.state.bid.bidRequestErrors[v]}</Label>
                  )
                })}
              </h4>
              : <p>No bid request errors found.</p>
            }
          </div>
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
          </div>
          {this.state.impressions.map((v) => {
            return (
              <div key={v}>
                <div className={'col-md-12'}>
                  <p><strong>URL:</strong><br/>
                    <pre><code>{v.url}</code></pre>
                  </p>
                </div>
                <div className={'col-md-12'}>
                  <p><strong>User Agent:</strong><br/>
                    <pre><code>{v.userAgent}</code></pre>
                  </p>
                </div>
                <div className={'col-md-3'}>
                  <p><Badge>${v.bidPrice}</Badge> <strong>Bid Price</strong></p>
                </div>
                <div className={'col-md-3'}>
                  <p><strong><Badge>${v.cp}</Badge> Clearing Price</strong></p>
                </div>
                <div className={'col-md-3'}>
                  <p><strong>Host:</strong> {v.host}</p>
                </div>
                <div className={'col-md-3'}>
                  <p><strong>IP:</strong> {v.ip}</p>
                </div>
                <div className={'col-md-12'}>
                  <p><strong>Timestamp:</strong> {this.formatDate(v.impressionTimestamp)}</p>
                </div>
              </div>
            )
          })}
          <div className={'col-md-12'}>
            <hr/>
          </div>
          <div className={'col-md-12'}>
            <h4>Events</h4>
          </div>
          {this.state.clicks.map((v) => {
            return (
              <div key={v}>
                <div className={'col-md-12'}>
                  <p><strong>URL:</strong><br/>
                    <pre><code>{v.url}</code></pre>
                  </p>
                </div>
                <div className={'col-md-3'}>
                  <p><strong>User Agent:</strong><br/>
                    <pre><code>{v.userAgent}</code></pre>
                  </p>
                </div>
                <div className={'col-md-3'}>
                  <p><strong>Timestamp:</strong> {this.formatDate(v.impressionTimestamp)}</p>
                </div>
                <div className={'col-md-3'}>
                  <p><strong>Host:</strong> {v.host}</p>
                </div>
                <div className={'col-md-3'}>
                  <p><strong>IP:</strong> {v.ip}</p>
                </div>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <div className={'col-md-12'}>
          <h2>Bid {this.state.id} Not Found</h2>
        </div>
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
          {Object.keys(this.state.bids).length > 0 ?
            (
              <div className={'container'}>
                <div className={'col-md-12'}>
                  <h2>Auction Records</h2>
                  <p>View end-to-end auction results.</p>
                  <p><a onClick={this.deleteAllBidRecords.bind(this)}><FaRegTrashAlt/> Delete all</a></p>
                </div>
                {Object.keys(this.state.bids).map((v) => {
                  return (
                    <div key={v} className={'col-md-4'}>
                      <Panel>
                        <Panel.Body>
                          <p><a href={'/auction/' + v}>{this.state.bids[v].bidRequestId}</a><br/>
                            {this.formatDate(this.state.bids[v].requestTimestamp)}
                          </p>
                        </Panel.Body>
                      </Panel>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className={'container'}>
                <div className={'col-md-12'}>
                  <h2>Auction Records</h2>
                  <p>No auction records available.</p>
                </div>
              </div>
            )
          }
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
