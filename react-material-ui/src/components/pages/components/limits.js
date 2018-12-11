import React from 'react'
import {Panel} from 'react-bootstrap';

function Limits(props) {
  return (
    <div className={'row'}>
      <Panel>
        <Panel.Heading><h4>Limits</h4></Panel.Heading>
        <Panel.Body>
          <p>Requests: {props.parentState.limitsRequestLimit}</p>
          <p>Bid Rate: {props.parentState.limitsBidRate}</p>
          <p>Bids: {props.parentState.limitsBidLimit}</p>
          <p>Impressions: {props.parentState.limitsImpressionLimit}</p>
          <p>Spend: {props.parentState.limitsRevenueLimit}</p>
        </Panel.Body>
      </Panel>
    </div>
  )
}

export default Limits;
