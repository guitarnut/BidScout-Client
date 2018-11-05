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

class Campaign extends Component {

  state = {
    name: null,
    cid: null,
    publishers: null,
    seat: null,
    nurl: null,
    impressionExpiry: 0,
    requirements: {
      userMatch: false,
      secure: false,
      publisherWhitelist: null,
      domainWhitelist: null,
      bundleWhitelist: null,
      publisherBlacklist: null,
      domainBlacklist: null,
      bundleBlacklist: null,
      mobile: false,
      desktop: false,
      inapp: false,
      ctv: false,
      startDate: null,
      endDate: null
    },
    limits: {
      requestLimit: 0,
      bidRate: 0,
      bidLimit: 0,
      impressionLimit: 0,
      revenueLimit: 0
    }
  };

  constructor() {
    super();
  }

  saveCampaign = () => {
    let headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
      'Content-Type': 'application/json'
    };
    axios.post('http://localhost:8080/api/campaign/create', this.state, {headers: headers})
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log("Error occurred while saving campaign");
        console.error(error)
      });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let keys = name.split('.');
    if (keys.length === 1) {
      this.setState({
        [name]: value
      });
    } else if (keys.length === 2) {
      let nestedProperty = {...this.state[keys[0]]};
      nestedProperty[keys[1]] = value;
      console.log(nestedProperty);
      this.setState({
        [keys[0]]: nestedProperty
      });
    }

    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Campaign</h1>
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
          <TextBox name="name" label="Campaign Name" handler={this.handleInputChange.bind(this)}/>
        </Grid>
        <Divider/>
        <h3>Supply</h3>
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
          <TextBox name="publishers" label="Publishers" handler={this.handleInputChange.bind(this)}
                   tip="Allowed Inventory"/>
        </Grid>
        <Divider/>
        <h3>Tracking and Reporting</h3>
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
          <TextBox name="cid" label="Campaign Id" handler={this.handleInputChange.bind(this)} tip="Reporting ID"/>
          <TextBox name="seat" label="Seat ID" handler={this.handleInputChange.bind(this)} tip="Bidder Seat"/>
          <TextBox name="nurl" label="Win Notice URL" handler={this.handleInputChange.bind(this)}/>
          <TextBox name="impressionExpiry" label="Impression TTL"
                   handler={this.handleInputChange.bind(this)} tip="Impression expiration in seconds"/>
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
          <TextBox name="publisherWhitelist" label="Publisher Whitelist" handler={this.handleInputChange.bind(this)}/>
          <TextBox name="domainWhitelist" label="Domain Whitelist" handler={this.handleInputChange.bind(this)}/>
          <TextBox name="bundleWhitelist" label="Bundle Whitelist" handler={this.handleInputChange.bind(this)}/>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
          <TextBox name="publisherBlacklist" label="Publisher Blacklist" handler={this.handleInputChange.bind(this)}/>
          <TextBox name="domainBlacklist" label="Domain Blacklist" handler={this.handleInputChange.bind(this)}/>
          <TextBox name="bundleBlacklist" label="Bundle Blacklist" handler={this.handleInputChange.bind(this)}/>
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
        <button onClick={this.saveCampaign.bind(this)}>Save</button>
      </div>
    )
  }
}

export default Campaign;
