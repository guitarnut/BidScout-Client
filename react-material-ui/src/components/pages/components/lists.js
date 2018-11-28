import React from 'react'

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
      <div>
        <h3>Whitelist/Blacklist</h3>
        <p>You have not added any whitelists or blacklists.</p>
      </div>
    )
  } else {
    return (
      <div>
        <h3>Whitelist/Blacklist</h3>
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
      </div>
    )
  }
}

export default Lists;
