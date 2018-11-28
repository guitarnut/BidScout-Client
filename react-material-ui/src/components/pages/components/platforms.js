import React from 'react'

function Platforms(props) {
  return (
  <div>
    <h3>Platforms</h3>
    <p>Mobile: {props.parentState.requirementsMobile.toString()}</p>
    <p>Desktop: {props.parentState.requirementsDesktop.toString()}</p>
    <p>InApp: {props.parentState.requirementsInapp.toString()}</p>
    <p>CTV: {props.parentState.requirementsCtv.toString()}</p>
  </div>
  )
}
export default Platforms;
