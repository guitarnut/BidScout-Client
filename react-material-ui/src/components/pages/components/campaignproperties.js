import React from 'react'

function CampaignProps(props) {
  return (
    <div>
      <p>Enabled: {props.data.enabled.toString()}</p>
      <p>Campaign ID: {props.data.cid}</p>
      <p>Publisher: {props.data.publisher}</p>
      <p>Seat: {props.data.seat}</p>
      <p>Nurl: {props.data.nurl ? props.data.nurl : 'No nurl provided'}</p>
      <p>Impression TTL: {props.data.impressionExpiry}</p>
    </div>
  )
}
export default CampaignProps;
