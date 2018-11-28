import React from 'react';
import {Panel} from 'react-bootstrap';
import TextBox from '../../ui/textfield';

const PanelAuctionSettings = (props) =>
  <Panel>
    <Panel.Heading>
      <Panel.Title toggle>Auction Settings</Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
      <Panel.Body>
        <TextBox name="minBid" label="Minimum Bid" context={props.context} value={props.parentState.minBid}/>
        <TextBox name="maxBid" label="Maximum Bid" context={props.context} value={props.parentState.maxBid}/>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelAuctionSettings;
