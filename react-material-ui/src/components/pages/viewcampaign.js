import React, {Component} from 'react'
import ModelCampaign from '../../model/campaign';
import {withRouter} from 'react-router-dom';
import {
  addCreativeToCampaign,
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

class ViewCampaign extends Component {
  state = {
    campaign: ModelCampaign,
    allCampaigns: [],
    allCreativesForCampaign: [],
    allCreatives: [],
    selectedCampaign: '',
    selectedCreativeToView: '',
    selectedCreativeToAdd: '',
    selectedCreativeToRemove: ''
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

  setCampaign(e) {
    if (e.target.value !== '') {
      this.setState({
        selectedCreative: e.target.value
      })
    }
  }

  viewCampaign() {
    if (this.state.selectedCreative !== '') {
      this.props.history.push('/campaign/view/' + this.state.selectedCreative);
    }
  }

  setCreativeToRemove(e) {
    if (e.target.value !== '') {
      this.setState({
        selectedCreativeToRemove: e.target.value
      })
    }
  }

  removeCreativeFromCampaign(v) {
    removeCreativeFromCampaign(this.state.campaign.id, this.state.selectedCreativeToRemove)
      .then(data=>{
        this.refreshMenus();
      });
  }

  setCreativeToAdd(e) {
    if (e.target.value !== '') {
      this.setState({
        selectedCreativeToAdd: e.target.value
      })
    }
  }

  addCreativeToCampaign() {
    addCreativeToCampaign(this.state.campaign.id, this.state.selectedCreativeToAdd)
      .then(data=>{
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

  render() {
    return (
      <div>
        <h1>All Campaigns</h1>
        <ListWithButton data={this.state.allCampaigns} name="Select Campaign" handler={this.setCampaign.bind(this)}
                        value={this.state.selectedCampaign} buttonText="View" action={this.viewCampaign.bind(this)}/>
        <h1>Creatives Aligned to {this.state.campaign.name}</h1>
        <ListWithButton data={this.state.allCreativesForCampaign} name="Select Creative"
                        handler={this.setCreativeToRemove.bind(this)} value={this.state.selectedCreativeToRemove}
                        buttonText="Remove"
                        action={this.removeCreativeFromCampaign.bind(this)}/>
        <h1>Available Creatives</h1>
        <ListWithButton data={this.state.allCreatives} name="Select Creative"
                        handler={this.setCreativeToAdd.bind(this)} value={this.state.selectedCreativeToAdd}
                        buttonText="Add"
                        action={this.addCreativeToCampaign.bind(this)}/>
        <div>
          <h1>{this.state.campaign.name}</h1>
          <Stats data={this.state.campaign.statistics}/>
          <CampaignProps data={this.state.campaign}/>
          <Settings data={this.state.campaign.requirements}/>
          <Lists data={this.state.campaign.requirements}/>
          <Platforms data={this.state.campaign.requirements}/>
          <Flight data={this.state.campaign}/>
          <Limits data={this.state.campaign.limits}/>
        </div>
      </div>
    )
  }
}

export default withRouter(ViewCampaign);
