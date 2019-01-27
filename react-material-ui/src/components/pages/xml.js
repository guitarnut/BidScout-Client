import React, {Component} from 'react'
import SelectList from "../ui/selectlist";
import {VASTType} from "../../model/vasttype";
import TextBox from "../ui/textfield";
import UIButton from "../ui/button";
import {authorized, getAllXml, getXml, saveXML} from "../../api/restapi";
import {buildVastLinearAdModelFromState, buildVastModelFromState, buildVastStateFromResponse} from "../../builder/vast";
import {storeAllXml} from "../../store/actions";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    storeAllXml: xml => dispatch(storeAllXml(xml))
  }
};

class _XML extends Component {

  componentWillMount() {
    if(!authorized()) {
      this.props.history.push('/login')
    }
    
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
    });

    const {id} = this.props.match.params;
    if (id !== undefined) {
      this.getXml(id);
    }
  }

  getXml(id) {
    getXml(id)
      .then((data) => {
        let state = buildVastStateFromResponse(data);
        this.setState({
          ...state
        })
      })
  }

  save() {
    let data = {};
    data['vast'] = buildVastLinearAdModelFromState(this.state);
    data['name'] = this.state.name;
    data['id'] = this.state.id;
    saveXML(data)
      .then(() => {
        getAllXml()
          .then((data) => {
            this.props.storeAllXml(data);
            this.props.history.push('/bidder')
          });
      });
  }

  render() {
    return (
      <div className={'container'}>
        <div className={'col-md-12'}>
          <h2>Build VAST XML</h2>
        </div>
        <div className={'col-md-12'}>
          <p>Create a custom VAST XML response. You may use this as a VAST tag, or return it as ad markup in a
            creative.</p>
        </div>
        <div className={'col-md-12'}>
          <hr/>
        </div>
        <div className={'col-md-6'}>
          <TextBox name="name" label="Name" context={this} value={this.state.name}/>
        </div>
        <div className={'col-md-2'}>
          <TextBox name="vastVersion" label="Vast Version" context={this} value={this.state.vastVersion}/>
        </div>
        <div className={'col-md-2'}>
          <TextBox name="vastAdId" label="Ad Id" context={this} value={this.state.vastAdId}/>
        </div>
        <div className={'col-md-2'}>
          <TextBox name="vastAdSequence" label="Ad Sequence" context={this} value={this.state.vastAdSequence}/>
        </div>
        <div className={'col-md-12'}>
          <hr/>
        </div>
        <div className={'col-md-12'}>
          <SelectList name="type" data={VASTType} label='VAST XML Type' context={this} value={this.state.type}/>
        </div>
        <div className={'col-md-12'}>
          <hr/>
        </div>
        {this.state.type === 'InLine' &&
        (
          <div>
            <div className={'col-md-12'}>
              <h3>Inline</h3>
            </div>
            <div className={'col-md-6'}>
              <TextBox name="vastAdInLineAdSystemValue" label="InLine Ad System" context={this}
                       value={this.state.vastAdInLineAdSystemValue}/>
            </div>
            <div className={'col-md-6'}>
              <TextBox name="vastAdInLineAdTitle" label="InLine Ad Title" context={this}
                       value={this.state.vastAdInLineAdTitle}/>
            </div>
            <div className={'col-md-12'}>
              <hr/>
            </div>
            <div className={'col-md-12'}>
              <h3>Creative</h3>
            </div>
            <div className={'col-md-3'}>
              <TextBox name="vastAdInLineCreativesCreativeId" label="Creative Id" context={this}
                       value={this.state.vastAdInLineCreativesCreativeId}/>
            </div>
            <div className={'col-md-3'}>
              <TextBox name="vastAdInLineCreativesCreativeSequence" label="Creative Sequence" context={this}
                       value={this.state.vastAdInLineCreativesCreativeSequence}/>
            </div>
            <div className={'col-md-3'}>
              <TextBox name="vastAdInLineCreativesCreativeAdId" label="Creative Ad Id" context={this}
                       value={this.state.vastAdInLineCreativesCreativeAdId}/>
            </div>
            <div className={'col-md-3'}>
              <TextBox name="vastAdInLineCreativesCreativeApiFramework" label="Creative API Framework" context={this}
                       value={this.state.vastAdInLineCreativesCreativeApiFramework}/>
            </div>
            <div className={'col-md-12'}>
              <hr/>
            </div>
            <div className={'col-md-12'}>
              <h3>Universal Ad Id</h3>
            </div>
            <div className={'col-md-3'}>
              <TextBox name="vastAdInLineCreativesCreativeUniversalAdIdValue" label="Id" context={this}
                       value={this.state.vastAdInLineCreativesCreativeUniversalAdIdValue}/>
            </div>
            <div className={'col-md-3'}>
              <TextBox name="vastAdInLineCreativesCreativeUniversalAdIdIdValue" label="Id Value" context={this}
                       value={this.state.vastAdInLineCreativesCreativeUniversalAdIdIdValue}/>
            </div>
            <div className={'col-md-3'}>
              <TextBox name="vastAdInLineCreativesCreativeUniversalAdIdIdRegistry" label="Id Registry" context={this}
                       value={this.state.vastAdInLineCreativesCreativeUniversalAdIdIdRegistry}/>
            </div>
            <div className={'col-md-12'}>
              <hr/>
            </div>
            <div className={'col-md-12'}>
              <h3>Linear Ad</h3>
            </div>
            <div className={'col-md-3'}>
              <TextBox name="vastAdInLineCreativesCreativeLinearSkipoffset" label="Skip Offset" context={this}
                       value={this.state.vastAdInLineCreativesCreativeLinearSkipoffset}/>
            </div>
            <div className={'col-md-3'}>
              <TextBox name="vastAdInLineCreativesCreativeLinearDuration" label="Duration" context={this}
                       value={this.state.vastAdInLineCreativesCreativeLinearDuration}/>
            </div>
            <div className={'col-md-3'}>
              <TextBox name="vastAdInLineCreativesCreativeLinearAdParametersXmlEncoded"
                       label="Ad Parameters XML Encoded"
                       context={this}
                       value={this.state.vastAdInLineCreativesCreativeLinearAdParametersXmlEncoded}/>
            </div>
            <div className={'col-md-12'}>
              <TextBox name="vastAdInLineCreativesCreativeLinearAdParametersValue" label="Ad Parameters" context={this}
                       value={this.state.vastAdInLineCreativesCreativeLinearAdParametersValue}/>
            </div>
            <div className={'col-md-12'}>
              <hr/>
            </div>
            <div className={'col-md-12'}>
              <h3>Media File</h3>
            </div>
            <div className={'col-md-4'}>
              <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileId" label="ID" context={this}
                       value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileId}/>
            </div>
            <div className={'col-md-4'}>
              <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileDelivery" label="Delivery"
                       context={this}
                       value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileDelivery}/>
            </div>
            <div className={'col-md-4'}>
              <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileType" label="Type" context={this}
                       value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileType}/>
            </div>
            <div className={'col-md-2'}>
              <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileBitrate" label="Bitrate"
                       context={this}
                       value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileBitrate}/>
            </div>
            <div className={'col-md-2'}>
              <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMinBitrate" label="Min Bitrate"
                       context={this}
                       value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMinBitrate}/>
            </div>
            <div className={'col-md-2'}>
              <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaxBitrate" label="Max Bitrate"
                       context={this}
                       value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaxBitrate}/>
            </div>
            <div className={'col-md-3'}>
              <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileWidth" label="Width" context={this}
                       value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileWidth}/>
            </div>
            <div className={'col-md-3'}>
              <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileHeight" label="Height" context={this}
                       value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileHeight}/>
            </div>
            <div className={'col-md-4'}>
              <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileScalable" label="Scalable"
                       context={this}
                       value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileScalable}/>
            </div>
            <div className={'col-md-4'}>
              <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaintainAspectRatio"
                       label="Maintain Aspect Ratio" context={this}
                       value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileMaintainAspectRatio}/>
            </div>
            <div className={'col-md-4'}>
              <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileCodec" label="Codec" context={this}
                       value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileCodec}/>
            </div>
            <div className={'col-md-3'}>
              <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileApiFramework" label="API Framework"
                       context={this}
                       value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileApiFramework}/>
            </div>
            <div className={'col-md-9'}>
              <TextBox name="vastAdInLineCreativesCreativeLinearMediaFilesMediaFileValue" label="Video or Javascript Path" context={this}
                       value={this.state.vastAdInLineCreativesCreativeLinearMediaFilesMediaFileValue}/>
            </div>
          </div>
        )
        }
        {this.state.type === 'Wrapper' &&
        (
          <div className={'col-md-12'}>
            <h3>Wrapper</h3>
          </div>
        )
        }
        {this.state.type === 'Error' &&
        (
          <div className={'col-md-12'}>
            <h3>Error</h3>
          </div>
        )
        }
        {this.state.type === 'Empty' &&
        (
          <div className={'col-md-12'}>
            <h3>Empty</h3>
            <p>No further action is needed. Click 'Save' to store your empty XML.</p>
          </div>
        )
        }
        <div className={'col-md-12'}>
          <hr/>
        </div>
        <div className={'col-md-12'}>
          <UIButton text="Save" action={this.save.bind(this)} icon="save"/>
        </div>
      </div>
    )
  }
}

const XML = connect(null, mapDispatchToProps)(_XML);

export default XML;
