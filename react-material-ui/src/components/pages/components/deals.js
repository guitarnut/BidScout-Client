import React from 'react'
import {Panel} from 'react-bootstrap';

function Deals(props) {
  if (
    props.parentState.requirementsDealIds.length === 0
  ) {
    return (
      <div className={'row'}>
        <Panel>
          <Panel.Heading><h4>Deal Ids</h4></Panel.Heading>
          <Panel.Body>
            <p>You have not added any deal Ids.</p>
          </Panel.Body>
        </Panel>
      </div>
    )
  } else {
    return (
      <div className={'row'}>
        <Panel>
          <Panel.Heading><h4>Deal Ids</h4></Panel.Heading>
          <Panel.Body>
            <p>{props.parentState.requirementsDealIds}</p>
          </Panel.Body>
        </Panel>
      </div>
    )
  }
}

export default Deals;
