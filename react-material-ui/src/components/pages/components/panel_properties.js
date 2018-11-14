import React from 'react';
import {Panel} from 'react-bootstrap';
import TextBox from '../../ui/textfield';

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
        <TextBox name="mimes" label="Mimes" handler={props.handleInputArray}/>
        <TextBox name="iabCategories" label="IAB Categories" handler={props.handleInputArray}/>
        <TextBox name="attr" label="Attributes" handler={props.handleInputArray}/>
        <TextBox name="btype" label="Banner Type" handler={props.handleInputArray}/>
        <TextBox name="adDomain" label="Ad Domains" handler={props.handleInputArray}/>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelProperties;
