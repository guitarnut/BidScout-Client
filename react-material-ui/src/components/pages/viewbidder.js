import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {checkAuth} from "../../common/sharedmethods";
import {getAccountStatus} from "../../api/restapi";
import BidderProperty from "./components/bidderproperty";
import {UserStatisticsModel} from "../../model/userstatistics";

class _ViewBidder extends Component {
  state = {
    campaigns: {},
    creatives: {},
    xml: {},
    selectedCampaign: '',
    selectedCreative: '',
    user: {},
    status: UserStatisticsModel
  };

  constructor() {
    super();
  }

  componentWillMount() {
    checkAuth(this);

    this.setState({
      campaigns: this.props.campaigns,
      creatives: this.props.creatives,
      xml: this.props.xml,
      user: this.props.user
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

  render() {
    return (
      <div className={'container'}>
        <div className={"col-md-12"}>
          <h2>Bidder Configuration</h2>
          <p>Build campaigns, creatives, and VAST XML documents for your integration testing.</p>
          <hr/>
        </div>

        <BidderProperty
          items={this.state.campaigns}
          createlink={'/campaign'}
          viewlink={'/campaign/view/'}
          editlink={'/campaign/edit/'}
          typestring={'Campaign'}
          count={this.state.status.campaigns}
          limit={this.state.status.campaignsLimit}

        />

        <BidderProperty
          items={this.state.creatives}
          createlink={'/creative'}
          viewlink={'/creative/view/'}
          editlink={'/creative/edit/'}
          typestring={'Creative'}
          count={this.state.status.creatives}
          limit={this.state.status.creativesLimit}
        />

        <BidderProperty
          items={this.state.xml}
          createlink={'/xml'}
          viewlink={'/xml/view/'}
          editlink={'/xml/edit/'}
          typestring={'VAST'}
          count={this.state.status.vast}
          limit={this.state.status.vastLimit}
        />

      </div>
    )
  }
}

const ViewBidder = connect(
  state => ({
    campaigns: state.campaigns,
    creatives: state.creatives,
    xml: state.xml,
    user: state.user
  })
)(_ViewBidder);

export default withRouter(ViewBidder);
