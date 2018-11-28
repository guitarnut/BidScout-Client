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
        <SelectList name='type' data={CreativeType} label='Type (DISPLAY, VPAID, VAST)' value={props.parentState.type}
                    context={props.context}/>
        <hr/>
        {props.parentState.type === 'DISPLAY' ? (
          <div>
            <p>A value of 10 will bid on every eligible request. A value of 0 will never bid. Select a value between
              0-10 to determine bid frequency.</p>
            <TextBox name="bidFrequency" label="Bid Frequency" context={props.context}
                     value={props.parentState.bidFrequency}/>
            <SelectList name='creativeType' data={DisplayCreativeType} label='Display Creative Type'
                        value={props.parentState.creativeType}
                        context={props.context}/>
            <hr/>
            {props.parentState.creativeType === 'url' &&
            <TextBox name="creativeUrl" label="Asset URL" context={props.context}
                     value={props.creativeUrl}/>
            }
            {props.parentState.creativeType === 'custom' &&
            <div>
              <p>Click events cannot be tracked when using custom ad markup.</p>
              <TextArea name="adm" label="Custom Ad Markup" context={props.context} value={props.adm}/>
            </div>
            }
            {props.parentState.creativeType === 'auto' &&
            <p>BidScout will render a generic creative for you. Click events cannot be tracked when using a generic
              creative.</p>
            }
            <hr/>
            <MultiSelect name="mimes" label="Mime Type" data={DisplayMimes} context={props.context}
                         value={props.parentState.mimes}/>
            <hr/>
            <MultiSelect name="attr" label="Attributes" data={Attributes} context={props.context}
                         value={props.parentState.attr}/>
            <hr/>
            <MultiSelect name="btype" label="Banner Type" data={BannerTypes} context={props.context}
                         value={props.parentState.btype}/>
          </div>
        ) : (
          <div>
            <TextArea name="xml" label="XML" context={props.context} value={props.parentState.xml}/>
          </div>
        )}
        <hr/>
        <p>Set your size to 0x0 for a creative that will be eligible for any size request.</p>
        <TextBox name="w" label="Width" context={props.context} value={props.parentState.w}/>
        <TextBox name="h" label="Height" context={props.context} value={props.parentState.h}/>
        <TextBox name="iabCategories" label="IAB Categories" handler={props.handleInputArray}
                 value={props.parentState.iabCategories}/>
        <TextBox name="adDomain" label="Ad Domains" handler={props.handleInputArray}
                 value={props.parentState.adDomain}/>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelProperties;
