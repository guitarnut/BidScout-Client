import React from 'react'
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import {handleInput} from "../../input/formInputHandler";

const TextArea = (props)=>
  <form>
    <FormGroup controlId={props.name}>
      <ControlLabel>{props.label}</ControlLabel>
      <FormControl type="text" name={props.name}
                   value={props.value}
                   componentClass="textarea"
                   placeholder={props.value}
                   onChange={handleInput.bind(props.context)}/>
      <FormControl.Feedback/>
    </FormGroup>
  </form>;

export default TextArea;
//validationState={this.getValidationState()}
