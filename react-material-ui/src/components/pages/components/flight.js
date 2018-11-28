import React from 'react'

function Flight(props) {
  return (
    <div>
      <h3>Flight Dates</h3>
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
    </div>
  )
}

export default Flight;
