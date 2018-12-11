import React from 'react'
import {Panel} from 'react-bootstrap';

function CampaignProps(props) {
  return (
    <div className={'row'}>
      <Panel>
        <Panel.Heading><h4>Advertiser</h4></Panel.Heading>
        <Panel.Body><p>Enabled: {props.parentState.enabled.toString()}</p>
          <p>Campaign ID: {props.parentState.cid}</p>
          <p>Publisher: {props.parentState.publisher}</p>
          <p>Seat: {props.parentState.seat}</p>
          <p>Nurl: {props.parentState.nurl ? props.parentState.nurl : 'No nurl provided'}</p>
          <p>Impression TTL: {props.parentState.impressionExpiry}</p></Panel.Body>
      </Panel>
    </div>
  )
}
export default CampaignProps;
