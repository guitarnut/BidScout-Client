import React from 'react';
import {Badge} from 'react-bootstrap';

function BidderLimit(props) {
  return (
    <div>
      <div className={'col-md-6'}>
        <p><Badge>{props.records}/{props.recordmax}</Badge> Records Stored</p>
      </div>
      <div className={'col-md-6'}>
        <p><Badge>{props.requests}/{props.requestsmax}</Badge> Daily HTTP Requests</p>
      </div>
      <div className={'col-md-12'}>
        <p>Your HTTP request limit resets after {props.resetdate}</p>
      </div>
    </div>
  )
}

export default BidderLimit;
