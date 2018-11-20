import React, {Component} from 'react'
import {handleInputChange, handleInputChangeArray} from "../../input/formInputHandler";
import {saveCampaign} from "../../api/restapi";
import ModelCampaign from "../../model/campaign";
import UIButton from '../ui/button';
import PanelName from "./components/panel_name";
import PanelLists from "./components/panel_lists";
import PanelPacing from "./components/panel_pacing";
import PanelPlatforms from "./components/panel_platforms";
import PanelConfig from "./components/panel_config";
import PanelTracking from "./components/panel_tracking";
import {withRouter} from 'react-router-dom';
import PanelDeals from "./components/panel_deals";

class Campaign extends Component {
  state = ModelCampaign;

  constructor() {
    super();
  }

  componentDidMount() {
    this.setState({
      saving: false,
      failed: false
    })
  }

  save = () => {
    saveCampaign(this.state)
      .then(() => {
        this.props.history.push('/bidder')
      });
  };

  handleInputChange(event) {
    handleInputChange(event, this);
  }

  handleInputChangeArray(event) {
    handleInputChangeArray(event, this);
  }

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
          <h1>Campaign</h1>
          <p>Your campaign is the top level item that makes decisions about your bid responses. A campaign must have one
            or more creatives associated with it. If you're looking to get up and running quickly, BidScout can generate
            a 100% fill campaign that will automatically return a bid response for any size bid, for any request.</p>
          <p>Build campaign settings and targeting.</p>

          <PanelName handleInput={this.handleInputChange.bind(this)}/>
          <PanelConfig enabled={this.state.enabled} requirements={this.state.requirements}
                       handleInput={this.handleInputChange.bind(this)}/>
          <PanelTracking handleInput={this.handleInputChange.bind(this)} isCampaign={true}/>
          <PanelLists handleInput={this.handleInputChangeArray.bind(this)}/>
          <PanelDeals handleInput={this.handleInputChangeArray.bind(this)}/>
          <PanelPacing handleInput={this.handleInputChange.bind(this)}/>
          <PanelPlatforms handleInput={this.handleInputChange.bind(this)} requirements={this.state.requirements}/>

          <UIButton text="Save" action={this.save.bind(this)} icon="save"/>
        </div>
      )
    }
  }
}

export default Campaign;
