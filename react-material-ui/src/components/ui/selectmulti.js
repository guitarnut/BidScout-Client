import React from 'react';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

const MultiSelect = (props) =>
  <FormGroup controlId={props.name}>
    <ControlLabel>{props.label}</ControlLabel>
    <FormControl componentClass="select" multiple id={props.name} onChange={props.handler} name={props.name}>
      {Object.keys(props.data).map(k => {
        return (
          <option key={k} value={k}>{props.data[k]}</option>
        )
      })}
    </FormControl>
    {props.currentState &&
    <p>{props.currentState.map((v) => {
      return (
        <button key={v} name={props.name} value={v} onClick={props.remove}>{props.data[v]} [x]</button>
      )
    })}</p>
    }
  </FormGroup>;

export default MultiSelect;
//onChange={props.handler}
//onSelect={handleChange.bind(this, k, props)}
