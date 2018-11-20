import React from 'react'

function Deals(props) {
  if (
    props.data.dealIds.length === 0
  ) {
    return (
      <div>
        <h3>Deal Ids</h3>
        <p>You have not added any deal Ids.</p>
      </div>
    )
  } else {
    return (
      <div>
        <h3>Deal Ids</h3>
        <p>{props.data.dealIds}</p>
      </div>
    )
  }
}

export default Deals;
