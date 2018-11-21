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
          <TextBox name="model.publisher" label="Publisher Id" handler={props.handleInput}/>
          <TextBox name="model.cid" label="Campaign Id" handler={props.handleInput}/>
          <TextBox name="model.seat" label="Seat ID" handler={props.handleInput}/>
          <TextBox name="model.nurl" label="Win Notice URL" handler={props.handleInput}/>
          <TextBox name="model.impressionExpiry" label="Impression TTL" handler={props.handleInput}/>
        </Panel.Body>
      ) : (
        <Panel.Body>
          <TextBox name="model.crid" label="Creative ID" handler={props.handleInput} value={props.model.crid}/>
          <TextBox name="model.adId" label="Ad ID" handler={props.handleInput} value={props.model.adId}/>
        </Panel.Body>
      )}
    </Panel.Collapse>
  </Panel>;

export default PanelTracking;
