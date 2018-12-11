import React from 'react'
import {Panel} from 'react-bootstrap';

function Lists(props) {
  if (
    props.parentState.requirementsPublisherWhitelist && props.parentState.requirementsPublisherWhitelist.length === 0 &&
    props.parentState.requirementsDomainWhitelist.length === 0 &&
    props.parentState.requirementsBundleWhitelist.length === 0 &&
    props.parentState.requirementsPublisherBlacklist.length === 0 &&
    props.parentState.requirementsDomainBlacklist.length === 0 &&
    props.parentState.requirementsBundleBlacklist.length === 0
  ) {
    return (
      <div className={'row'}>
        <Panel>
          <Panel.Heading><h4>Whitelist/Blacklist</h4></Panel.Heading>
          <Panel.Body>
            <p>You have not added any whitelists or blacklists.</p>
          </Panel.Body>
        </Panel>

      </div>
    )
  } else {
    return (
      <div className={'row'}>
        <Panel>
          <Panel.Heading><h4>Whitelist/Blacklist</h4></Panel.Heading>
          <Panel.Body>
            {props.parentState.requirementsPublisherWhitelist ? <p>Publisher Whitelist: {props.parentState.requirementsPublisherWhitelist}</p> :
              <p>No publisher whitelist specified.</p>}
            {props.parentState.requirementsDomainWhitelist ? <p>Domain Whitelist: {props.parentState.requirementsDomainWhitelist}</p> :
              <p>No domain whitelist specified.</p>}
            {props.parentState.requirementsBundleWhitelist ? <p>Bundle Whitelist: {props.parentState.requirementsBundleWhitelist}</p> :
              <p>No bundle whitelist specified.</p>}
            {props.parentState.requirementsPublisherBlacklist ? <p>Publisher Blacklist: {props.parentState.requirementsPublisherWhitelist}</p> :
              <p>No publisher blacklist specified.</p>}
            {props.parentState.requirementsDomainBlacklist ? <p>Publisher Blacklist: {props.parentState.requirementsDomainBlacklist}</p> :
              <p>No domain blacklist specified.</p>}
            {props.parentState.requirementsBundleBlacklist ? <p>Publisher Blacklist: {props.parentState.requirementsBundleBlacklist}</p> :
              <p>No bundle blacklist specified.</p>}
          </Panel.Body>
        </Panel>
      </div>
    )
  }
}

export default Lists;
