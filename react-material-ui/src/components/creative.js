import React, {Component} from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import TextBox from './textfield';
import DateBox from './textfield';
import Divider from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Switcher from './switch'
import ModelCreative from "../model/creative";
import {saveCreative} from "../api/restapi";
import {handleInputChange, handleInputChangeArray} from "../input/formInputHandler";

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
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
          <TextBox name="name" label="Name" handler={this.handleInputChange.bind(this)}/>
          <Switcher
            name="enabled"
            label="Enabled"
            value={this.state.enabled}
            handler={this.handleInputChange.bind(this)}
          />
        </Grid>
        <Divider/>
        <Divider/>
        <h3>Properties</h3>
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
          <TextBox name="width" label="Width" handler={this.handleInputChange.bind(this)}/>
          <TextBox name="height" label="Height" handler={this.handleInputChange.bind(this)}/>
          <TextBox name="type" label="Type" handler={this.handleInputChange.bind(this)}/>
          <TextBox name="iabCategories" label="IAB Categories" handler={this.handleInputChangeArray.bind(this)}/>
          <TextBox name="attr" label="Attributes" handler={this.handleInputChangeArray.bind(this)}/>
          <TextBox name="btype" label="Banner Type" handler={this.handleInputChangeArray.bind(this)}/>
          <TextBox name="mimes" label="Mimes" handler={this.handleInputChangeArray.bind(this)}/>
          <TextBox name="adDomain" label="Ad Domains" handler={this.handleInputChangeArray.bind(this)}/>
          <TextBox name="creativeUrl" label="Asset URL" handler={this.handleInputChange.bind(this)}/>
        </Grid>
        <Divider/>
        <h3>Auction Settings</h3>
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
          <TextBox name="minBid" label="Minimum Bid" handler={this.handleInputChange.bind(this)}/>
          <TextBox name="maxBid" label="Maximum Bid" handler={this.handleInputChange.bind(this)}/>
        </Grid>
        <Divider/>
        <h3>Tracking and Reporting</h3>
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
          <TextBox name="crid" label="Creative ID" handler={this.handleInputChange.bind(this)}/>
          <TextBox name="adId" label="Ad ID" handler={this.handleInputChange.bind(this)}/>
        </Grid>
        <Divider/>
        <h3>Users</h3>
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
          <Switcher
            name="requirements.userMatch"
            label="Require User Match"
            value={this.state.requirements.userMatch}
            handler={this.handleInputChange.bind(this)}
          />
        </Grid>
        <Divider/>
        <h3>HTTP</h3>
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
          <Switcher
            name="requirements.secure"
            label="Require Secure Bids"
            value={this.state.requirements.secure}
            handler={this.handleInputChange.bind(this)}
          />
        </Grid>
        <Divider/>
        <h3>Whitelist/Blacklist</h3>
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
          <TextBox name="requirements.publisherWhitelist" label="Publisher Whitelist" handler={this.handleInputChangeArray.bind(this)}/>
          <TextBox name="requirements.domainWhitelist" label="Domain Whitelist" handler={this.handleInputChangeArray.bind(this)}/>
          <TextBox name="requirements.bundleWhitelist" label="Bundle Whitelist" handler={this.handleInputChangeArray.bind(this)}/>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
          <TextBox name="requirements.publisherBlacklist" label="Publisher Blacklist" handler={this.handleInputChangeArray.bind(this)}/>
          <TextBox name="requirements.domainBlacklist" label="Domain Blacklist" handler={this.handleInputChangeArray.bind(this)}/>
          <TextBox name="requirements.bundleBlacklist" label="Bundle Blacklist" handler={this.handleInputChangeArray.bind(this)}/>
        </Grid>
        <Divider/>
        <h3>Pacing</h3>
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
          <TextBox name="limits.requestLimit" label="Request Limit" handler={this.handleInputChange.bind(this)}/>
          <TextBox name="limits.bidRate" label="Bid Rate" handler={this.handleInputChange.bind(this)}/>
          <TextBox name="limits.bidLimit" label="Bid Limit" handler={this.handleInputChange.bind(this)}/>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
          <TextBox name="limits.impressionLimit" label="Impression Limit" handler={this.handleInputChange.bind(this)}/>
          <TextBox name="limits.revenueLimit" label="Revenue Limit" handler={this.handleInputChange.bind(this)}/>
        </Grid>
        <Divider/>
        <h3>Platforms</h3>
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
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
        </Grid>
        <Divider/>
        <h3>Flight Dates</h3>
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
          <TextField name="requirements.startDate" id="datetime-local" label="Start" type="datetime-local"
                     InputLabelProps={{
                       shrink: true,
                     }}
                     onChange={this.handleInputChange.bind(this)}
          />
          <TextField name="requirements.endDate" id="datetime-local" label="End" type="datetime-local"
                     InputLabelProps={{
                       shrink: true,
                     }}
                     onChange={this.handleInputChange.bind(this)}
          />
        </Grid>
        <button onClick={this.save.bind(this)}>Save</button>
      </div>
    )
  }
}

export default Creative;
