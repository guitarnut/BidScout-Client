import React, {Component} from 'react'
import SelectList from "../ui/selectlist";
import {VASTType} from "../../model/vasttype";
import TextBox from "../ui/textfield";
import UIButton from "../ui/button";
import {saveXML} from "../../api/restapi";
import {VASTModel} from "../../model/vast";

class XML extends Component {

  componentWillMount() {
    this.setState({
      name: null,
      vastVersion: null,
      vastAdId: null,
      vastAdSequence: null,
      vastAdConditionalAd: null,
      vastAdInLineAdSystemValue: null,
      type: 'InLine',
      creatives: [],
      creative: {},
      mediaFile: {}
    })
  }

  save() {
    let vast = VASTModel;
    vast.version = this.state.vastVersion;
    vast.Ad.InLine.AdSystem.value = this.state.vastAdInLineAdSystemValue;

    this.state['vast'] = vast;
    saveXML(this.state);
  }

  render() {
    return (
      <div>
        <h2>XML</h2>
        <TextBox name="name" label="Name" context={this} value={this.state.name}/>
        <TextBox name="vastVersion" label="Vast Version" context={this} value={this.state.vastVersion}/>
        <SelectList name="type" data={VASTType} label='VAST XML Type' context={this} value={this.state.type}/>
        {this.state.type === 'InLine' &&
        (
          <div>
            <h3>Inline</h3>
            <TextBox name="vastAdInLineAdSystemValue" label="Ad System" context={this}
                     value={this.state.vastAdInLineAdSystemValue}/>
          </div>
        )
        }
        {this.state.type === 'Wrapper' &&
        (
          <div>
            <h3>Wrapper</h3>
          </div>
        )
        }
        {this.state.type === 'Error' &&
        (
          <div>
            <h3>Error</h3>
          </div>
        )
        }
        {this.state.type === 'Empty' &&
        (
          <div>
            <h3>Empty</h3>
            <p>No further action is needed. Click 'Save' to store your empty XML.</p>
          </div>
        )
        }
        <UIButton text="Save" action={this.save.bind(this)} icon="save"/>
      </div>
    )
  }
}

export default XML;
