import React, {Component} from 'react'
import {saveXML} from "../../api/restapi";
import VAST from "../../model/vast";

class XML extends Component {

  save() {
    let foo = VAST;
    foo.ad.inLine.adSystem.value = "my value";
    foo.ad.inLine.adSystem.version = "1.0";
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
