import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {
  addCreativeToCampaign,
  deleteCampaign,
  getCampaign,
  getCampaignNames,
  getCreativeNames,
  getCreativeNamesByCampaign,
  removeCreativeFromCampaign,
  resetCampaign
} from '../../api/restapi';
import Stats from "./components/stats";
import {connect} from 'react-redux';
import {storeAllCampaigns} from "../../store/actions";
import {buildCampaignStateFromResponse} from "../../builder/campaign";
import CampaignProps from "./components/campaignproperties";
import Settings from "./components/settings";
import Lists from "./components/lists";
import Deals from "./components/deals";
import Platforms from "./components/platforms";
import Flight from "./components/flight";
import Limits from "./components/limits";
import {FaRegEdit, FaRegTrashAlt} from 'react-icons/fa';
import UIButton from "../ui/button";
import {checkAuth, confirmAction, pageNotFound} from "../../common/sharedmethods";

const mapDispatchToProps = dispatch => {
  return {
    storeAllCampaigns: campaigns => dispatch(storeAllCampaigns(campaigns))
  }
};

class _ViewCampaign extends Component {
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

    allCampaigns: [],
    allCreativesForCampaign: [],
    allCreatives: [],
  };

  constructor() {
    super();
  }

  componentWillMount() {
    checkAuth(this);
  }

  componentDidMount() {
    const {id} = this.props.match.params;

    getCampaignNames()
      .then(data => {
        this.setState({
          allCampaigns: data
        })
      });
    getCampaign(id)
      .then(data => {
        if (data === '') {
          pageNotFound(this);
          return;
        }
        let campaign = buildCampaignStateFromResponse(data);
        this.setState({
          ...campaign
        });
        getCreativeNamesByCampaign(this.state.id)
          .then(data => {
            this.setState({
              allCreativesForCampaign: data,
              selectedCreative: ''
            });
            getCreativeNames()
              .then(data => {
                let parsedData = {};
                Object.keys(data).map(k => {
                  if (!this.state.allCreativesForCampaign.hasOwnProperty(k)) {
                    parsedData[k] = data[k];
                  }
                });
                this.setState({
                  allCreatives: parsedData
                })
              })
          });
      });
  }

  view(v) {
    this.props.history.push('/campaign/view/' + v);
  }

  removeCreativeFromCampaign(v) {
    removeCreativeFromCampaign(this.state.id, v)
      .then(() => {
        this.refreshMenus();
      });
  }

  edit() {
    this.props.history.push('/campaign/edit/' + this.state.id);
  }

  addCreativeToCampaign(v) {
    addCreativeToCampaign(this.state.id, v)
      .then(() => {
        this.refreshMenus();
      });
  }

  refreshMenus() {
    getCreativeNamesByCampaign(this.state.id)
      .then(data => {
        this.setState({
          allCreativesForCampaign: data
        });
        getCreativeNames()
          .then(data => {
            let parsedData = {};
            Object.keys(data).map(k => {
              if (!this.state.allCreativesForCampaign.hasOwnProperty(k)) {
                parsedData[k] = data[k];
              }
            });
            this.setState({
              allCreatives: parsedData,
              selectedCreativeToView: '',
              selectedCreativeToAdd: '',
              selectedCreativeToRemove: ''
            })
          })
      });
  }

  remove() {
    if (confirmAction("Delete campaign?")) {
      deleteCampaign(this.state.id)
        .then(() => {
          getCampaignNames()
            .then((data) => {
              this.props.storeAllCampaigns(data);
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

  resetStats() {
    resetCampaign(this.state.id)
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

  render() {
    return (
      <div className={'container'}>
        <div className={'col-md-10'}><h2>Campaign: {this.state.name}</h2>
          <hr/>
        </div>
        <div className={'col-md-2'}>
          <h2><UIButton text="Delete" action={this.remove.bind(this)}/></h2>
        </div>
        <div className={'col-md-12'}>
          <p>Your auction endpoint for this campaign is below. Requests must be POST.</p>
          <p>
            <pre><code>https://app.auctionscout.net/bid/{this.state.owner}/{this.state.id}</code></pre>
          </p>
        </div>
        <div className={'col-md-6'}><h4>Creatives In Use</h4>
          {Object.keys(this.state.allCreativesForCampaign).length > 0 ? (
            Object.keys(this.state.allCreativesForCampaign).map((v) => {
              return (
                <p key={v}><a
                  onClick={this.removeCreativeFromCampaign.bind(this, v)}>Remove</a> - {this.state.allCreativesForCampaign[v]}
                </p>
              )
            })
          ) : (
            <p>No creatives aligned to this campaign.</p>
          )}
        </div>
        <div className={'col-md-6'}><h4>Available Creatives</h4>
          {Object.keys(this.state.allCreatives).length > 0 ? (
            Object.keys(this.state.allCreatives).map((v) => {
              return (
                <p key={v}><a onClick={this.addCreativeToCampaign.bind(this, v)}>Add
                  to {this.state.name}</a> - {this.state.allCreatives[v]} {v}</p>
              )
            })
          ) : (
            <p>No creatives available.</p>
          )}
        </div>
        <div className={'col-md-12'}>
          <hr/>
          <UIButton text="Edit Campaign" action={this.edit.bind(this)}/> <UIButton action={this.resetStats.bind(this)}
                                                                                   text={"Reset Stats"}></UIButton>
          <hr/>
          <Stats parentState={this.state}/>
          <hr/>
          <CampaignProps parentState={this.state}/>
          <Settings parentState={this.state}/>
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

const ViewCampaign = connect(null, mapDispatchToProps)(_ViewCampaign);

export default withRouter(ViewCampaign);
