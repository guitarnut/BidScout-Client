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
        <div className={'col-md-6'}><TextBox name="minBid" label="Minimum Bid" context={props.context} value={props.parentState.minBid}/></div>
        <div className={'col-md-6'}><TextBox name="maxBid" label="Maximum Bid" context={props.context} value={props.parentState.maxBid}/></div>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelAuctionSettings;
