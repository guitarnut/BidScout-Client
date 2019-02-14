import React from 'react';
import {ControlLabel, FormControl, FormGroup, Badge} from 'react-bootstrap';
import {handleInputMultiSelect} from "../../input/formInputHandler";

const MultiSelect = (props) =>
  <FormGroup controlId={props.name}>
    <ControlLabel>{props.label}</ControlLabel>
    <FormControl componentClass="select" multiple id={props.name} onChange={handleInputMultiSelect.bind(props.context)} name={props.name}>
      {Object.keys(props.data).map(k => {
        return (
          <option key={k} value={k}>{k} - {props.data[k]}</option>
        )
      })}
    </FormControl>
    {props.value &&
    <p>{props.value.map((v) => {
      return (
        <Badge key={v} name={props.name} value={v}>{props.data[v]}</Badge>
      )
    })}</p>
    }
  </FormGroup>;

export default MultiSelect;
//onChange={props.handler}
//onSelect={handleChange.bind(this, k, props)}
