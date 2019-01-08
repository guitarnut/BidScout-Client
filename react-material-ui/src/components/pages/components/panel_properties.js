import React from 'react';
import {Panel} from 'react-bootstrap';
import TextBox from '../../ui/textfield';
import SelectList from "../../ui/selectlist";
import {CreativeType} from "../../../const/creativetype";
import {DisplayCreativeType} from "../../../const/displaytypes";
import {Attributes, BannerTypes, DisplayMimes} from "../../../const/openrtb";
import MultiSelect from "../../ui/selectmulti";
import TextArea from "../../ui/textarea";

const PanelProperties = (props) =>
  <Panel>
    <Panel.Heading>
      <Panel.Title toggle>Properties</Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
      <Panel.Body>
        <div className={'col-md-12'}>
          <p>A value of 10 will bid on every eligible request. A value of 0 will never
            bid. Select a value between
            0-10 to determine bid frequency.</p>
          <TextBox name="bidFrequency" label="Bid Frequency" context={props.context}
                   value={props.parentState.bidFrequency}/>
        </div>
        <div className={'col-md-12'}>
          <hr/>
        </div>
        <div className={'col-md-12'}>
          <SelectList name='type' data={CreativeType} label='Type (DISPLAY, VPAID, VAST)' value={props.parentState.type}
                      context={props.context}/>
          <hr/>
        </div>
        {props.parentState.type === 'DISPLAY' ? (
          <div>
            <div className={'col-md-12'}>
              <SelectList name='creativeType' data={DisplayCreativeType}
                          label='Display Creative Type'
                          value={props.parentState.creativeType}
                          context={props.context}/>
            </div>
            <div className={'col-md-12'}>
              <hr/>
            </div>
            {props.parentState.creativeType === 'url' &&
            <div className={'col-md-12'}>
              <TextBox name="creativeUrl" label="Asset URL" context={props.context}
                       value={props.creativeUrl}/>
            </div>
            }
            {props.parentState.creativeType === 'custom' &&
            <div className={'col-md-12'}>
              <p>Click events cannot be tracked when using custom ad markup.</p>
              <TextArea name="adm" label="Custom Ad Markup" context={props.context} value={props.adm}/>
            </div>
            }
            {props.parentState.creativeType === 'auto' &&
            <div className={'col-md-12'}>
              <p>BidScout will render a generic creative for you. Click events cannot be tracked when using a generic
                creative.</p>
            </div>
            }
            <div className={'col-md-12'}>
              <hr/>
            </div>
            <div className={'col-md-4'}>
              <MultiSelect name="mimes" label="Mime Type" data={DisplayMimes} context={props.context}
                           value={props.parentState.mimes}/>
            </div>
            <div className={'col-md-4'}>
              <MultiSelect name="attr" label="Attributes" data={Attributes} context={props.context}
                           value={props.parentState.attr}/>
            </div>
            <div className={'col-md-4'}>
              <MultiSelect name="btype" label="Banner Type" data={BannerTypes} context={props.context}
                           value={props.parentState.btype}/>
            </div>
          </div>
        ) : (
          <div className={'col-md-12'}>
            <p>Enter custom XML.</p>
            <TextArea name="xml" label="XML" context={props.context} value={props.parentState.xml}/>
            <p>Use an existing XML document.</p>
            <SelectList name='xmlId' data={props.parentState.xmlDocuments}
                        label='XML Document Name'
                        value={props.parentState.xmlId}
                        context={props.context}/>
          </div>
        )}
        <div className={'col-md-12'}>
          <hr/>
        </div>
        <div className={'col-md-12'}><p>Set your size to 0x0 for a creative that will be eligible for any size
          request.</p></div>
        <div className={'col-md-6'}><TextBox name="w" label="Width" context={props.context}
                                             value={props.parentState.w}/></div>
        <div className={'col-md-6'}><TextBox name="h" label="Height" context={props.context}
                                             value={props.parentState.h}/></div>
        <div className={'col-md-12'}><TextBox name="iabCategories" label="IAB Categories"
                                              handler={props.handleInputArray}
                                              value={props.parentState.iabCategories}/></div>
        <div className={'col-md-12'}><TextBox name="adDomain" label="Ad Domains" handler={props.handleInputArray}
                                              value={props.parentState.adDomain}/></div>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelProperties;
