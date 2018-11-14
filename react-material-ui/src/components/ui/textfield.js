import React from 'react'
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

const TextBox = (props)=>
    <form>
      <FormGroup controlId={props.name}>
        <ControlLabel>{props.label}</ControlLabel>
        <FormControl type="text" name={props.name}
                     value={props.value}
                     placeholder={props.value}
                     onChange={props.handler}/>
        <FormControl.Feedback/>
      </FormGroup>
    </form>;

export default TextBox;
//validationState={this.getValidationState()}
