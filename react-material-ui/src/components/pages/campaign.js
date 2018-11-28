import React, {Component} from 'react'
import {getCampaign, getCampaignNames, saveCampaign} from "../../api/restapi";
import UIButton from '../ui/button';
import PanelName from "./components/panel_name";
import PanelLists from "./components/panel_lists";
import PanelPacing from "./components/panel_pacing";
import PanelPlatforms from "./components/panel_platforms";
import PanelConfig from "./components/panel_config";
import PanelTracking from "./components/panel_tracking";
import PanelDeals from "./components/panel_deals";
import {storeAllCampaigns} from "../../store/actions";
import {connect} from 'react-redux';
import ModelCreative from "../../model/creative";

const mapDispatchToProps = dispatch => {
  return {
    storeAllCampaigns: campaigns => dispatch(storeAllCampaigns(campaigns)),
  }
};

class _Campaign extends Component {
  state = {
    updateCampaignId: null,
    id: null,
    owner: null,
    name: null,
    enabled: false,
    cid: null,
    publisher: null,
    seat: null,
    nurl: null,
    impressionExpiry: 0,

    requirementsUserMatch: false,
    requirementsSecure: false,
    requirementsPublisherWhitelist: [],
    requirementsDomainWhitelist: [],
    requirementsBundleWhitelist: [],
    requirementsPublisherBlacklist: [],
    requirementsDomainBlacklist: [],
    requirementsBundleBlacklist: [],
    requirementsDealIds: [],
    requirementsMobile: false,
    requirementsDesktop: false,
    requirementsInapp: false,
    requirementsCtv: false,
    requirementsStartDate: null,
    requirementsEndDate: null,

    limitsRequestLimit: 0,
    limitsBidRate: 0,
    limitsBidLimit: 0,
    limitsImpressionLimit: 0,
    limitsRevenueLimit: 0
  };

  constructor() {
    super();
  }

  componentWillMount() {
    const {id} = this.props.match.params;
    if (id !== undefined) {
      this.getCampaign(id);
    }
  }

  componentDidMount() {
    this.setState({
      saving: false,
      failed: false
    })
  }

  getCampaign(id) {
    getCampaign(id)
      .then((data) => {
        this.setState({
          failed: false,
          model: data,
          id: id
        })
      })
      .catch(() => {
        this.setState({
          failed: true,
          creative: ModelCreative
        })
      })
  }

  save = () => {
    saveCampaign(this.state.model)
      .then(() => {
        getCampaignNames()
          .then((data) => {
            this.props.storeAllCampaigns(data);
            this.props.history.push('/bidder')
          });
      });
  };

  render() {
    if (this.state.saving) {
      return (
        <div>
          <h1>Saving {this.state.model.name}</h1>
        </div>
      )
    } else {
      return (
        <div>
          {this.state.updateCampaignId ? (
            <h2>Edit {this.state.model.name}</h2>
          ) : (
            <h2>Build Campaign</h2>
          )}
          <p>Your campaign is the top level item that makes decisions about your bid responses. A campaign must have one
            or more creatives associated with it. If you're looking to get up and running quickly, BidScout can generate
            a 100% fill campaign that will automatically return a bid response for any size bid, for any request.</p>
          <p>Build campaign settings and targeting.</p>

          <PanelName value={this.state.name} context={this}/>
          <PanelConfig parentState={this.state} context={this}/>
          <PanelTracking isCampaign={true} context={this} parentState={this.state}/>
          <PanelLists context={this} parentState={this.state}/>
          <PanelDeals context={this} parentState={this.state}/>
          <PanelPacing context={this} parentState={this.state}/>
          <PanelPlatforms context={this} parentState={this.state}/>

          {this.state.updateCampaignId ? (
            <UIButton text="Update" action={this.save.bind(this)} icon="save"/>
          ) : (
            <UIButton text="Save" action={this.save.bind(this)} icon="save"/>
          )}
        </div>
      )
    }
  }
}

const Campaign = connect(null, mapDispatchToProps)(_Campaign);

export default Campaign;
