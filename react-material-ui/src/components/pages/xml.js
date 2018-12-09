import React, {Component} from 'react'
import SelectList from "../ui/selectlist";
import {VASTType} from "../../model/vasttype";
import TextBox from "../ui/textfield";
import UIButton from "../ui/button";
import {saveXML} from "../../api/restapi";
import {VASTModel} from "../../model/vast";
import {buildVastModelFromState} from "../../builder/vast";

class XML extends Component {

  componentWillMount() {
    this.setState({
      name: '',
      type: 'InLine',

      vastVersion: '',

      vastAdId: '',
      vastAdSequence: '',

      // add wrapper

      vastAdInLineAdSystemValue: '',
      vastAdInLineAdTitle: '',

      vastAdInLineCreativesCreativeId: '',
      vastAdInLineCreativesCreativeSequence: '',
      vastAdInLineCreativesCreativeAdId: '',
      vastAdInLineCreativesCreativeApiFramework: '',

      vastAdInLineCreativesCreativeUniversalAdIdIdRegistry: '',
      vastAdInLineCreativesCreativeUniversalAdIdIdValue: '',
      vastAdInLineCreativesCreativeUniversalAdIdValue: '',

      vastAdInLineCreativesCreativeLinearSkipoffset: '',
      vastAdInLineCreativesCreativeLinearDuration: '',
      vastAdInLineCreativesCreativeLinearAdParametersXmlEncoded: '',
      vastAdInLineCreativesCreativeLinearAdParametersValue: '',

      vastAdInLineCreativesCreativeLinearMediaFilesMediaFileId: '',
      vastAdInLineCreativesCreativeLinearMediaFilesMediaFileDelivery: '',
      vastAdInLineCreativesCreativeLinearMediaFilesMediaFileType: '',
      vastAdInLineCreativesCreativeLinearMediaFilesMediaFileBitrate: '',
      vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMinBitrate: '',
      vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaxBitrate: '',
      vastAdInLineCreativesCreativeLinearMediaFilesMediaFileWidth: '',
      vastAdInLineCreativesCreativeLinearMediaFilesMediaFileHeight: '',
      vastAdInLineCreativesCreativeLinearMediaFilesMediaFileScalable: '',
      vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaintainAspectRatio: '',
      vastAdInLineCreativesCreativeLinearMediaFilesMediaFileCodec: '',
      vastAdInLineCreativesCreativeLinearMediaFilesMediaFileApiFramework: '',
      vastAdInLineCreativesCreativeLinearMediaFilesMediaFileValue: ''
    })
  }

  save() {
    let data ={};
    data['vast'] = buildVastModelFromState(this.state);
    data['name'] = this.state.name;
    saveXML(data);
  }

  render() {
    return (
      <div>
        <h2>XML</h2>
        <TextBox name="name" label="Name" context={this} value={this.state.name}/>
        <TextBox name="vastVersion" label="Vast Version" context={this} value={this.state.vastVersion}/>
        <TextBox name="vastAdId" label="Ad Id" context={this} value={this.state.vastAdId}/>
        <TextBox name="vastAdSequence" label="Ad Sequence" context={this} value={this.state.vastAdSequence}/>

        <SelectList name="type" data={VASTType} label='VAST XML Type' context={this} value={this.state.type}/>
        {this.state.type === 'InLine' &&
        (
          <div>
            <h3>Inline</h3>
            <TextBox name="vastAdInLineAdSystemValue" label="InLine Ad System" context={this}
                     value={this.state.vastAdInLineAdSystemValue}/>
            <TextBox name="vastAdInLineAdTitle" label="InLine Ad Title" context={this}
                     value={this.state.vastAdInLineAdTitle}/>

            <h3>Creative</h3>
            <TextBox name="vastAdInLineCreativesCreativeId" label="Creative Id" context={this}
                     value={this.state.vastAdInLineCreativesCreativeId}/>
            <TextBox name="vastAdInLineCreativesCreativeSequence" label="Creative Sequence" context={this}
                     value={this.state.vastAdInLineCreativesCreativeSequence}/>
            <TextBox name="vastAdInLineCreativesCreativeAdId" label="Creative Ad Id" context={this}
                     value={this.state.vastAdInLineCreativesCreativeAdId}/>
            <TextBox name="vastAdInLineCreativesCreativeApiFramework" label="Creative API Framework" context={this}
                     value={this.state.vastAdInLineCreativesCreativeApiFramework}/>

            <h3>Universal Ad Id</h3>
            <TextBox name="vastAdInLineCreativesCreativeUniversalAdIdValue" label="Id" context={this}
                     value={this.state.vastAdInLineCreativesCreativeUniversalAdIdValue}/>
            <TextBox name="vastAdInLineCreativesCreativeUniversalAdIdIdValue" label="Id Value" context={this}
                     value={this.state.vastAdInLineCreativesCreativeUniversalAdIdIdValue}/>
            <TextBox name="vastAdInLineCreativesCreativeUniversalAdIdIdRegistry" label="Id Registry" context={this}
                     value={this.state.vastAdInLineCreativesCreativeUniversalAdIdIdRegistry}/>

            <h3>Linear Ad</h3>
            <TextBox name="vastAdInLineCreativesCreativeLinearSkipoffset" label="Skip Offset" context={this}
                     value={this.state.vastAdInLineCreativesCreativeLinearSkipoffset}/>
            <TextBox name="vastAdInLineCreativesCreativeLinearDuration" label="Duration" context={this}
                     value={this.state.vastAdInLineCreativesCreativeLinearDuration}/>
            <TextBox name="vastAdInLineCreativesCreativeLinearAdParametersValue" label="Ad Parameters" context={this}
                     value={this.state.vastAdInLineCreativesCreativeLinearAdParametersValue}/>
            <TextBox name="vastAdInLineCreativesCreativeLinearAdParametersXmlEncoded" label="Ad Parameters XML Encoded"
                     context={this}
                     value={this.state.vastAdInLineCreativesCreativeLinearAdParametersXmlEncoded}/>

            <h3>Media File</h3>
            <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileId" label="ID" context={this}
                     value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileId}/>
            <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileDelivery" label="Delivery"
                     context={this}
                     value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileDelivery}/>
            <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileType" label="Type" context={this}
                     value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileType}/>
            <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileBitrate" label="Bitrate" context={this}
                     value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileBitrate}/>
            <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMinBitrate" label="Min Bitrate"
                     context={this}
                     value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMinBitrate}/>
            <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaxBitrate" label="Max Bitrate"
                     context={this}
                     value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaxBitrate}/>
            <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileWidth" label="Width" context={this}
                     value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileWidth}/>
            <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileHeight" label="Height" context={this}
                     value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileHeight}/>
            <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileScalable" label="Scalable"
                     context={this}
                     value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileScalable}/>
            <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaintainAspectRatio"
                     label="Maintain Aspect Ratio" context={this}
                     value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaintainAspectRatio}/>
            <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileCodec" label="Codec" context={this}
                     value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileCodec}/>
            <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileApiFramework" label="API Framework"
                     context={this}
                     value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileApiFramework}/>
            <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileValue" label="Value" context={this}
                     value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileValue}/>
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
