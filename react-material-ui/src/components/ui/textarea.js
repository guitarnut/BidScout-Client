import React from 'react'
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

const TextArea = (props)=>
  <form>
    <FormGroup controlId={props.name}>
      <ControlLabel>{props.label}</ControlLabel>
      <FormControl type="text" name={props.name}
                   value={props.value}
                   componentClass="textarea"
                   placeholder={props.value}
                   onChange={props.handler}/>
      <FormControl.Feedback/>
    </FormGroup>
  </form>;

export default TextArea;
//validationState={this.getValidationState()}
