import React from 'react';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import {handleInputMultiSelect} from "../../input/formInputHandler";

const MultiSelect = (props) =>
  <FormGroup controlId={props.name}>
    <ControlLabel>{props.label}</ControlLabel>
    <FormControl componentClass="select" multiple id={props.name} onChange={handleInputMultiSelect.bind(props.context)} name={props.name}>
      {Object.keys(props.data).map(k => {
        return (
          <option key={k} value={k} selected={props.value.indexOf(k) !== -1}>{k} - {props.data[k]}</option>
        )
      })}
    </FormControl>
    {props.value &&
    <p>{props.value.map((v) => {
      return (
        <button key={v} name={props.name} value={v}
                onClick={handleInputMultiSelect.bind(props.context)}>{props.data[v]} [x]</button>
      )
    })}</p>
    }
  </FormGroup>;

export default MultiSelect;
//onChange={props.handler}
//onSelect={handleChange.bind(this, k, props)}
