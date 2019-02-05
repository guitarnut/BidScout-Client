import React, {Component} from 'react'
import {
  deleteAllVastRecords,
  deleteVastRecord,
  getAccountStatus,
  getVastRequestByTagRequestId,
  getVastRequestEventsByTagRequestId,
  getVastRequestRecords
} from "../../api/restapi";
import VastTagRequestModel from "../../model/vasttagrequest";
import {checkAuth, confirmAction, pageNotFound} from "../../common/sharedmethods";
import {UserStatisticsModel} from "../../model/userstatistics";
import VastRecord from "./components/vastrecord";
import VastRecordList from "./components/vastrecordlist";

class ViewVast extends Component {

  state = {
    id: null,
    vastTransactions: {},
    vastRequest: VastTagRequestModel,
    vastRequestEvents: [],
    status: UserStatisticsModel
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
                vastTransactions: data,
                id: null
              });
              getAccountStatus()
                .then((data) => {
                  this.setState({
                    status: {
                      ...data
                    }
                  });
                  this.props.history.push('/vast')
                });
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

  render() {
    if (this.state.id) {
      return (
        <VastRecord
          vastRequest={this.state.vastRequest}
          vastRequestEvents={this.state.vastRequestEvents}
          delete={this.deleteVast.bind(this, this.state.vastRequest.id)}
        />
      )
    } else {
      return (
        <VastRecordList
          vastTransactions={this.state.vastTransactions}
          status={this.state.status}
          delete={this.deleteAllVast.bind(this)}
        />
      )
    }

  }
}

export default ViewVast;
