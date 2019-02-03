import React, {Component} from 'react'
import {
  deleteAllVastRecords,
  deleteVastRecord, getAccountStatus,
  getVastRequestByTagRequestId,
  getVastRequestEventsByTagRequestId,
  getVastRequestRecords
} from "../../api/restapi";
import {Panel} from 'react-bootstrap';
import VastTagRequestModel from "../../model/vasttagrequest";
import {FaRegTrashAlt} from 'react-icons/fa';
import {checkAuth, confirmAction, convertMilliToDateString, pageNotFound} from "../../common/sharedmethods";
import UIButton from "../ui/button";
import BidderLimit from "./components/bidderlimit";

class ViewVast extends Component {

  state = {
    id: null,
    vastTransactions: {},
    vastRequest: VastTagRequestModel,
    vastRequestEvents: [],
    status: {}
  };

  constructor() {
    super();
  }

  componentWillMount() {
    checkAuth(this);
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
      getAccountStatus()
        .then((data) => {
          this.setState({
            status: {
              ...data
            }
          })
        })
    }
  }

  getVast() {
    getVastRequestByTagRequestId(this.state.id)
      .then((data) => {
        if (data === '') {
          pageNotFound(this);
          return;
        }
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

  deleteVast(id) {
    if (confirmAction("Delete VAST record?")) {
      deleteVastRecord(id)
        .then(() => {
          getVastRequestRecords()
            .then((data) => {
              this.setState({
                vastTransactions: data
              });
              this.props.history.push('/vast')
            });
        });
    }
  }

  deleteAllVast() {
    if (confirmAction("Delete all VAST records?")) {
      deleteAllVastRecords()
        .then(() => {
          this.setState({
            vastTransactions: {}
          });
        });
    }
  }

  renderVastTransaction() {
    return (
      <div className={'container'}>
        <div className={'col-md-10'}>
          <h2>VAST: {this.state.vastRequest.vastName}</h2>
        </div>
        <div className={'col-md-2'}>
          <h2><UIButton text="Delete" action={this.deleteVast.bind(this, this.state.vastRequest.id)}/></h2>
        </div>
        <div className={'col-md-12'}>
          <hr/>
        </div>
        <div className={'col-md-12'}>
          <p><strong>Request Timestamp</strong><br/>{convertMilliToDateString(this.state.vastRequest.requestTimestamp)}
          </p>
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
                <p><strong>Host:</strong> {v.host}</p>
              </div>
              <div className={'col-md-3'}>
                <p><strong>IP:</strong> {v.ip}</p>
              </div>
              <div className={'col-md-12'}>
                <p><strong>Timestamp:</strong> {convertMilliToDateString(v.eventTimestamp)}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  renderVastTagRecords() {
    return (
      <div>
        {Object.keys(this.state.vastTransactions).length > 0 ?
          (
            <div className={'container'}>
              <div className={'col-md-10'}>
                <h2>VAST Tag Records</h2>
              </div>
              <div className={'col-md-2'}>
                <h2><UIButton text="Delete all" action={this.deleteAllVast.bind(this)}/></h2>
              </div>

              <BidderLimit
                records={this.state.status.vastRecords}
                recordmax={this.state.status.vastRecordsLimit}
                requests={this.state.status.vastTagRequests}
                requestsmax={this.state.status.vastTagRequestsLimit}
                resetdate={convertMilliToDateString(this.state.status.periodEnd)}
              />

              {Object.keys(this.state.vastTransactions).map((v) => {
                return (
                  <div key={v} className={'col-md-4'}>
                    <Panel>
                      <Panel.Body>
                        <p><a href={'/vast/' + v}>{this.state.vastTransactions[v].vastName}</a><br/>
                          {convertMilliToDateString(this.state.vastTransactions[v].requestTimestamp)}
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

  render() {
    if (this.state.id) {
      return (
        this.renderVastTransaction()
      )
    } else {
      return (
        this.renderVastTagRecords()
      )
    }

  }
}

export default ViewVast;
