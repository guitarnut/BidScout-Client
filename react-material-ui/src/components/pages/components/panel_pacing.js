import React from 'react';
import {Panel} from 'react-bootstrap';
import TextBox from "../../ui/textfield";

const PanelPacing = (props) =>
  <Panel>
    <Panel.Heading>
      <Panel.Title toggle>Pacing</Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
      <Panel.Body>
        <TextBox name="model.limits.requestLimit" label="Request Limit" handler={props.handleInput} value={props.limits.requestLimit}/>
        <TextBox name="model.limits.bidRate" label="Bid Rate" handler={props.handleInput} value={props.limits.bidRate}/>
        <TextBox name="model.limits.bidLimit" label="Bid Limit" handler={props.handleInput} value={props.limits.bidLimit}/>
        <TextBox name="model.limits.impressionLimit" label="Impression Limit"
                 handler={props.handleInput} value={props.limits.impressionLimit}/>
        <TextBox name="model.limits.revenueLimit" label="Revenue Limit" handler={props.handleInput} value={props.limits.revenueLimit}/>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelPacing;
