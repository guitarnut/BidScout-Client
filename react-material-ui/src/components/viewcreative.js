import React, {Component} from 'react'
import ModelCreative from "../model/creative";
import {getCreative, getCreativeNames} from "../api/restapi";
import Stat from './stats';

class ViewCreative extends Component {
  state = {
    allCreatives: {},
    creative: ModelCreative
  };

  constructor() {
    super();

  }

  componentDidMount() {
    getCreativeNames()
      .then(data=>{
        this.setState({
          allCreatives:data
        })
      });
    getCreative("5be0afb5ea3278f806fd08cc")
      .then(data => {
        this.setState({
          creative: data
        });
      });
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.allCreatives).map((k) => {
          return (
            <p>{k} - {this.state.allCreatives[k]}</p>
          )
        })}
        <h1>{this.state.creative.name}</h1>
        <Stat title="Requests" value={this.state.creative.statistics.requests}/>
        <Stat title="Bids" value={this.state.creative.statistics.bids}/>
        <Stat title="NBR" value={this.state.creative.statistics.nbr}/>
        <Stat title="Impressions" value={this.state.creative.statistics.impressions}/>
        <Stat title="Expired Impressions" value={this.state.creative.statistics.expiredImpressions}/>
        <Stat title="Invalid Impressions" value={this.state.creative.statistics.invalidImpressions}/>
        <Stat title="Duplicate Impressions" value={this.state.creative.statistics.duplicateImpressions}/>
        <Stat title="Clicks" value={this.state.creative.statistics.clicks}/>
        <Stat title="eCPM" value={this.state.creative.statistics.ecpm}/>
        <Stat title="Bid Price Total" value={this.state.creative.statistics.bidPriceTotal}/>
        <Stat title="Total Spend" value={this.state.creative.statistics.revenue}/>
        <p>Enabled: {this.state.creative.enabled}</p>
        <p>Width: {this.state.creative.cid}</p>
        <p>Height: {this.state.creative.publisher}</p>
        <p>Type: {this.state.creative.seat}</p>
        <p>Nurl: {this.state.creative.nurl}</p>
        <p>IAB Categories: {this.state.creative.impressionExpiry}</p>
        <p>Attributes: {this.state.creative.attr}</p>
        <p>Banner Type: {this.state.creative.btype}</p>
        <p>Mimes: {this.state.creative.mimes}</p>
        <p>Ad ID: {this.state.creative.adId}</p>
        <p>Creative ID: {this.state.creative.crid}</p>
        <p>Ad Domain: {this.state.creative.adDomain}</p>
        <p>Creative URL: {this.state.creative.creativeUrl}</p>
        <p>Minimum Bid: {this.state.creative.minBid}</p>
        <p>Maximum Bid: {this.state.creative.maxBid}</p>
        <h3>Whitelist/Blacklist</h3>
        <p>Publisher Whitelist: {this.state.creative.publisherWhitelist}</p>
        <p>Domain Whitelist: {this.state.creative.domainWhitelist}</p>
        <p>Bundle Whitelist: {this.state.creative.bundleWhitelist}</p>
        <p>Publisher Whitelist: {this.state.creative.publisherBlacklist}</p>
        <p>Domain Whitelist: {this.state.creative.domainBlacklist}</p>
        <p>Bundle Whitelist: {this.state.creative.bundleBlacklist}</p>
        <h3>Platforms</h3>
        <p>Mobile: {this.state.creative.mobile}</p>
        <p>Desktop: {this.state.creative.desktop}</p>
        <p>InApp: {this.state.creative.inapp}</p>
        <p>CTV: {this.state.creative.ctv}</p>
        <h3>Flight Dates</h3>
        <p>Start: {this.state.creative.start}</p>
        <p>End: {this.state.creative.end}</p>
        <h3>Limits</h3>
        <p>Requests: {this.state.creative.requestLimit}</p>
        <p>Bid Rate: {this.state.creative.bidRate}</p>
        <p>Bids: {this.state.creative.bidLimit}</p>
        <p>Impressions: {this.state.creative.impressionLimit}</p>
        <p>Spend: {this.state.creative.revenueLimit}</p>
      </div>
    )
  }
}

export default ViewCreative;
