import React, {Component} from 'react'
import ModelCampaign from '../../model/campaign';
import {getCampaign, getCampaignNames, getCreativeNamesByCampaign} from '../../api/restapi';
import SelectList from "../ui/selectlist";
import UIButton from "../ui/button";
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
    selectedCampaign: '',
    selectedCreative: ''
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
            })
          })
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
      window.location.pathname = '/campaign/view/' + this.state.selectedCreative;
    }
  }

  setCreative(e) {
    if (e.target.value !== '') {
      this.setState({
        selectedCreative: e.target.value
      })
    }
  }

  viewCreative() {
    if (this.state.selectedCreative !== '') {
      window.location.pathname = '/creative/view/' + this.state.selectedCreative;
    }
  }

  render() {
    return (
      <div>
        <ListWithButton data={this.state.allCampaigns} name="Select Campaign" handler={this.setCampaign.bind(this)}
                        value={this.state.selectedCampaign} buttonText="View" action={this.viewCampaign.bind(this)}/>
        <ListWithButton data={this.state.allCreativesForCampaign} name="Select Creative"
                        handler={this.setCreative.bind(this)} value={this.state.selectedCreative} buttonText="View"
                        action={this.viewCreative.bind(this)}/>
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

export default ViewCampaign;
