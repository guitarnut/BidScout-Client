import React from 'react';
import {Panel} from 'react-bootstrap';
import TextBox from "../../ui/textfield";

const PanelTracking = (props) =>
  <Panel>
    <Panel.Heading>
      <Panel.Title toggle>Tracking and Reporting</Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
      {props.isCampaign === true ? (
        <Panel.Body>
          <TextBox name="publisher" label="Publisher Id" handler={props.handleInput}/>
          <TextBox name="cid" label="Campaign Id" handler={props.handleInput}/>
          <TextBox name="seat" label="Seat ID" handler={props.handleInput}/>
          <TextBox name="nurl" label="Win Notice URL" handler={props.handleInput}/>
          <TextBox name="impressionExpiry" label="Impression TTL" handler={props.handleInput}/>
        </Panel.Body>
      ) : (
        <Panel.Body>
          <TextBox name="crid" label="Creative ID" handler={props.handleInput}/>
          <TextBox name="adId" label="Ad ID" handler={props.handleInput}/>
        </Panel.Body>
      )}
    </Panel.Collapse>
  </Panel>;

export default PanelTracking;
