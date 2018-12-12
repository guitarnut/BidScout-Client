import React from 'react'
import {Panel, Badge} from 'react-bootstrap';

function Limits(props) {
  return (
    <div className={'row'}>
      <Panel>
        <Panel.Heading><h4>Limits</h4></Panel.Heading>
        <Panel.Body>
          <div className={'col-md-3'}><p><Badge>{props.parentState.limitsRequestLimit}</Badge> Requests</p></div>
          <div className={'col-md-3'}><p><Badge>{props.parentState.limitsBidRate}</Badge> Bid Rate</p></div>
          <div className={'col-md-3'}><p><Badge>{props.parentState.limitsBidLimit}</Badge> Bids</p></div>
          <div className={'col-md-3'}><p><Badge>{props.parentState.limitsImpressionLimit}</Badge> Impressions</p></div>
          <div className={'col-md-3'}><p><Badge>{props.parentState.limitsRevenueLimit}</Badge> Spend</p></div>
        </Panel.Body>
      </Panel>
    </div>
  )
}

export default Limits;
