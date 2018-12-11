import React from 'react'
import {Panel} from 'react-bootstrap';

function CreativeProps(props) {
  return (
    <div className={'row'}>
      <Panel>
        <Panel.Heading><h4>Settings</h4></Panel.Heading>
        <Panel.Body>
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
        </Panel.Body>
      </Panel>
    </div>
  )
}
export default CreativeProps;
