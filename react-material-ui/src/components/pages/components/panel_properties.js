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
        <SelectList name='model.type' data={CreativeType} label='Type (DISPLAY, VPAID, VAST)' value={props.model.type}
                    handler={props.handleInput}/>
        <hr/>
        {props.model.type === 'DISPLAY' ? (
          <div>
            <p>A value of 10 will bid on every eligible request. A value of 0 will never bid. Select a value between
              0-10 to determine bid frequency.</p>
            <TextBox name="model.bidFrequency" label="Bid Frequency" handler={props.handleInput}
                     value={props.model.bidFrequency}/>
            <SelectList name='creativeType' data={DisplayCreativeType} label='Display Creative Type'
                        value={props.creativeType}
                        handler={props.handleInput}/>
            <hr/>
            {props.creativeType === 'url' &&
            <TextBox name="model.creativeUrl" label="Asset URL" handler={props.handleInput}
                     value={props.model.creativeUrl}/>
            }
            {props.creativeType === 'custom' &&
            <div>
              <p>Click events cannot be tracked when using custom ad markup.</p>
              <TextArea name="model.adm" label="Custom Ad Markup" handler={props.handleInput} value={props.model.adm}/>
            </div>
            }
            {props.creativeType === 'auto' &&
            <p>BidScout will render a generic creative for you. Click events cannot be tracked when using a generic
              creative.</p>
            }
            <hr/>
            <MultiSelect name="model.mimes" label="Mime Type" data={DisplayMimes} handler={props.handleInputMulti}
                         value={props.model.mimes} currentState={props.currentState['mimes']} remove={props.remove}/>
            <hr/>
            <MultiSelect name="model.attr" label="Attributes" data={Attributes} handler={props.handleInputMulti}
                         value={props.model.attr} currentState={props.currentState['attr']} remove={props.remove}/>
            <hr/>
            <MultiSelect name="model.btype" label="Banner Type" data={BannerTypes} handler={props.handleInputMulti}
                         value={props.model.btype} currentState={props.currentState['btype']} remove={props.remove}/>
          </div>
        ) : (
          <div>
            <TextArea name="model.xml" label="XML" handler={props.handleInput} value={props.model.xml}/>
          </div>
        )}
        <hr/>
        <p>Set your size to 0x0 for a creative that will be eligible for any size request.</p>
        <TextBox name="model.w" label="Width" handler={props.handleInput} value={props.model.w}/>
        <TextBox name="model.h" label="Height" handler={props.handleInput} value={props.model.h}/>
        <TextBox name="model.iabCategories" label="IAB Categories" handler={props.handleInputArray}
                 value={props.model.iabCategories}/>
        <TextBox name="model.adDomain" label="Ad Domains" handler={props.handleInputArray}
                 value={props.model.adDomain}/>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelProperties;
