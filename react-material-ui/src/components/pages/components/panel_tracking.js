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
          <TextBox name="publisher" label="Publisher Id" context={props.context} value={props.parentState.publisher}/>
          <TextBox name="cid" label="Campaign Id" context={props.context} value={props.parentState.cid}/>
          <TextBox name="seat" label="Seat ID" context={props.context} value={props.parentState.seat}/>
          <TextBox name="nurl" label="Win Notice URL" context={props.context} value={props.parentState.nurl}/>
          <TextBox name="impressionExpiry" label="Impression TTL" context={props.context} value={props.parentState.impressionExpiry}/>
        </Panel.Body>
      ) : (
        <Panel.Body>
          <TextBox name="crid" label="Creative ID" context={props.context} value={props.parentState.crid}/>
          <TextBox name="adId" label="Ad ID" context={props.context} value={props.parentState.adId}/>
        </Panel.Body>
      )}
    </Panel.Collapse>
  </Panel>;

export default PanelTracking;
