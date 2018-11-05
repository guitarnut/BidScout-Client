import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import TextBox from './textfield';
import Switcher from './switch'
import {handleInputChange, handleInputChangeArray} from "../input/formInputHandler";
import {saveCampaign} from "../api/restapi";
import ModelCampaign from "../model/campaign";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import UIButton from './button';
import SelectCheck from './selectcheck';
import ProgressChip from "./progresschip";

class Campaign extends Component {
  state = ModelCampaign;

  constructor() {
    super();
    this.setState({
      ['expanded']: null
    });
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

  handlePanel = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  isExpanded(v) {
    return this.state.expanded === v;
  }

  render() {
    return (
      <div>
        <h1>Campaign</h1>
        <p>Build campaign settings and targeting</p>
        <ExpansionPanel expanded={this.isExpanded('name')}
                        onChange={this.handlePanel('name')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography>Name</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextBox name="name" label="Campaign Name" handler={this.handleInputChange.bind(this)}/>
            <TextBox name="publisher" label="Publisher" handler={this.handleInputChange.bind(this)}/>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel expanded={this.isExpanded('config')}
                        onChange={this.handlePanel('config')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography>Configuration</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Switcher
              name="enabled"
              label="Campaign Enabled"
              value={this.state.enabled}
              handler={this.handleInputChange.bind(this)}
            />
            <Switcher
              name="requirements.userMatch"
              label="Require User Match"
              value={this.state.requirements.userMatch}
              handler={this.handleInputChange.bind(this)}
            />
            <Switcher
              name="requirements.secure"
              label="Require Secure Bids"
              value={this.state.requirements.secure}
              handler={this.handleInputChange.bind(this)}
            />
            <TextField name="requirements.startDate" id="datetime-local" label="Campaign Start" type="datetime-local"
                       InputLabelProps={{
                         shrink: true,
                       }}
                       onChange={this.handleInputChange.bind(this)}
            />
            <TextField name="requirements.endDate" id="datetime-local" label="Campaign End" type="datetime-local"
                       InputLabelProps={{
                         shrink: true,
                       }}
                       onChange={this.handleInputChange.bind(this)}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel expanded={this.isExpanded('tracking')}
                        onChange={this.handlePanel('tracking')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography>Tracking and Reporting</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextBox name="cid" label="Campaign Id" handler={this.handleInputChange.bind(this)} tip="Reporting ID"/>
            <TextBox name="seat" label="Seat ID" handler={this.handleInputChange.bind(this)} tip="Bidder Seat"/>
            <TextBox name="nurl" label="Win Notice URL" handler={this.handleInputChange.bind(this)}/>
            <TextBox name="impressionExpiry" label="Impression TTL"
                     handler={this.handleInputChange.bind(this)} tip="Impression expiration in seconds"/>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel expanded={this.isExpanded('whitelist')}
                        onChange={this.handlePanel('whitelist')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography>Whitelist and Blacklist</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextBox name="requirements.publisherWhitelist" label="Publisher Whitelist"
                     handler={this.handleInputChangeArray.bind(this)}/>
            <TextBox name="requirements.domainWhitelist" label="Domain Whitelist"
                     handler={this.handleInputChangeArray.bind(this)}/>
            <TextBox name="requirements.bundleWhitelist" label="Bundle Whitelist"
                     handler={this.handleInputChangeArray.bind(this)}/>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <TextBox name="requirements.publisherBlacklist" label="Publisher Blacklist"
                     handler={this.handleInputChangeArray.bind(this)}/>
            <TextBox name="requirements.domainBlacklist" label="Domain Blacklist"
                     handler={this.handleInputChangeArray.bind(this)}/>
            <TextBox name="requirements.bundleBlacklist" label="Bundle Blacklist"
                     handler={this.handleInputChangeArray.bind(this)}/>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel expanded={this.isExpanded('pacing')}
                        onChange={this.handlePanel('pacing')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography>Pacing</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextBox name="limits.requestLimit" label="Request Limit" handler={this.handleInputChange.bind(this)}/>
            <TextBox name="limits.bidRate" label="Bid Rate" handler={this.handleInputChange.bind(this)}/>
            <TextBox name="limits.bidLimit" label="Bid Limit" handler={this.handleInputChange.bind(this)}/>
            <TextBox name="limits.impressionLimit" label="Impression Limit"
                     handler={this.handleInputChange.bind(this)}/>
            <TextBox name="limits.revenueLimit" label="Revenue Limit" handler={this.handleInputChange.bind(this)} prefix="$"/>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel expanded={this.isExpanded('platforms')}
                        onChange={this.handlePanel('platforms')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography>Platforms</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Switcher
              name="requirements.desktop"
              label="Desktop"
              value={this.state.requirements.desktop}
              handler={this.handleInputChange.bind(this)}
            />
            <Switcher
              name="requirements.mobile"
              label="Mobile"
              value={this.state.requirements.mobile}
              handler={this.handleInputChange.bind(this)}
            />
            <Switcher
              name="requirements.inapp"
              label="InApp"
              value={this.state.requirements.inapp}
              handler={this.handleInputChange.bind(this)}
            />
            <Switcher
              name="requirements.ctv"
              label="CTV"
              value={this.state.requirements.ctv}
              handler={this.handleInputChange.bind(this)}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <br/>
        <UIButton action={this.save.bind(this)}/>
      </div>
    )
  }
}

export default Campaign;
