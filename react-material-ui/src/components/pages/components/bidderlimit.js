import React from 'react'

function BidderLimit(props) {
  return (
    <div className={'col-md-12'}>
      <p>{props.records} record(s) stored out of {props.recordmax} allowed.<br/>
        {props.requests} requests out of {props.requestsmax} allowed.<br/>
        Your request limit will reset for requests made after {props.resetdate}</p>
    </div>
  )
}

export default BidderLimit;
