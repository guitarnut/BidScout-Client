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
        <TextBox name="limits.requestLimit" label="Request Limit" handler={props.handleInput}/>
        <TextBox name="limits.bidRate" label="Bid Rate" handler={props.handleInput}/>
        <TextBox name="limits.bidLimit" label="Bid Limit" handler={props.handleInput}/>
        <TextBox name="limits.impressionLimit" label="Impression Limit"
                 handler={props.handleInput}/>
        <TextBox name="limits.revenueLimit" label="Revenue Limit" handler={props.handleInput}/>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelPacing;
