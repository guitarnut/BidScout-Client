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
        <div className={'col-md-12'}>
          <TextBox name="name" label="Name" value={props.value} context={props.context}/>
        </div>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelName;
