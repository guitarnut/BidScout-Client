import React from 'react';
import {Panel} from 'react-bootstrap';
import Switcher from "../../ui/switch";
import TextField from '@material-ui/core/TextField';

const PanelConfig = (props)=>
  <Panel>
    <Panel.Heading>
      <Panel.Title toggle>Configuration</Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
      <Panel.Body>
        <Switcher
          name="enabled"
          label="Enabled"
          value={props.parentState.enabled}
          context={props.context}
        />
        <Switcher
          name="requirementsUserMatch"
          label="Require User Match"
          value={props.parentState.requirementsUserMatch}
          context={props.context}
        />
        <Switcher
          name="requirementsSecure"
          label="Require Secure Bids"
          value={props.parentState.requirementsSecure}
          context={props.context}
        />
        <TextField name="requirementsStartDate" id="datetime-local" label="Start" type="datetime-local"
                   InputLabelProps={{
                     shrink: true,
                   }}
                   context={props.context}
        />
        <TextField name="requirementsEndDate" id="datetime-local" label="End" type="datetime-local"
                   InputLabelProps={{
                     shrink: true,
                   }}
                   context={props.context}
        />
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelConfig;
