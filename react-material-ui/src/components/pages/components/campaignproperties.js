import React from 'react'
import {Panel} from 'react-bootstrap';

function CampaignProps(props) {
  return (
    <div className={'row'}>
      <div className={'col-md-12'}>
        <Panel>
          <Panel.Heading><h4>Advertiser</h4></Panel.Heading>
          <Panel.Body>
            <div className={'col-md-3'}><p><strong>Enabled:</strong> {props.parentState.enabled.toString()}</p></div>
            <div className={'col-md-3'}><p><strong>Campaign ID:</strong> {props.parentState.cid}</p></div>
            <div className={'col-md-3'}><p><strong>Publisher:</strong> {props.parentState.publisher}</p></div>
            <div className={'col-md-3'}><p><strong>Seat:</strong> {props.parentState.seat}</p></div>
            <div className={'col-md-3'}><p><strong>Impression TTL:</strong> {props.parentState.impressionExpiry}</p>
            </div>
            <div className={'col-md-12'}>
              <p><strong>Nurl:</strong> {props.parentState.nurl ? props.parentState.nurl : 'No nurl provided'}</p></div>
          </Panel.Body>
        </Panel>
      </div>
    </div>
  )
}

export default CampaignProps;
