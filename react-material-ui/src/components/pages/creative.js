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

class Creative extends Component {

  state = ModelCreative;

  constructor() {
    super();
  }

  save = () => {
    saveCreative(this.state);
  };

  handleInputChange(event) {
    handleInputChange(event, this);
  }

  handleInputChangeArray(event) {
    handleInputChangeArray(event, this);
  }

  render() {
    return (
      <div>
        <h1>Creative</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed turpis sit amet purus aliquam tempor.
          Etiam cursus, erat at sagittis semper, dui lectus lacinia nisl, eu imperdiet nisi arcu vitae lectus. Mauris
          rutrum urna eu justo cursus porta. Sed viverra sodales tincidunt. Sed felis mi, semper eget arcu quis,
          vestibulum commodo erat. Vivamus ut nibh fringilla, pulvinar dolor quis, rhoncus est. Vivamus nec semper nisi.
          Nulla sit amet laoreet est. Vivamus nec tincidunt orci. Ut ex leo, aliquet faucibus maximus sed, varius eu
          neque. Ut placerat est mauris.</p>

        <PanelName handleInput={this.handleInputChange.bind(this)}/>
        <PanelConfig enabled={this.state.enabled} requirements={this.state.requirements} handleInput={this.handleInputChange.bind(this)}/>
        <PanelProperties handleInput={this.handleInputChange.bind(this)} handleInputArray={this.handleInputChangeArray.bind(this)}/>
        <PanelAuctionSettings handleInput={this.handleInputChange.bind(this)}/>
        <PanelTracking handleInput={this.handleInputChange.bind(this)}/>
        <PanelLists handleInput={this.handleInputChangeArray.bind(this)}/>
        <PanelPacing handleInput={this.handleInputChange.bind(this)}/>
        <PanelPlatforms handleInput={this.handleInputChange.bind(this)} requirements={this.state.requirements}/>

        <UIButton text="Save" action={this.save.bind(this)} icon="save"/>
      </div>
    )
  }
}

export default Creative;
