import React, {Component} from 'react';
import {deleteCreative, getCampaignWithCreative, getCreative, getCreativeNames, resetCreative} from "../../api/restapi";
import Limits from "./components/limits";
import Platforms from "./components/platforms";
import Lists from "./components/lists";
import Stats from "./components/stats";
import Flight from "./components/flight";
import CreativeProps from "./components/creativeproperties";
import {withRouter} from 'react-router-dom';
import Deals from "./components/deals";
import {connect} from "react-redux";
import {storeAllCreatives} from "../../store/actions";
import {buildCreativeStateFromResponse} from "../../builder/creative";
import {FaRegEdit, FaRegTrashAlt} from 'react-icons/fa';
import UIButton from "../ui/button";
import {checkAuth, confirmAction, pageNotFound} from "../../common/sharedmethods";

const mapDispatchToProps = dispatch => {
  return {
    storeAllCreatives: creatives => dispatch(storeAllCreatives(creatives))
  }
};

class _ViewCreative extends Component {
  state = {
    allCreatives: {},

    id: '',
    owner: '',
    name: '',
    type: '',
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

    campaign: null,
    campaignLink: ''
  };

  constructor() {
    super();
  }

  componentWillMount() {
    checkAuth(this);
  }

  componentDidMount() {
    const {id} = this.props.match.params;

    getCreativeNames()
      .then(data => {
        this.setState({
          allCreatives: data
        })
      });
    getCreative(id)
      .then(data => {
        if(data === '') {
          pageNotFound(this);
          return;
        }
        let creative = buildCreativeStateFromResponse(data);
        this.setState({
          ...creative
        });
        getCampaignWithCreative(id)
          .then(data => {
            if (data === '') {
              return;
            }
            let link = '/campaign/view/' + data.id;
            this.setState({
              campaign: data,
              campaignLink: link
            })
          })
      });
  }

  edit() {
    this.props.history.push('/creative/edit/' + this.state.id);
  }

  view(v) {
    this.props.history.push('/creative/view/' + v);
  }

  resetStats() {
    resetCreative(this.state.id)
      .then(() => {
        this.setState({
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
          statsClicks: 0
        })
      })
  }

  remove() {
    if (confirmAction("Delete creative?")) {
      deleteCreative(this.state.id)
        .then(() => {
          getCreativeNames()
            .then((data) => {
              this.props.storeAllCreatives(data);
              this.props.history.push('/bidder')
            });
        })
        .catch(() => {
          this.setState({
            failed: true
          })
        })
    }
  }

  render() {
    return (
      <div className={'container'}>
        <div className={'col-md-10'}>
          <h2>Creative: {this.state.name} ({this.state.type})</h2>
        </div>
          <div className={'col-md-2'}>
            <h2><UIButton text="Delete" action={this.remove.bind(this)}/></h2>
          </div>
        <div className={'col-md-12'}>
          {this.state.campaign !== null ? (
            <p><strong>Parent Campaign:</strong> <a href={this.state.campaignLink}>{this.state.campaign.name}</a></p>
          ) : (
            <p>No parent campaign aligned with this creative.</p>
          )}
          <hr/>
          <UIButton text="Edit Creative" action={this.edit.bind(this)}/> <UIButton action={this.resetStats.bind(this)} text={"Reset Stats"}></UIButton>
          <hr/>
          <Stats parentState={this.state}/>
          <hr/>
          <CreativeProps parentState={this.state}/>
          <Lists parentState={this.state}/>
          <Deals parentState={this.state}/>
          <Platforms parentState={this.state}/>
          <Flight parentState={this.state}/>
          <Limits parentState={this.state}/>
        </div>
      </div>
    )
  }
}

const ViewCreative = connect(null, mapDispatchToProps)(_ViewCreative);

export default withRouter(ViewCreative);
