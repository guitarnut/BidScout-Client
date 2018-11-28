import React from 'react'

function Limits(props) {
  return (
    <div>
      <h3>Limits</h3>
      <p>Requests: {props.parentState.limitsRequestLimit}</p>
      <p>Bid Rate: {props.parentState.limitsBidRate}</p>
      <p>Bids: {props.parentState.limitsBidLimit}</p>
      <p>Impressions: {props.parentState.limitsImpressionLimit}</p>
      <p>Spend: {props.parentState.limitsRevenueLimit}</p>
    </div>
  )
}
export default Limits;
