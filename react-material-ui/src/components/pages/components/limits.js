import React from 'react'

function Limits(props) {
  return (
    <div>
      <h3>Limits</h3>
      <p>Requests: {props.data.requestLimit}</p>
      <p>Bid Rate: {props.data.bidRate}</p>
      <p>Bids: {props.data.bidLimit}</p>
      <p>Impressions: {props.data.impressionLimit}</p>
      <p>Spend: {props.data.revenueLimit}</p>
    </div>
  )
}
export default Limits;
