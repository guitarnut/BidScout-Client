import React, {Component} from 'react'
import ModelCreative from "../../model/creative";
import {saveCreative} from "../../api/restapi";
import {handleInputChange, handleInputChangeArray} from "../../input/formInputHandler";
import UIButton from '../ui/button';
import PanelAuctionSettings from "./components/panel_auctionsettings";
import PanelProperties from "./components/panel_properties";
import PanelLists from "./components/panel_lists";
import PanelPlatforms from "./components/panel_platforms";
import PanelPacing from "./components/panel_pacing";
import PanelTracking from "./components/panel_tracking";
import PanelName from "./components/panel_name";
import PanelConfig from "./components/panel_config";
import {withRouter} from 'react-router-dom';
import PanelDeals from "./components/panel_deals";

class Creative extends Component {

  state = ModelCreative;

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
    saveCreative(this.state)
      .then(()=>{
        this.props.history.push('/bidder')
      });
  };

  handleInputChange(event) {
    if(!event.hasOwnProperty('target')) {
      event = {
        target: {
          value: event
        }
      }
    }
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
          <h1>Creative</h1>
          <p>Creatives are the second level item responsible for controlling bid responses. Creatives will be returned
          based on a size match with the bid request. If you do not wish to create multiple creatives, BidScout can
          instead create a 100% fill campaign that will return a creative for every bid request.</p>

          <PanelName handleInput={this.handleInputChange.bind(this)}/>
          <PanelConfig enabled={this.state.enabled} requirements={this.state.requirements} handleInput={this.handleInputChange.bind(this)}/>
          <PanelProperties handleInput={this.handleInputChange.bind(this)} handleInputArray={this.handleInputChangeArray.bind(this)}/>
          <PanelAuctionSettings handleInput={this.handleInputChange.bind(this)}/>
          <PanelTracking handleInput={this.handleInputChange.bind(this)}/>
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

export default Creative;
