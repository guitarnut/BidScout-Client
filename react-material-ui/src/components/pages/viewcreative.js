import React, {Component} from 'react'
import ModelCreative from "../../model/creative";
import {deleteCreative, getCampaignWithCreative, getCreative, getCreativeNames} from "../../api/restapi";
import Limits from "./components/limits";
import Platforms from "./components/platforms";
import Lists from "./components/lists";
import Stats from "./components/stats";
import Flight from "./components/flight";
import CreativeProps from "./components/creativeproperties";
import {withRouter} from 'react-router-dom';
import Deals from "./components/deals";
import {connect} from "react-redux";
import {storeAllCreatives} from "../../store/actions";

const mapDispatchToProps = dispatch => {
  return {
    storeAllCreatives: creatives => dispatch(storeAllCreatives(creatives))
  }
};

class _ViewCreative extends Component {
  state = {
    allCreatives: {},
    creative: ModelCreative,
    campaign: null,
    campaignLink: ''
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
            if (data === '') {
              return;
            }
            let link = '/campaign/view/' + data.id;
            this.setState({
              campaign: data,
              campaignLink: link
            })
          })
      });
  }

  edit() {
    this.props.history.push('/creative/edit/' + this.state.creative.id);
  }

  view(v) {
    this.props.history.push('/creative/view/' + v);
  }

  remove() {
    deleteCreative(this.state.creative.id)
      .then(() => {
        getCreativeNames()
          .then((data) => {
            this.props.storeAllCreatives(data);
            this.props.history.push('/bidder')
          });
      })
      .catch(() => {
        this.setState({
          failed: true
        })
      })
  }

  render() {
    return (
      <div>
        <div class="row">
          <h4>All Creatives</h4>
          {Object.keys(this.state.allCreatives).map((v) => {
            return (
              <p><a onClick={this.view.bind(this, v)}>View</a> - {this.state.allCreatives[v]}</p>
            )
          })}

          <h4>Creative {this.state.creative.name}</h4>
          <p><a onClick={this.edit.bind(this)}>Edit</a> | <a
            onClick={this.remove.bind(this)}>Delete</a></p>

          {this.state.campaign !== null ? (
            <p><strong>Parent Campaign:</strong> <a href={this.state.campaignLink}>{this.state.campaign.name}</a></p>
          ) : (
            <p>No parent campaign aligned with this creative.</p>
          )}
        </div>
        <div className="row">
          <Stats data={this.state.creative.statistics}/>
          <CreativeProps data={this.state.creative}/>
          <Lists data={this.state.creative.requirements}/>
          <Deals data={this.state.creative.requirements}/>
          <Platforms data={this.state.creative.requirements}/>
          <Flight data={this.state.creative}/>
          <Limits data={this.state.creative.limits}/>
        </div>
      </div>
    )
  }
}

const ViewCreative = connect(null, mapDispatchToProps)(_ViewCreative);

export default withRouter(ViewCreative);
