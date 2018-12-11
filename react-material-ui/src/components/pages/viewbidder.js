import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {host} from "../../api/restapi";

class _ViewBidder extends Component {
  state = {
    campaigns: {},
    creatives: {},
    xml: {},
    selectedCampaign: '',
    selectedCreative: '',
    user: {}
  };

  constructor() {
    super();
  }

  componentDidMount() {
    this.setState({
      campaigns: this.props.campaigns,
      creatives: this.props.creatives,
      xml: this.props.xml,
      user: this.props.user
    });
  }

  render() {
    return (
      <div>
        <h2>Bidder</h2>
        <p>Endpoint: app.auctionscout.net/bid/{this.state.user.id}/[OPTIONAL_CAMPAIGN]</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed turpis sit amet purus aliquam tempor.
          Etiam cursus, erat at sagittis semper, dui lectus lacinia nisl, eu imperdiet nisi arcu vitae lectus. Mauris
          rutrum urna eu justo cursus porta. Sed viverra sodales tincidunt. Sed felis mi, semper eget arcu quis,
          vestibulum commodo erat. Vivamus ut nibh fringilla, pulvinar dolor quis, rhoncus est. Vivamus nec semper
          nisi.</p>
        {Object.keys(this.state.campaigns).length === 0 ? (
          <div className={"col-md-4"}><p>You have no campaigns. <a href="/campaign">Build a campaign.</a></p></div>
        ) : (
          <div className={"col-md-4"}>
            <h4>Campaigns</h4>
            {Object.keys(this.state.campaigns).map((v) => {
              return (
                <p><a href={'/campaign/view/' + v}>{this.state.campaigns[v]}</a></p>
              )
            })}
          </div>
        )}
        {Object.keys(this.state.creatives).length === 0 ? (
          <div className={"col-md-4"}><p>You have no creatives. <a href="/creatives">Build a creative.</a></p></div>
        ) : (
          <div className={"col-md-4"}>
            <h4>Creatives</h4>
            {Object.keys(this.state.creatives).map((v) => {
              return (
                <p><a href={'/creative/view/' + v}>{this.state.creatives[v]}</a></p>
              )
            })}
          </div>
        )}
        {Object.keys(this.state.xml).length === 0 ? (
          <div className={"col-md-4"}><p>You have no XML documents. <a href="/xml">Build XML.</a></p></div>
        ) : (
          <div className={"col-md-4"}>
            <h4>XML</h4>
            {Object.keys(this.state.xml).map((v) => {
              return (
                <p><a href={'/xml/view/' + v}>{this.state.xml[v]}</a> - <a target='_blank'
                                                                           href={host + '/vast/' + this.state.user.id + '/' + v}>View Raw</a>
                </p>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

const ViewBidder = connect(
  state => ({
    campaigns: state.campaigns,
    creatives: state.creatives,
    xml: state.xml,
    user: state.user
  })
)(_ViewBidder);

export default withRouter(ViewBidder);
