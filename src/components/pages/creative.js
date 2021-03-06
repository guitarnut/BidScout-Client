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
import {checkAuth, pageNotFound} from "../../common/sharedmethods";

const mapDispatchToProps = dispatch => {
  return {
    storeAllCreatives: creatives => dispatch(storeAllCreatives(creatives))
  }
};

class _Creative extends Component {

  state = {
    updateCreativeId: '',
    creativeType: 'auto',

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
    xmlDocuments: {},
    xmlId: '',
    xmlType: 'CUSTOM',
    minBid: '',
    maxBid: '',
    syncUsers: false,

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
    requirementsStartDate: '',
    requirementsEndDate: '',

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

  componentWillMount() {
    checkAuth(this);
    const {id} = this.props.match.params;
    if (id !== undefined) {
      this.getCreative(id);
    }
    this.setState({
      xmlDocuments: this.props.xmlDocuments
    })
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
        if (data === '') {
          pageNotFound(this);
          return;
        }
        let model = buildCreativeStateFromResponse(data);
        this.setState({
          ...model,
          failed: false,
          updateCreativeId: id,
          xmlDocuments: this.props.xmlDocuments
        })
      })
      .catch(() => {
        this.setState({
          failed: true,
          creative: ModelCreative
        })
      })
  }

  prepareSave() {
    // wipe any existing values
    if (this.state.type === 'DISPLAY') {
      if (this.state.creativeType === 'url') {
        this.setState({
          adm: ''
        }, function() {
          this.save();
        }.bind(this))
      }
      if (this.state.creativeType === 'custom') {
        this.setState({
          creativeUrl: ''
        }, function() {
          this.save();
        }.bind(this))
      }
      if (this.state.creativeType === 'auto') {
        this.setState({
          creativeUrl: '',
          adm: '',
          w: '0',
          h: '0'
        }, function() {
          this.save();
        }.bind(this))
      }
    } else {
      this.save();
    }
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
        <div className={'container'}>
          <div className={'col-md-12'}>
            {this.state.updateCreativeId !== '' ? (
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
              <UIButton text="Update" action={this.prepareSave.bind(this)} icon="save"/>
            ) : (
              <UIButton text="Save" action={this.prepareSave.bind(this)} icon="save"/>
            )}
          </div>
        </div>
      )
    }
  }
}

const Creative = connect(
  state => ({
    xmlDocuments: state.xml
  }), mapDispatchToProps)
(_Creative);

export default Creative;
