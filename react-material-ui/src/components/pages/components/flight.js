import React from 'react'

function Flight(props) {
  if(props.data.start === undefined && props.data.end === undefined) {
    return (
      <div>
        <h3>Flight Dates</h3>
        <p>You have not specified beginning and ending dates.</p>
      </div>
    )
  }
  return (
    <div>
      <h3>Flight Dates</h3>
      <p>Start: {props.data.start}</p>
      <p>End: {props.data.end}</p>
    </div>
  )
}
export default Flight;
