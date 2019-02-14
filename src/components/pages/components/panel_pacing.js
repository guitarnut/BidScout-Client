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
        <div className={'col-md-2'}><TextBox name="limitsRequestLimit" label="Request Limit" context={props.context}
                                             value={props.parentState.limitsRequestLimit}/></div>
        <div className={'col-md-2'}><TextBox name="limitsBidRate" label="Bid Rate" context={props.context}
                                             value={props.parentState.limitsBidRate}/></div>
        <div className={'col-md-2'}><TextBox name="limitsBidLimit" label="Bid Limit" context={props.context}
                                             value={props.parentState.limitsBidLimit}/></div>
        <div className={'col-md-2'}><TextBox name="limitsImpressionLimit" label="Impression Limit"
                                             context={props.context} value={props.parentState.limitsImpressionLimit}/>
        </div>
        <div className={'col-md-2'}><TextBox name="limitsRevenueLimit" label="Revenue Limit" context={props.context}
                                             value={props.parentState.limitsRevenueLimit}/></div>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelPacing;
