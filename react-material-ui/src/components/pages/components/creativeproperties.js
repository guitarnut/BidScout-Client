import React from 'react'
import {Panel} from 'react-bootstrap';

function CreativeProps(props) {
  return (
    <div className={'row'}>
      <Panel>
        <Panel.Heading><h4>Settings</h4></Panel.Heading>
        <Panel.Body>
          <div className={'col-md-3'}><p>Enabled: {props.parentState.enabled.toString()}</p></div>
          <div className={'col-md-3'}><p>Width: {props.parentState.w}</p></div>
          <div className={'col-md-3'}><p>Height: {props.parentState.h}</p></div>
          <div className={'col-md-3'}><p>Banner Type: {props.parentState.btype}</p></div>
          <div className={'col-md-3'}><p>Ad ID: {props.parentState.adId}</p></div>
          <div className={'col-md-3'}><p>Creative ID: {props.parentState.crid}</p></div>
          <div className={'col-md-3'}><p>Ad Domain: {props.parentState.adDomain}</p></div>
          <div className={'col-md-3'}><p>Minimum Bid: ${props.parentState.minBid}</p></div>
          <div className={'col-md-3'}><p>Maximum Bid: ${props.parentState.maxBid}</p></div>
          <div className={'col-md-12'}><p>Creative URL: {props.parentState.creativeUrl}</p></div>
          <div className={'col-md-12'}><p>IAB Categories: {props.parentState.iabCategories}</p></div>
          <div className={'col-md-12'}><p>Attributes: {props.parentState.attr}</p></div>
          <div className={'col-md-12'}><p>Mimes: {props.parentState.mimes}</p></div>
        </Panel.Body>
      </Panel>
    </div>
  )
}

export default CreativeProps;
