import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import TextBox from '../ui/textfield';
import Switcher from '../ui/switch'
import {handleInputChange, handleInputChangeArray} from "../../input/formInputHandler";
import {saveCampaign} from "../../api/restapi";
import ModelCampaign from "../../model/campaign";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import UIButton from '../ui/button';
import PanelName from "./components/panel_name";
import PanelLists from "./components/panel_lists";
import PanelPacing from "./components/panel_pacing";
import PanelPlatforms from "./components/panel_platforms";
import PanelConfig from "./components/panel_config";
import PanelTracking from "./components/panel_tracking";

class Campaign extends Component {
  state = ModelCampaign;

  constructor() {
    super();
  }

  componentDidMount() {
    this.setState({
      ['expanded']: null
    })
  }

  save = () => {
    saveCampaign(this.state);
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
        <h1>Campaign</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed turpis sit amet purus aliquam tempor.
          Etiam cursus, erat at sagittis semper, dui lectus lacinia nisl, eu imperdiet nisi arcu vitae lectus. Mauris
          rutrum urna eu justo cursus porta. Sed viverra sodales tincidunt. Sed felis mi, semper eget arcu quis,
          vestibulum commodo erat. Vivamus ut nibh fringilla, pulvinar dolor quis, rhoncus est. Vivamus nec semper nisi.
          Nulla sit amet laoreet est. Vivamus nec tincidunt orci. Ut ex leo, aliquet faucibus maximus sed, varius eu
          neque. Ut placerat est mauris.</p>
        <p>Build campaign settings and targeting</p>

        <PanelName handleInput={this.handleInputChange.bind(this)}/>
        <PanelConfig enabled={this.state.enabled} requirements={this.state.requirements} handleInput={this.handleInputChange.bind(this)}/>
        <PanelTracking handleInput={this.handleInputChange.bind(this)} isCampaign={true}/>
        <PanelLists handleInput={this.handleInputChangeArray.bind(this)}/>
        <PanelPacing handleInput={this.handleInputChange.bind(this)}/>
        <PanelPlatforms handleInput={this.handleInputChange.bind(this)} requirements={this.state.requirements}/>

        <UIButton text="Save" action={this.save.bind(this)} icon="save"/>
      </div>
    )
  }
}

export default Campaign;
