import React from 'react'
import {Panel} from 'react-bootstrap';

function Flight(props) {
  return (
    <div className={'row'}>
      <Panel>
        <Panel.Heading><h4>Flight Dates</h4></Panel.Heading>
        <Panel.Body>
          {props.parentState.requirementsStartDate === null ?
            (
              <p>Start: No start date specified.</p>
            ) : (
              <p>Start: {props.parentState.requirementsStartDate}</p>
            )
          }
          {props.parentState.requirementsEndDate === null ?
            (
              <p>End: No end date specified.</p>
            ) : (
              <p>End: {props.parentState.requirementsEndDate}</p>
            )
          }
        </Panel.Body>
      </Panel>
    </div>
  )
}

export default Flight;
