import React from 'react'

function Lists(props) {
  if (
    props.data.publisherWhitelist && props.data.publisherWhitelist.length === 0 &&
    props.data.domainWhitelist.length === 0 &&
    props.data.bundleWhitelist.length === 0 &&
    props.data.publisherBlacklist.length === 0 &&
    props.data.domainBlacklist.length === 0 &&
    props.data.bundleBlacklist.length === 0
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
        {props.data.publisherWhitelist ? <p>Publisher Whitelist: {props.data.publisherWhitelist}</p> :
          <p>No publisher whitelist specified.</p>}
        {props.data.domainWhitelist ? <p>Domain Whitelist: {props.data.domainWhitelist}</p> :
          <p>No domain whitelist specified.</p>}
        {props.data.bundleWhitelist ? <p>Bundle Whitelist: {props.data.bundleWhitelist}</p> :
          <p>No bundle whitelist specified.</p>}
        {props.data.publisherBlacklist ? <p>Publisher Blacklist: {props.data.publisherWhitelist}</p> :
          <p>No publisher blacklist specified.</p>}
        {props.data.domainBlacklist ? <p>Publisher Blacklist: {props.data.publisherWhitelist}</p> :
          <p>No publisher blacklist specified.</p>}
        {props.data.bundleBlacklist ? <p>Publisher Blacklist: {props.data.publisherWhitelist}</p> :
          <p>No publisher blacklist specified.</p>}
      </div>
    )
  }
}

export default Lists;
