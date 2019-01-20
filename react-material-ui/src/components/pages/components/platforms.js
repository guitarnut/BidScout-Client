import React from 'react'
import {Panel} from 'react-bootstrap';

function Platforms(props) {
  return (
    <div className={'row'}>
      <div className={'col-md-12'}>
        <Panel>
          <Panel.Heading><h4>Platforms</h4></Panel.Heading>
          <Panel.Body>
            <div className={'col-md-3'}><p><strong>Mobile:</strong> {props.parentState.requirementsMobile.toString()}
            </p></div>
            <div className={'col-md-3'}><p><strong>Desktop:</strong> {props.parentState.requirementsDesktop.toString()}
            </p></div>
            <div className={'col-md-3'}><p><strong>InApp:</strong> {props.parentState.requirementsInapp.toString()}</p>
            </div>
            <div className={'col-md-3'}><p><strong>CTV:</strong> {props.parentState.requirementsCtv.toString()}</p>
            </div>
          </Panel.Body>
        </Panel>
      </div>
    </div>
  )
}

export default Platforms;
