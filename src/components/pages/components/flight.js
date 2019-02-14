import React from 'react'
import {Panel} from 'react-bootstrap';

function Flight(props) {
  return (
    <div className={'row'}>
      <div className={'col-md-12'}>
        <Panel>
          <Panel.Heading><h4>Flight Dates</h4></Panel.Heading>
          <Panel.Body>
            <div className={'col-md-6'}>
              <p><strong>Start:</strong> {props.parentState.requirementsStartDate === null ?
                (
                  <span>No start date specified</span>
                ) : (
                  <span>{props.parentState.requirementsStartDate}</span>
                )
              }
              </p>
            </div>
            <div className={'col-md-6'}>
              <p><strong>End:</strong> {props.parentState.requirementsEndDate === null ?
                (
                  <span>No end date specified</span>
                ) : (
                  <span>{props.parentState.requirementsStartDate}</span>
                )
              }
              </p>
            </div>
          </Panel.Body>
        </Panel>
      </div>
    </div>
  )
}

export default Flight;
