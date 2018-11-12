import React from 'react'

function CreativeProps(props) {
  return (
    <div>
      <p>Enabled: {props.data.enabled.toString()}</p>
      <p>Width: {props.data.w}</p>
      <p>Height: {props.data.h}</p>
      <p>IAB Categories: {props.data.iabCategories}</p>
      <p>Attributes: {props.data.attr}</p>
      <p>Banner Type: {props.data.btype}</p>
      <p>Mimes: {props.data.mimes}</p>
      <p>Ad ID: {props.data.adId}</p>
      <p>Creative ID: {props.data.crid}</p>
      <p>Ad Domain: {props.data.adDomain}</p>
      <p>Creative URL: {props.data.creativeUrl}</p>
      <p>Minimum Bid: {props.data.minBid}</p>
      <p>Maximum Bid: {props.data.maxBid}</p>
    </div>
  )
}
export default CreativeProps;
