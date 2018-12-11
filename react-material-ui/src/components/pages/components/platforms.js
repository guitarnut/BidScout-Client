import React from 'react'
import {Panel} from 'react-bootstrap';

function Platforms(props) {
  return (
  <div className={'row'}>
    <Panel>
      <Panel.Heading><h4>Platforms</h4></Panel.Heading>
      <Panel.Body>
        <p>Mobile: {props.parentState.requirementsMobile.toString()}</p>
        <p>Desktop: {props.parentState.requirementsDesktop.toString()}</p>
        <p>InApp: {props.parentState.requirementsInapp.toString()}</p>
        <p>CTV: {props.parentState.requirementsCtv.toString()}</p>
      </Panel.Body>
    </Panel>
  </div>
  )
}
export default Platforms;
