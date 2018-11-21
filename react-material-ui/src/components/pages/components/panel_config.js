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
          name="model.enabled"
          label="Enabled"
          value={props.enabled}
          handler={props.handleInput}
        />
        <Switcher
          name="model.requirements.userMatch"
          label="Require User Match"
          value={props.requirements.userMatch}
          handler={props.handleInput}
        />
        <Switcher
          name="model.requirements.secure"
          label="Require Secure Bids"
          value={props.requirements.secure}
          handler={props.handleInput}
        />
        <TextField name="model.requirements.startDate" id="datetime-local" label="Start" type="datetime-local"
                   InputLabelProps={{
                     shrink: true,
                   }}
                   onChange={props.handleInput}
        />
        <TextField name="model.requirements.endDate" id="datetime-local" label="End" type="datetime-local"
                   InputLabelProps={{
                     shrink: true,
                   }}
                   onChange={props.handleInput}
        />
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelConfig;
