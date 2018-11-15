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
        <TextBox name="creativeUrl" label="Asset URL" handler={props.handleInput}/>
        <TextBox name="w" label="Width" handler={props.handleInput}/>
        <TextBox name="h" label="Height" handler={props.handleInput}/>
        <TextBox name="type" label="Type" handler={props.handleInput}/>
        <SelectList id="mimes" name="mimes" label="Mime Type" data={DisplayMimes} handler={props.handleInput}/>
        <TextBox name="iabCategories" label="IAB Categories" handler={props.handleInputArray}/>
        <MultiSelect name="attr" label="Attributes" data={Attributes} handler={props.handleInputArray}/>
        <MultiSelect name="btype" label="Banner Type" data={BannerTypes} handler={props.handleInputArray}/>
        <TextBox name="adDomain" label="Ad Domains" handler={props.handleInputArray}/>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelProperties;
