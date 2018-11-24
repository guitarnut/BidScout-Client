import React, {Component} from 'react'
import ModelCreative from "../../model/creative";
import {getCreative, getCreativeNames, saveCreative} from "../../api/restapi";
import {
  handleInputChange,
  handleInputChangeArray,
  handleInputChangeMulti,
  removeInputChangeMulti
} from "../../input/formInputHandler";
import UIButton from '../ui/button';
import PanelAuctionSettings from "./components/panel_auctionsettings";
import PanelProperties from "./components/panel_properties";
import PanelLists from "./components/panel_lists";
import PanelPlatforms from "./components/panel_platforms";
import PanelPacing from "./components/panel_pacing";
import PanelTracking from "./components/panel_tracking";
import PanelName from "./components/panel_name";
import PanelConfig from "./components/panel_config";
import PanelDeals from "./components/panel_deals";
import {storeAllCreatives} from "../../store/actions";
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    storeAllCreatives: creatives => dispatch(storeAllCreatives(creatives))
  }
};

class _Creative extends Component {

  state = {
    id: null,
    model: ModelCreative,
    creativeType: ''
  };

  constructor() {
    super();
  }

  componentWillMount() {
    const {id} = this.props.match.params;
    if (id !== undefined) {
      this.getCreative(id);
    }
  }

  componentDidMount() {
    this.setState({
      saving: false,
      failed: false,
    })
  }

  getCreative(id) {
    getCreative(id)
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

  save() {
    saveCreative(this.state.model)
      .then(() => {
        getCreativeNames()
          .then((data) => {
            this.props.storeAllCreatives(data);
            this.props.history.push('/bidder')
          });
      });
  };

  handleInput(event, e) {
    if (typeof event === 'string') {
      event = e;
    }
    handleInputChange(event, this);
  }

  handleInputArray(event) {
    handleInputChangeArray(event, this);
  }

  handleInputMulti(event) {
    handleInputChangeMulti(event, this);
  }

  removeInputMulti(event) {
    removeInputChangeMulti(event, this);
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
            <h2>Build Creative</h2>
          )}
          <p>Creatives are the second level item responsible for controlling bid responses. Creatives will be
            returned
            based on a size match with the bid request. If you do not wish to create multiple creatives, BidScout
            can
            instead create a 100% fill campaign that will return a creative for every bid request.</p>

          <PanelName handleInput={this.handleInput.bind(this)} value={this.state.model.name}/>
          <PanelConfig enabled={this.state.model.enabled} requirements={this.state.model.requirements}
                       handleInput={this.handleInput.bind(this)}/>
          <PanelProperties creativeType={this.state.creativeType} handleInput={this.handleInput.bind(this)}
                           handleInputArray={this.handleInputArray.bind(this)} model={this.state.model}
                           handleInputMulti={this.handleInputMulti.bind(this)} currentState={this.state.model}
                           remove={this.removeInputMulti.bind(this)}/>
          <PanelAuctionSettings handleInput={this.handleInput.bind(this)} model={this.state.model}/>
          <PanelTracking handleInput={this.handleInput.bind(this)} model={this.state.model}/>
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

const Creative = connect(null, mapDispatchToProps)(_Creative);

export default Creative;
