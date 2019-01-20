import React from 'react'
import {Panel} from 'react-bootstrap';

function Lists(props) {
  if (
    props.parentState.requirementsPublisherWhitelist && props.parentState.requirementsPublisherWhitelist.length === 0 &&
    props.parentState.requirementsDomainWhitelist.length === 0 &&
    props.parentState.requirementsBundleWhitelist.length === 0 &&
    props.parentState.requirementsPublisherBlacklist.length === 0 &&
    props.parentState.requirementsDomainBlacklist.length === 0 &&
    props.parentState.requirementsBundleBlacklist.length === 0 || props.parentState.requirementsPublisherWhitelist === null
  ) {
    return (
      <div className={'row'}>
        <div className={'col-md-12'}>
          <Panel>
            <Panel.Heading><h4>Whitelist/Blacklist</h4></Panel.Heading>
            <Panel.Body>
              <div className={'col-md-12'}><p>You have not added any whitelists or blacklists.</p></div>
            </Panel.Body>
          </Panel>
        </div>
      </div>
    )
  } else {
    return (
      <div className={'row'}>
        <div className={'col-md-12'}>
          <Panel>
            <Panel.Heading><h4>Whitelist/Blacklist</h4></Panel.Heading>
            <Panel.Body>
              <div className={'col-md-12'}>
                {props.parentState.requirementsPublisherWhitelist ?
                  <p><strong>Publisher Whitelist:</strong> {props.parentState.requirementsPublisherWhitelist}</p> :
                  <p>No publisher whitelist specified.</p>}
                {props.parentState.requirementsDomainWhitelist ?
                  <p><strong>Domain Whitelist:</strong> {props.parentState.requirementsDomainWhitelist}</p> :
                  <p>No domain whitelist specified.</p>}
                {props.parentState.requirementsBundleWhitelist ?
                  <p><strong>Bundle Whitelist:</strong> {props.parentState.requirementsBundleWhitelist}</p> :
                  <p>No bundle whitelist specified.</p>}
                {props.parentState.requirementsPublisherBlacklist ?
                  <p><strong>Publisher Blacklist:</strong> {props.parentState.requirementsPublisherWhitelist}</p> :
                  <p>No publisher blacklist specified.</p>}
                {props.parentState.requirementsDomainBlacklist ?
                  <p><strong>Publisher Blacklist:</strong> {props.parentState.requirementsDomainBlacklist}</p> :
                  <p>No domain blacklist specified.</p>}
                {props.parentState.requirementsBundleBlacklist ?
                  <p><strong>Publisher Blacklist:</strong> {props.parentState.requirementsBundleBlacklist}</p> :
                  <p>No bundle blacklist specified.</p>}
              </div>
            </Panel.Body>
          </Panel>
        </div>
      </div>
    )
  }
}

export default Lists;
