import React, {Component} from 'react'
import {handleInputChange, handleInputChangeArray} from "../../input/formInputHandler";
import {deleteCampaign, getCampaign, getCampaignNames, saveCampaign} from "../../api/restapi";
import ModelCampaign from "../../model/campaign";
import UIButton from '../ui/button';
import PanelName from "./components/panel_name";
import PanelLists from "./components/panel_lists";
import PanelPacing from "./components/panel_pacing";
import PanelPlatforms from "./components/panel_platforms";
import PanelConfig from "./components/panel_config";
import PanelTracking from "./components/panel_tracking";
import PanelDeals from "./components/panel_deals";
import {storeAllCampaigns} from "../../store/actions";
import {connect} from 'react-redux';
import ModelCreative from "../../model/creative";

const mapDispatchToProps = dispatch => {
  return {
    storeAllCampaigns: campaigns => dispatch(storeAllCampaigns(campaigns)),
  }
};

class _Campaign extends Component {
  state = {
    id: null,
    model: ModelCampaign
  };

  constructor() {
    super();
  }

  componentWillMount() {
    const {id} = this.props.match.params;
    if (id !== undefined) {
      this.getCampaign(id);
    }
  }

  componentDidMount() {
    this.setState({
      saving: false,
      failed: false
    })
  }

  getCampaign(id) {
    getCampaign(id)
      .then((data) => {
        this.setState({
          failed: false,
          model: data,
          id: id
        })
      })
      .catch(() => {
        this.setState({
          failed: true,
          creative: ModelCreative
        })
      })
  }

  deleteCampaign() {
    deleteCampaign(this.state.id)
      .then(() => {

      })
      .catch(() => {
        this.setState({
          failed: true
        })
      })
  }

  save = () => {
    saveCampaign(this.state.model)
      .then(() => {
        getCampaignNames()
          .then((data) => {
            this.props.storeAllCampaigns(data);
            this.props.history.push('/bidder')
          });
      });
  };

  handleInput(event) {
    handleInputChange(event, this);
  }

  handleInputArray(event) {
    handleInputChangeArray(event, this);
  }

  render() {
    if (this.state.saving) {
      return (
        <div>
          <h1>Saving {this.state.model.name}</h1>
        </div>
      )
    } else {
      return (
        <div>
          {this.state.id ? (
            <h2>Edit {this.state.model.name}</h2>
          ) : (
            <h2>Build Campaign</h2>
          )}
          <p>Your campaign is the top level item that makes decisions about your bid responses. A campaign must have one
            or more creatives associated with it. If you're looking to get up and running quickly, BidScout can generate
            a 100% fill campaign that will automatically return a bid response for any size bid, for any request.</p>
          <p>Build campaign settings and targeting.</p>

          <PanelName handleInput={this.handleInput.bind(this)} value={this.state.model.name}/>
          <PanelConfig enabled={this.state.model.enabled} requirements={this.state.model.requirements}
                       handleInput={this.handleInput.bind(this)}/>
          <PanelTracking handleInput={this.handleInput.bind(this)} model={this.state.model} isCampaign={true}/>
          <PanelLists handleInput={this.handleInputArray.bind(this)} requirements={this.state.model.requirements}/>
          <PanelDeals handleInput={this.handleInputArray.bind(this)} requirements={this.state.model.requirements}/>
          <PanelPacing handleInput={this.handleInput.bind(this)} limits={this.state.model.limits}/>
          <PanelPlatforms handleInput={this.handleInput.bind(this)}
                          requirements={this.state.model.requirements}/>

          {this.state.id ? (
            <UIButton text="Update" action={this.save.bind(this)} icon="save"/>
          ) : (
            <UIButton text="Save" action={this.save.bind(this)} icon="save"/>
          )}
        </div>
      )
    }
  }
}

const Campaign = connect(null, mapDispatchToProps)(_Campaign);

export default Campaign;
