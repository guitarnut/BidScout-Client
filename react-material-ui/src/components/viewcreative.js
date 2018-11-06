import React, {Component} from 'react'
import ModelCampaign from "../model/campaign";
import {getCreative} from "../api/restapi";
import Stat from './stats';

class ViewCreative extends Component {
  state = ModelCampaign;

  constructor() {
    super();

  }

  componentDidMount() {
    getCreative("5be0afb5ea3278f806fd08cc")
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
        <Stat title="Clicks" value={this.state.statistics.clicks}/>
        <Stat title="eCPM" value={this.state.statistics.ecpm}/>
        <Stat title="Bid Price Total" value={this.state.statistics.bidPriceTotal}/>
        <Stat title="Total Spend" value={this.state.statistics.revenue}/>
        <p>Enabled: {this.state.enabled}</p>
        <p>Width: {this.state.cid}</p>
        <p>Height: {this.state.publisher}</p>
        <p>Type: {this.state.seat}</p>
        <p>Nurl: {this.state.nurl}</p>
        <p>IAB Categories: {this.state.impressionExpiry}</p>
        <p>Attributes: {this.state.attr}</p>
        <p>Banner Type: {this.state.btype}</p>
        <p>Mimes: {this.state.mimes}</p>
        <p>Ad ID: {this.state.adId}</p>
        <p>Creative ID: {this.state.crid}</p>
        <p>Ad Domain: {this.state.adDomain}</p>
        <p>Creative URL: {this.state.creativeUrl}</p>
        <p>Minimum Bid: {this.state.minBid}</p>
        <p>Maximum Bid: {this.state.maxBid}</p>
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

export default ViewCreative;
