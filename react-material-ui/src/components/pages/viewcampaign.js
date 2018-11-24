import React, {Component} from 'react'
import ModelCampaign from '../../model/campaign';
import {withRouter} from 'react-router-dom';
import {
  addCreativeToCampaign,
  deleteCampaign,
  getCampaign,
  getCampaignNames,
  getCreativeNames,
  getCreativeNamesByCampaign,
  removeCreativeFromCampaign
} from '../../api/restapi';
import Limits from "./components/limits";
import Platforms from "./components/platforms";
import Lists from "./components/lists";
import Stats from "./components/stats";
import Flight from "./components/flight";
import CampaignProps from "./components/campaignproperties";
import Settings from "./components/settings";
import ListWithButton from "../ui/listwithbutton";
import Deals from "./components/deals";
import UIButton from "../ui/button";
import {connect} from 'react-redux';
import {storeAllCampaigns} from "../../store/actions";

const mapDispatchToProps = dispatch => {
  return {
    storeAllCampaigns: campaigns => dispatch(storeAllCampaigns(campaigns))
  }
};

class _ViewCampaign extends Component {
  state = {
    campaign: ModelCampaign,
    allCampaigns: [],
    allCreativesForCampaign: [],
    allCreatives: [],
  };

  constructor() {
    super();
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
        this.setState({
          campaign: data
        });
        getCreativeNamesByCampaign(this.state.campaign.id)
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
    removeCreativeFromCampaign(this.state.campaign.id, v)
      .then(data => {
        this.refreshMenus();
      });
  }

  edit() {
    this.props.history.push('/campaign/edit/' + this.state.campaign.id);
  }

  addCreativeToCampaign(v) {
    addCreativeToCampaign(this.state.campaign.id, v)
      .then(data => {
        this.refreshMenus();
      });
  }

  refreshMenus() {
    getCreativeNamesByCampaign(this.state.campaign.id)
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
    deleteCampaign(this.state.campaign.id)
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

  render() {
    return (
      <div>
          <h4>All Campaigns</h4>
          {Object.keys(this.state.allCampaigns).map((v) => {
            return (
              <p><a onClick={this.view.bind(this, v)}>View</a> - {this.state.allCampaigns[v]}</p>
            )
          })}

          <h4>Creatives Aligned to {this.state.campaign.name}</h4>
          {Object.keys(this.state.allCreativesForCampaign).length > 0 ? (
            Object.keys(this.state.allCreativesForCampaign).map((v) => {
              return (
                <p><a onClick={this.removeCreativeFromCampaign.bind(this, v)}>Remove
                  from {this.state.campaign.name}</a> - {this.state.allCreativesForCampaign[v]}</p>
              )
            })
          ) : (
            <p>No creatives aligned to this campaign.</p>
          )}

          <h4>Available Creatives</h4>
          {Object.keys(this.state.allCreatives).length > 0 ? (
            Object.keys(this.state.allCreatives).map((v) => {
              return (
                <p><a onClick={this.addCreativeToCampaign.bind(this, v)}>Add
                  to {this.state.campaign.name}</a> - {this.state.allCreatives[v]}</p>
              )
            })
          ) : (
            <p>No creatives available.</p>
          )}

          <h2>Campaign {this.state.campaign.name}</h2>
          <p><a onClick={this.edit.bind(this)}>Edit</a> | <a
            onClick={this.remove.bind(this)}>Delete</a></p>

          <Stats data={this.state.campaign.statistics}/>
          <CampaignProps data={this.state.campaign}/>
          <Settings data={this.state.campaign.requirements}/>
          <Lists data={this.state.campaign.requirements}/>
          <Deals data={this.state.campaign.requirements}/>
          <Platforms data={this.state.campaign.requirements}/>
          <Flight data={this.state.campaign}/>
          <Limits data={this.state.campaign.limits}/>
      </div>
    )
  }
}

const ViewCampaign = connect(null, mapDispatchToProps)(_ViewCampaign);

export default withRouter(ViewCampaign);
