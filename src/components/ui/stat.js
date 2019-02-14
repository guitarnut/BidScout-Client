import React from 'react';
import {Badge} from 'react-bootstrap';

function Stat(props) {

  return (
    <div className={'col-md-3'}>
      <p>
        <Badge>{props.value}</Badge> {props.title}
      </p>
    </div>
  )
}

export default Stat;
