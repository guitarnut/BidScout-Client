import React from 'react';
import {Panel} from 'react-bootstrap';
import TextBox from "../../ui/textfield";

const PanelName = (props) =>
  <Panel>
    <Panel.Heading>
      <Panel.Title toggle>Name</Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
      <Panel.Body>
        <TextBox name="model.name" label="Name" value={props.value} handler={props.handleInput}/>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelName;
