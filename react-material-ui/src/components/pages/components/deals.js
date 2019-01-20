import React from 'react'
import {Panel} from 'react-bootstrap';

function Deals(props) {
  if (
    props.parentState.requirementsDealIds.length === 0
  ) {
    return (
      <div className={'row'}>
        <div className={'col-md-12'}>
          <Panel>
            <Panel.Heading><h4>Deal Ids</h4></Panel.Heading>
            <Panel.Body>
              <div className={'col-md-12'}><p>You have not added any deal Ids.</p></div>
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
            <Panel.Heading><h4>Deal Ids</h4></Panel.Heading>
            <Panel.Body>
              <div className={'col-md-3'}><p>{props.parentState.requirementsDealIds}</p></div>
            </Panel.Body>
          </Panel>
        </div>
      </div>
    )
  }
}

export default Deals;
