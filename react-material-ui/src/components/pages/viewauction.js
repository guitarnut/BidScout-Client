import React, {Component} from 'react'
import {
  deleteAllBids,
  deleteBid,
  getAccountStatus,
  getAllBids,
  viewBid,
  viewClicks,
  viewImpressions
} from "../../api/restapi";
import ModelAuction from "../../model/auction";
import {connect} from 'react-redux';
import '../../App.css';
import {checkAuth, confirmAction, pageNotFound} from "../../common/sharedmethods";
import {UserStatisticsModel} from "../../model/userstatistics";
import AuctionRecord from "./components/auctionrecord";
import AuctionRecordList from "./components/auctionrecordlist";

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
    errors: [],
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

  getBid() {
    viewBid(this.state.id)
      .then((data) => {
        if (data === '') {
          pageNotFound(this);
          return;
        }
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
    if (confirmAction("Delete bid record?")) {
      deleteBid(id);
      getAllBids()
        .then((data) => {
          this.setState({
            bids: data
          });
          this.props.history.push('/auction')
        });
    }
  }

  deleteAllBidRecords() {
    if (confirmAction("Delete all bid records?")) {
      deleteAllBids()
        .then(() => {
          this.setState({
            bids: {}
          });
        });
    }
  }

  render() {
    if (this.state.id) {
      return (
        <AuctionRecord
          bid={this.state.bid}
          campaigns={this.state.campaigns}
          creatives={this.state.creatives}
          request={this.state.request}
          response={this.state.response}
          impressions={this.state.impressions}
          clicks={this.state.clicks}
          delete={this.deleteBidRecord.bind(this, this.state.bid.id)}
        />
      )
    } else {
      return (
        <AuctionRecordList
          bids={this.state.bids}
          status={this.state.status}
          delete={this.deleteAllBidRecords.bind(this)}
        />
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
