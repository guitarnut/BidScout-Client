import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {FaRegEdit} from 'react-icons/fa';
import {Panel} from 'react-bootstrap';
import UIButton from "../ui/button";
import {checkAuth, redirect} from "../../common/sharedmethods";


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

  componentWillMount() {
    checkAuth(this);
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
      <div className={'container'}>
        <div className={"col-md-12"}>
          <h2>Bidder Configuration</h2>
          <p>Build campaigns, creatives, and VAST XML documents for your integration testing.</p>
          <hr/>
        </div>
        {Object.keys(this.state.campaigns).length === 0 ? (
          <div className={"col-md-4"}><p>You have no campaigns. <a href="/campaign">Build a campaign.</a></p></div>
        ) : (
          <div className={"col-md-4"}>
            <div className={"col-md-8"}>
              <h4>Campaigns</h4>
            </div>
            <div className={"col-md-4"}>
              <UIButton text={'New'} action={redirect.bind(this, '/creative')}></UIButton>
            </div>
            <p>
              <hr/>
            </p>
            {Object.keys(this.state.campaigns).map((v) => {
              return (
                <Panel key={v}>
                  <Panel.Body>
                    <p key={v}><a href={'/campaign/view/' + v}>{this.state.campaigns[v]}</a><br/>
                      <hr/>
                      <a href={'/campaign/edit/' + v}><FaRegEdit/> Edit</a></p>
                  </Panel.Body>
                </Panel>
              )
            })}
          </div>
        )}
        {Object.keys(this.state.creatives).length === 0 ? (
          <div className={"col-md-4"}><p>You have no creatives. <a href="/creative">Build a creative.</a></p></div>
        ) : (
          <div className={"col-md-4"}>
            <div className={"col-md-8"}>
              <h4>Creatives</h4>
            </div>
            <div className={"col-md-4"}>
              <UIButton text={'New'} action={redirect.bind(this, '/creative')}></UIButton>
            </div>
            <p>
              <hr/>
            </p>
            {Object.keys(this.state.creatives).map((v) => {
              return (
                <Panel key={v}>
                  <Panel.Body>
                    <p key={v}><a href={'/creative/view/' + v}>{this.state.creatives[v]}</a><br/>
                      <hr/>
                      <a href={'/creative/edit/' + v}><FaRegEdit/> Edit</a></p>
                  </Panel.Body>
                </Panel>
              )
            })}
          </div>
        )}
        {Object.keys(this.state.xml).length === 0 ? (
          <div className={"col-md-4"}><p>You have no XML documents. <a href="/xml">Build XML.</a></p></div>
        ) : (
          <div className={"col-md-4"}>
            <div className={"col-md-8"}>
              <h4>VAST</h4>
            </div>
            <div className={"col-md-4"}>
              <UIButton text={'New'} action={redirect.bind(this, '/creative')}></UIButton>
            </div>
            <p>
              <hr/>
            </p>
            {Object.keys(this.state.xml).map((v) => {
              return (
                <Panel key={v}>
                  <Panel.Body>
                    <p key={v}><a href={'/xml/view/' + v}>{this.state.xml[v]}</a><br/>
                      <hr/>
                      <a href={'/xml/edit/' + v}><FaRegEdit/> Edit</a>
                    </p>
                  </Panel.Body>
                </Panel>
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
