import React from 'react'

function CreativeProps(props) {
  return (
    <div>
      <p>Enabled: {props.parentState.enabled.toString()}</p>
      <p>Width: {props.parentState.w}</p>
      <p>Height: {props.parentState.h}</p>
      <p>IAB Categories: {props.parentState.iabCategories}</p>
      <p>Attributes: {props.parentState.attr}</p>
      <p>Banner Type: {props.parentState.btype}</p>
      <p>Mimes: {props.parentState.mimes}</p>
      <p>Ad ID: {props.parentState.adId}</p>
      <p>Creative ID: {props.parentState.crid}</p>
      <p>Ad Domain: {props.parentState.adDomain}</p>
      <p>Creative URL: {props.parentState.creativeUrl}</p>
      <p>Minimum Bid: {props.parentState.minBid}</p>
      <p>Maximum Bid: {props.parentState.maxBid}</p>
    </div>
  )
}
export default CreativeProps;
