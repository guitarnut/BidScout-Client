import React from 'react';
import {Panel} from 'react-bootstrap';
import TextBox from '../../ui/textfield';
import MultiSelect from "../../ui/selectmulti";
import {Attributes, BannerTypes, DisplayMimes} from "../../../const/openrtb";
import SelectList from "../../ui/selectlist";

const PanelProperties = (props) =>
  <Panel>
    <Panel.Heading>
      <Panel.Title toggle>Properties</Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
      <Panel.Body>
        <TextBox name="model.type" label="Type (DISPLAY, VPAID, VAST)" handler={props.handleInput} value={props.model.type}/>
        <TextBox name="model.creativeUrl" label="Asset URL" handler={props.handleInput} value={props.model.creativeUrl}/>
        <TextBox name="model.adm" label="Custom Ad Markup" handler={props.handleInput} value={props.model.adm}/>
        <TextBox name="model.xml" label="XML" handler={props.handleInput} value={props.model.xml}/>
        <TextBox name="model.w" label="Width" handler={props.handleInput} value={props.model.w}/>
        <TextBox name="model.h" label="Height" handler={props.handleInput} value={props.model.h}/>
        <TextBox name="model.iabCategories" label="IAB Categories" handler={props.handleInputArray} value={props.model.iabCategories}/>
        <TextBox name="model.adDomain" label="Ad Domains" handler={props.handleInputArray} value={props.model.adDomain}/>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

// <SelectList name="mimes" label="Mime Type" data={DisplayMimes} handler={props.handleInput}/>
// <MultiSelect name="attr" label="Attributes" data={Attributes} handler={props.handleInput}/>
// <MultiSelect name="btype" label="Banner Type" data={BannerTypes} handler={props.handleInput}/>
export default PanelProperties;
