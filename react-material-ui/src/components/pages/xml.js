import React, {Component} from 'react'
import {saveXML} from "../../api/restapi";
import VAST from "../../model/vast";

class XML extends Component {

  save() {
    let foo = VAST;
    foo.Ad.InLine.AdSystem.value = "my value";
    foo.Ad.InLine.AdSystem.version = "1.0";
    saveXML(foo)
  }

  render() {
    return (
      <div>
        <h2>XML</h2>
        <p onClick={this.save.bind(this)}>Run</p>
      </div>
    )
  }
}

export default XML;
