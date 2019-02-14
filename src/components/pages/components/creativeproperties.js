import React from 'react'
import {Panel} from 'react-bootstrap';

function CreativeProps(props) {
  return (
    <div className={'row'}>
      <div className={'col-md-12'}>
        <Panel>
          <Panel.Heading><h4>Settings</h4></Panel.Heading>
          <Panel.Body>
            <div className={'col-md-3'}><p>Enabled: {props.parentState.enabled.toString()}</p></div>
            <div className={'col-md-3'}><p>Width: {props.parentState.w}</p></div>
            <div className={'col-md-3'}><p>Height: {props.parentState.h}</p></div>
            <div className={'col-md-3'}><p>Banner Type: {props.parentState.btype.length === 0 ? 'Not specified' : props.parentState.btype}</p></div>
            <div className={'col-md-3'}><p>Ad ID: {props.parentState.adId === '' ? 'Not specified' : props.parentState.adId}</p></div>
            <div className={'col-md-3'}><p>Creative ID: {props.parentState.crid === '' ? 'Not specified' : props.parentState.crid}</p></div>
            <div className={'col-md-3'}><p>Ad Domain: {props.parentState.adDomain.length === 0 ? 'Not specified' : props.parentState.adDomain}</p></div>
            <div className={'col-md-3'}><p>Minimum Bid: ${props.parentState.minBid}</p></div>
            <div className={'col-md-3'}><p>Maximum Bid: ${props.parentState.maxBid}</p></div>
            <div className={'col-md-12'}><p>IAB Categories: {props.parentState.iabCategories.length === 0 ? 'Not specified' : props.parentState.iabCategories}</p></div>
            <div className={'col-md-12'}><p>Attributes: {props.parentState.attr.length === 0 ? 'Not specified' : props.parentState.attr}</p></div>
            <div className={'col-md-12'}><p>Mimes: {props.parentState.mimes.length === 0 ? 'Not specified' : props.parentState.mimes}</p></div>
            {props.parentState.creativeUrl !== '' &&
              <div className={'col-md-12'}><p>Creative URL: {props.parentState.creativeUrl}</p></div>
            }
            {props.parentState.adm !== '' &&
              <div className={'col-md-12'}><p>Ad Markup:<br/><code>{props.parentState.adm}</code></p></div>
            }
            {props.parentState.xml !== '' &&
              <div className={'col-md-12'}><p>Custom XML:<br/><code>{props.parentState.xml}</code></p></div>
            }
            {(props.parentState.xmlDocuments !== undefined && props.parentState.xmlId !== '') &&
              <div className={'col-md-12'}><p>XML Document: {props.parentState.xmlDocuments[props.parentState.xmlId]}</p></div>
            }
          </Panel.Body>
        </Panel>
      </div>
    </div>
  )
}

export default CreativeProps;

/**
 id: '',
 owner: '',
 name: '',
 type: '',
 w: '',
 h: '',
 enabled: false,
 iabCategories: [],
 attr: [],
 btype: [],
 mimes: [],
 adId: '',
 crid: '',
 adDomain: [],
 creativeUrl: '',
 adm: '',
 xml: '',
 minBid: '',
 maxBid: '',
 **/
