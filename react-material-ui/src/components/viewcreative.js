import React, {Component} from 'react'
import ModelCreative from "../model/creative";
import {getCampaignWithCreative, getCreative, getCreativeNames} from "../api/restapi";
import Stat from './stats';
import ModelCampaign from "../model/campaign";

class ViewCreative extends Component {
  state = {
    allCreatives: {},
    creative: ModelCreative,
    campaign: ModelCampaign
  };

  constructor() {
    super();

  }

  componentDidMount() {
    const {id} = this.props.match.params;

    getCreativeNames()
      .then(data => {
        this.setState({
          allCreatives: data
        })
      });
    getCreative(id)
      .then(data => {
        this.setState({
          creative: data
        });
        getCampaignWithCreative(id)
          .then(data => {
            this.setState({
              campaign: data
            })
          })
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
        <p><strong>Parent Campaign:</strong> {this.state.campaign.name}</p>
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
        <p>Enabled: {this.state.creative.enabled.toString()}</p>
        <p>Width: {this.state.creative.w}</p>
        <p>Height: {this.state.creative.h}</p>
        <p>IAB Categories: {this.state.creative.iabCategories}</p>
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
        <p>Mobile: {this.state.creative.requirements.mobile.toString()}</p>
        <p>Desktop: {this.state.creative.requirements.desktop.toString()}</p>
        <p>InApp: {this.state.creative.requirements.inapp.toString()}</p>
        <p>CTV: {this.state.creative.requirements.ctv.toString()}</p>
        <h3>Flight Dates</h3>
        <p>Start: {this.state.creative.start}</p>
        <p>End: {this.state.creative.end}</p>
        <h3>Limits</h3>
        <p>Requests: {this.state.creative.limits.requestLimit}</p>
        <p>Bid Rate: {this.state.creative.limits.bidRate}</p>
        <p>Bids: {this.state.creative.limits.bidLimit}</p>
        <p>Impressions: {this.state.creative.limits.impressionLimit}</p>
        <p>Spend: {this.state.creative.limits.revenueLimit}</p>
      </div>
    )
  }
}

export default ViewCreative;
