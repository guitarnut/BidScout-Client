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
        <TextBox name="minBid" label="Minimum Bid" handler={props.handleInput}/>
        <TextBox name="maxBid" label="Maximum Bid" handler={props.handleInput}/>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelAuctionSettings;
