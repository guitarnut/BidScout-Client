import React from 'react'

function CampaignProps(props) {
  return (
    <div>
      <p>Enabled: {props.parentState.enabled.toString()}</p>
      <p>Campaign ID: {props.parentState.cid}</p>
      <p>Publisher: {props.parentState.publisher}</p>
      <p>Seat: {props.parentState.seat}</p>
      <p>Nurl: {props.parentState.nurl ? props.parentState.nurl : 'No nurl provided'}</p>
      <p>Impression TTL: {props.parentState.impressionExpiry}</p>
    </div>
  )
}
export default CampaignProps;
