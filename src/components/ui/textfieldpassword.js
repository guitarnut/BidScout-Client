import React from 'react'
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import {handleInput} from "../../input/formInputHandler";

const TextBoxPassword = (props)=>
  <form>
    <FormGroup controlId={props.name}>
      <ControlLabel>{props.label}</ControlLabel>
      <FormControl type="password" name={props.name}
                   value={props.value}
                   placeholder={props.value}
                   onChange={handleInput.bind(props.context)}/>
      <FormControl.Feedback/>
    </FormGroup>
  </form>;

export default TextBoxPassword;
//validationState={this.getValidationState()}
