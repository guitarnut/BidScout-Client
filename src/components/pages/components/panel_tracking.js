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
          <div className={'col-md-3'}><TextBox name="publisher" label="Publisher Id" context={props.context}
                                               value={props.parentState.publisher}/></div>
          <div className={'col-md-3'}><TextBox name="cid" label="Campaign Id" context={props.context}
                                               value={props.parentState.cid}/></div>
          <div className={'col-md-3'}><TextBox name="seat" label="Seat ID" context={props.context}
                                               value={props.parentState.seat}/></div>
          <div className={'col-md-3'}><TextBox name="impressionExpiry" label="Impression TTL" context={props.context}
                                               value={props.parentState.impressionExpiry}/></div>
          <div className={'col-md-12'}><TextBox name="nurl" label="Win Notice URL" context={props.context}
                                                value={props.parentState.nurl}/></div>
        </Panel.Body>
      ) : (
        <Panel.Body>
          <div className={'col-md-6'}><TextBox name="crid" label="Creative ID" context={props.context}
                                               value={props.parentState.crid}/></div>
          <div className={'col-md-6'}><TextBox name="adId" label="Ad ID" context={props.context}
                                               value={props.parentState.adId}/></div>
        </Panel.Body>
      )}
    </Panel.Collapse>
  </Panel>;

export default PanelTracking;
