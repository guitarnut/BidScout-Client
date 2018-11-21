import React, {Component} from 'react'
import ModelCreative from "../../model/creative";
import {getCampaignWithCreative, getCreative, getCreativeNames} from "../../api/restapi";
import ModelCampaign from "../../model/campaign";
import Limits from "./components/limits";
import Platforms from "./components/platforms";
import Lists from "./components/lists";
import Stats from "./components/stats";
import Flight from "./components/flight";
import CreativeProps from "./components/creativeproperties";
import ListWithButton from "../ui/listwithbutton";
import {withRouter} from 'react-router-dom';
import Deals from "./components/deals";
import UIButton from "../ui/button";

class ViewCreative extends Component {
  state = {
    allCreatives: {},
    creative: ModelCreative,
    campaign: null,
    selectedCreative: '',
    campaignLink: ''
  };

  constructor() {
    super();

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
        this.setState({
          creative: data
        });
        getCampaignWithCreative(id)
          .then(data => {
            if(data === '') {
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

  setCreative(v) {
    this.setState({
      selectedCreative: v
    })
  }

  edit() {
    this.props.history.push('/creative/edit/' + this.state.creative.id);
  }

  viewCreative() {
    if (this.state.selectedCreative !== '') {
      this.props.history.push('/creative/view/' + this.state.selectedCreative);
    }
  }

  render() {
    return (
      <div>
        <h1>All Creatives</h1>
        <ListWithButton data={this.state.allCreatives} name="Select Creative"
                        handler={this.setCreative.bind(this)} value={this.state.selectedCreative} buttonText="View"
                        action={this.viewCreative.bind(this)}/>
        <h1>{this.state.creative.name}</h1>
        <UIButton text="Edit" action={this.edit.bind(this)}/>
        {this.state.campaign !== null ? (
          <p><strong>Parent Campaign:</strong> <a href={this.state.campaignLink}>{this.state.campaign.name}</a></p>
        ):(
          <p>No parent campaign aligned with this creative.</p>
        )}
        <Stats data={this.state.creative.statistics}/>
        <CreativeProps data={this.state.creative}/>
        <Lists data={this.state.creative.requirements}/>
        <Deals data={this.state.creative.requirements}/>
        <Platforms data={this.state.creative.requirements}/>
        <Flight data={this.state.creative}/>
        <Limits data={this.state.creative.limits}/>
      </div>
    )
  }
}

export default withRouter(ViewCreative);
