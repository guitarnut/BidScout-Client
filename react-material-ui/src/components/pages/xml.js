import React, {Component} from 'react'
import {saveXML} from "../../api/restapi";
import {VASTModel, VerificationModel} from "../../model/vast";

class XML extends Component {

  save() {
    let foo = {
      Ad: {
        InLine: {
          AdSystem: {
            value: "Ad system value",
            version: "1.0"
          },
          Category: {
            authority: "my auth",
            value: "foo"
          },
          AdVerifications: {
            Verification: [
              {
                vendor: "vendor",
                FlashResource: {
                  apiFramework: "flash",
                  value: "flash resource"
                }
              },
              {
                vendor: "vendor2",
                FlashResource: {
                  apiFramework: "flash2",
                  value: "flash resource 2"
                }
              }
            ]
          }
        }
      }
    };


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
