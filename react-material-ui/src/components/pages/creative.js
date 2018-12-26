import React, {Component} from 'react'
import ModelCreative from "../../model/creative";
import {getCreative, getCreativeNames, saveCreative} from "../../api/restapi";
import UIButton from '../ui/button';
import PanelAuctionSettings from "./components/panel_auctionsettings";
import PanelProperties from "./components/panel_properties";
import PanelLists from "./components/panel_lists";
import PanelPacing from "./components/panel_pacing";
import PanelTracking from "./components/panel_tracking";
import PanelName from "./components/panel_name";
import PanelConfig from "./components/panel_config";
import PanelDeals from "./components/panel_deals";
import {storeAllCreatives} from "../../store/actions";
import {connect} from 'react-redux';
import PanelPlatforms from "./components/panel_platforms";
import {buildCreativeModelFromState, buildCreativeStateFromResponse} from "../../builder/creative";

const mapDispatchToProps = dispatch => {
  return {
    storeAllCreatives: creatives => dispatch(storeAllCreatives(creatives))
  }
};

class _Creative extends Component {

  state = {
    updateCreativeId: null,
    creativeType: '',

    id: null,
    owner: '',
    name: '',
    type: 'DISPLAY',
    w: '',
    h: '',
    enabled: false,
    iabCategories: [],
    attr: [],
    btype: [],
    mimes: [],
    adId: '',
    crid: '',
    adDomain: [],
    creativeUrl: '',
    adm: '',
    xml: '',
    minBid: '',
    maxBid: '',

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
    limitsRevenueLimit: 0,

    statsBids: 0,
    statsNbr: 0,
    statsImpressions: 0,
    statsDuplicateImpressions: 0,
    statsExpiredImpressions: 0,
    statsInvalidImpressions: 0,
    statsRevenue: 0,
    statsEcpm: 0,
    statsRequests: 0,
    statsBidPriceTotal: 0,
    statsClicks: 0,

    bidFrequency: ''
  };

  constructor() {
    super();
  }

  componentWillMount() {
    const {id} = this.props.match.params;
    if (id !== undefined) {
      this.getCreative(id);
    }
  }

  componentDidMount() {
    this.setState({
      saving: false,
      failed: false,
    })
  }

  getCreative(id) {
    getCreative(id)
      .then((data) => {
        let model = buildCreativeStateFromResponse(data);
        this.setState({
          ...model,
          failed: false,
          updateCreativeId: id
        })
      })
      .catch(() => {
        this.setState({
          failed: true,
          creative: ModelCreative
        })
      })
  }

  save() {
    let model = buildCreativeModelFromState(this.state);
    saveCreative(model)
      .then(() => {
        getCreativeNames()
          .then((data) => {
            this.props.storeAllCreatives(data);
            this.props.history.push('/bidder')
          });
      });
  };

  render() {
    if (this.state.saving) {
      return (
        <div>
          <h1>Saving {this.state.name}</h1>
        </div>
      )
    } else {
      return (
        <div>
          {this.state.updateCreativeId ? (
            <h2>Edit {this.state.name}</h2>
          ) : (
            <h2>Build Creative</h2>
          )}
          <p>Creatives are the second level item responsible for controlling bid responses. Creatives will be
            returned based on a size match with the bid request. If you do not wish to create multiple creatives,
            BidScout can instead create a 100% fill campaign that will return a creative for every bid request.</p>

          <PanelName value={this.state.name} context={this}/>
          <PanelConfig parentState={this.state} context={this}/>
          <PanelProperties creativeType={this.state.creativeType} context={this} parentState={this.state}/>
          <PanelAuctionSettings context={this} parentState={this.state}/>
          <PanelTracking isCampaign={false} context={this} parentState={this.state}/>
          <PanelLists context={this} parentState={this.state}/>
          <PanelDeals context={this} parentState={this.state}/>
          <PanelPacing context={this} parentState={this.state}/>
          <PanelPlatforms context={this} parentState={this.state}/>

          {this.state.updateCreativeId ? (
            <UIButton text="Update" action={this.save.bind(this)} icon="save"/>
          ) : (
            <UIButton text="Save" action={this.save.bind(this)} icon="save"/>
          )}
        </div>
      )
    }
  }
}

const Creative = connect(null, mapDispatchToProps)(_Creative);

export default Creative;
