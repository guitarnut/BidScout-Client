import React, {Component} from 'react'
import {
  getVastRequestByTagRequestId,
  getVastRequestEventsByTagRequestId,
  getVastRequestRecords
} from "../../api/restapi";
import {Panel} from 'react-bootstrap';
import VastTagRequestModel from "../../model/vasttagrequest";

class ViewVast extends Component {

  state = {
    id: null,
    vastTransactions: {},
    vastRequest: VastTagRequestModel,
    vastRequestEvents: []
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
      this.getVast();
    } else {
      getVastRequestRecords()
        .then((data) => {
          this.setState({
            vastTransactions: data
          })
        });
    }
  }

  getVast() {
    getVastRequestByTagRequestId(this.state.id)
      .then((data) => {
        this.setState({
          vastRequest: data
        });
        getVastRequestEventsByTagRequestId(this.state.id)
          .then((data) => {
            this.setState({
              vastRequestEvents: data
            });
          });
      })
  };

  // deleteVastTagRecord(id) {
  //   deleteBid(id);
  //   getAllBids()
  //     .then((data) => {
  //       this.setState({
  //         bids: data
  //       });
  //       this.props.history.push('/auction')
  //     });
  // }
  //
  // deleteAllVastTagRecords() {
  //   deleteAllBids()
  //     .then(() => {
  //       this.setState({
  //         bids: {}
  //       });
  //     });
  // }

  formatDate(v) {
    if (v === 0) {
      return 'Not available';
    }
    return new Date(v).toLocaleDateString() + ' ' + new Date(v).toLocaleTimeString();
  }

  renderVastTransaction() {
    if (this.state.id !== undefined) {
      return (
        <div className={'container'}>
          <div className={'col-md-12'}>
            <h2>VAST Tag {this.state.vastRequest.vastName}</h2>
            {/*<p><a onClick={this.deleteBidRecord.bind(this, this.state.bid.id)}><FaRegTrashAlt/></a></p>*/}
          </div>
          <div className={'col-md-12'}>
            <hr/>
          </div>
          <div className={'col-md-3'}>
            <p><strong>Request Timestamp</strong><br/>{this.formatDate(this.state.vastRequest.requestTimestamp)}</p>
          </div>
          <div className={'col-md-12'}>
            <hr/>
          </div>
          <div className={'col-md-12'}>
            <p><strong>Request User Agent</strong><br/>
              <pre><code>{this.state.vastRequest.userAgent}</code></pre>
            </p>
          </div>
          <div className={'col-md-12'}>
            <hr/>
          </div>
          <div className={'col-md-12'}>
            <p><strong>Cookies</strong><br/>
              <pre><code>{this.state.vastRequest.cookies}</code></pre>
            </p>
          </div>
          <div className={'col-md-12'}>
            <hr/>
          </div>
          <div className={'col-md-4'}>
            <p><strong>Host</strong><br/>{this.state.vastRequest.host}</p>
          </div>
          <div className={'col-md-4'}>
            <p><strong>IP</strong><br/>{this.state.vastRequest.ip}</p>
          </div>
          <div className={'col-md-4'}>
            <p><strong>X-Forwarded</strong><br/>{this.state.vastRequest.xForwardedFor}</p>
          </div>
          <div className={'col-md-12'}>
            <hr/>
          </div>
          <div className={'col-md-12'}>
            <h4>Impressions</h4>
          </div>
          <div className={'col-md-12'}>
            <hr/>
          </div>
          <div className={'col-md-12'}>
            <h4>Events</h4>
          </div>
          {this.state.vastRequestEvents.map((v) => {
            return (
              <div key={v.id}>
                <div className={'col-md-12'}>
                  <h4>{v.event}</h4>
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
                  <p><strong>Timestamp:</strong> {this.formatDate(v.eventTimestamp)}</p>
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
        this.renderVastTransaction()
      )
    } else {
      return (
        <div>
          {Object.keys(this.state.vastTransactions).length > 0 ?
            (
              <div className={'container'}>
                <div className={'col-md-12'}>
                  <h2>VAST Tag Records</h2>
                  <p>View VAST tag results.</p>
                  {/*<p><a onClick={this.deleteAllBidRecords.bind(this)}><FaRegTrashAlt/> Delete all</a></p>*/}
                </div>
                {Object.keys(this.state.vastTransactions).map((v) => {
                  return (
                    <div key={v} className={'col-md-4'}>
                      <Panel>
                        <Panel.Body>
                          <p><a href={'/vast/' + v}>{this.state.vastTransactions[v].vastName}</a><br/>
                            {new Date(this.state.vastTransactions[v].requestTimestamp).toString()}
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
                  <h2>VAST Tag Records</h2>
                  <p>No VAST tag records available.</p>
                </div>
              </div>
            )
          }
        </div>
      )
    }

  }
}

export default ViewVast;
