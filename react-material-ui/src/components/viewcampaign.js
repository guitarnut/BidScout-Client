import React, {Component} from 'react'
import ModelCampaign from '../model/campaign';
import {getCampaign} from '../api/restapi';
import Stat from './stats';

class ViewCampaign extends Component {
  state = ModelCampaign;

  constructor() {
    super();
  }

  componentDidMount() {
    getCampaign('5be0af66ea3278f806fd08cb')
      .then(data => {
        this.setState(data);
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <Stat title="Requests" value={this.state.statistics.requests}/>
        <Stat title="Bids" value={this.state.statistics.bids}/>
        <Stat title="NBR" value={this.state.statistics.nbr}/>
        <Stat title="Impressions" value={this.state.statistics.impressions}/>
        <Stat title="Expired Impressions" value={this.state.statistics.expiredImpressions}/>
        <Stat title="Invalid Impressions" value={this.state.statistics.invalidImpressions}/>
        <Stat title="Duplicate Impressions" value={this.state.statistics.duplicateImpressions}/>
        <Stat title="Clicks" value={this.state.statistics.clicks}/>
        <Stat title="eCPM" value={this.state.statistics.ecpm}/>
        <Stat title="Bid Price Total" value={this.state.statistics.bidPriceTotal}/>
        <Stat title="Total Spend" value={this.state.statistics.revenue}/>
        <p>Enabled: {this.state.enabled}</p>
        <p>Campaign ID: {this.state.cid}</p>
        <p>Publisher: {this.state.publisher}</p>
        <p>Seat: {this.state.seat}</p>
        <p>Nurl: {this.state.nurl}</p>
        <p>Impression TTL: {this.state.impressionExpiry}</p>
        <h3>Settings</h3>
        <p>User Match: {this.state.userMatch}</p>
        <p>Secure Bids: {this.state.secure}</p>
        <h3>Whitelist/Blacklist</h3>
        <p>Publisher Whitelist: {this.state.publisherWhitelist}</p>
        <p>Domain Whitelist: {this.state.domainWhitelist}</p>
        <p>Bundle Whitelist: {this.state.bundleWhitelist}</p>
        <p>Publisher Whitelist: {this.state.publisherBlacklist}</p>
        <p>Domain Whitelist: {this.state.domainBlacklist}</p>
        <p>Bundle Whitelist: {this.state.bundleBlacklist}</p>
        <h3>Platforms</h3>
        <p>Mobile: {this.state.mobile}</p>
        <p>Desktop: {this.state.desktop}</p>
        <p>InApp: {this.state.inapp}</p>
        <p>CTV: {this.state.ctv}</p>
        <h3>Flight Dates</h3>
        <p>Start: {this.state.start}</p>
        <p>End: {this.state.end}</p>
        <h3>Limits</h3>
        <p>Requests: {this.state.requestLimit}</p>
        <p>Bid Rate: {this.state.bidRate}</p>
        <p>Bids: {this.state.bidLimit}</p>
        <p>Impressions: {this.state.impressionLimit}</p>
        <p>Spend: {this.state.revenueLimit}</p>
      </div>
    )
  }
}

export default ViewCampaign;
