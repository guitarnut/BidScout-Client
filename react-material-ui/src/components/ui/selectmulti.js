import React from 'react';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

const MultiSelect = (props) =>
  <FormGroup controlId={props.name}>
    <ControlLabel>{props.label}</ControlLabel>
    <FormControl componentClass="select" multiple onChange={props.handler} id={props.name}>
      {Object.keys(props.data).map(k => {
        return (
          <option key={k} value={k}>{props.data[k]}</option>
        )
      })}
    </FormControl>
  </FormGroup>;

export default MultiSelect;
