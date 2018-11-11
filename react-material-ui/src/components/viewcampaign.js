import React, {Component} from 'react'
import ModelCampaign from '../model/campaign';
import {getCampaign, getCampaignNames, getCreativeNames, getCreativeNamesByCampaign} from '../api/restapi';
import Stat from './stats';

class ViewCampaign extends Component {
  state = {
    allCampaigns: [],
    campaign: ModelCampaign,
    allCreativesForCampaign: []
  };

  constructor() {
    super();
  }

  componentDidMount() {
    const {id} = this.props.match.params;

    getCampaignNames()
      .then(data => {
        this.setState({
          allCampaigns: data
        })
      });
    getCampaign(id)
      .then(data => {
        this.setState({
          campaign: data
        });
        getCreativeNamesByCampaign(this.state.campaign.id)
          .then(data => {
            this.setState({
              allCreativesForCampaign: data
            })
          })
      });

  }

  render() {
    return (
      <div>
        <h1>All Campaigns</h1>
        {Object.keys(this.state.allCampaigns).map((k) => {
          return (
            <p>{k} - {this.state.allCampaigns[k]}</p>
          )
        })}
        <h1>All Creatives for {this.state.campaign.name}</h1>
        {Object.keys(this.state.allCreativesForCampaign).map((k) => {
          return (
            <p>{k} - {this.state.allCreativesForCampaign[k]}</p>
          )
        })}
        <div>
          <h1>{this.state.campaign.name}</h1>
          <Stat title="Requests" value={this.state.campaign.statistics.requests}/>
          <Stat title="Bids" value={this.state.campaign.statistics.bids}/>
          <Stat title="NBR" value={this.state.campaign.statistics.nbr}/>
          <Stat title="Impressions" value={this.state.campaign.statistics.impressions}/>
          <Stat title="Expired Impressions" value={this.state.campaign.statistics.expiredImpressions}/>
          <Stat title="Invalid Impressions" value={this.state.campaign.statistics.invalidImpressions}/>
          <Stat title="Duplicate Impressions" value={this.state.campaign.statistics.duplicateImpressions}/>
          <Stat title="Clicks" value={this.state.campaign.statistics.clicks}/>
          <Stat title="eCPM" value={this.state.campaign.statistics.ecpm}/>
          <Stat title="Bid Price Total" value={this.state.campaign.statistics.bidPriceTotal}/>
          <Stat title="Total Spend" value={this.state.campaign.statistics.revenue}/>
          <p>Enabled: {this.state.campaign.enabled}</p>
          <p>Campaign ID: {this.state.campaign.cid}</p>
          <p>Publisher: {this.state.campaign.publisher}</p>
          <p>Seat: {this.state.campaign.seat}</p>
          <p>Nurl: {this.state.campaign.nurl}</p>
          <p>Impression TTL: {this.state.campaign.impressionExpiry}</p>
          <h3>Settings</h3>
          <p>User Match: {this.state.campaign.userMatch}</p>
          <p>Secure Bids: {this.state.campaign.secure}</p>
          <h3>Whitelist/Blacklist</h3>
          <p>Publisher Whitelist: {this.state.campaign.publisherWhitelist}</p>
          <p>Domain Whitelist: {this.state.campaign.domainWhitelist}</p>
          <p>Bundle Whitelist: {this.state.campaign.bundleWhitelist}</p>
          <p>Publisher Whitelist: {this.state.campaign.publisherBlacklist}</p>
          <p>Domain Whitelist: {this.state.campaign.domainBlacklist}</p>
          <p>Bundle Whitelist: {this.state.campaign.bundleBlacklist}</p>
          <h3>Platforms</h3>
          <p>Mobile: {this.state.campaign.mobile}</p>
          <p>Desktop: {this.state.campaign.desktop}</p>
          <p>InApp: {this.state.campaign.inapp}</p>
          <p>CTV: {this.state.campaign.ctv}</p>
          <h3>Flight Dates</h3>
          <p>Start: {this.state.campaign.start}</p>
          <p>End: {this.state.campaign.end}</p>
          <h3>Limits</h3>
          <p>Requests: {this.state.campaign.requestLimit}</p>
          <p>Bid Rate: {this.state.campaign.bidRate}</p>
          <p>Bids: {this.state.campaign.bidLimit}</p>
          <p>Impressions: {this.state.campaign.impressionLimit}</p>
          <p>Spend: {this.state.campaign.revenueLimit}</p>
        </div>
      </div>
    )
  }
}

export default ViewCampaign;
