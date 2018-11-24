import React from 'react';
import {SplitButton, MenuItem} from 'react-bootstrap';

function handleChange(v, props) {
  let event = {
    target: {
      name: props.name,
      value: v
    }
  };
  props.handler(event);
}

const SelectList = (props) =>
  <SplitButton
    id={props.name}
    title={props.label}
    name={props.name}
    key={props.value}
    value={props.value}
  >
    {Object.keys(props.data).map(k => {
      return (
        <MenuItem key={k} eventKey={k} value={k} onSelect={handleChange.bind(this, k, props)}
                  active={props.value === k ? (true) : (false)}>{props.data[k]}</MenuItem>
      )
    })}
  </SplitButton>;

export default SelectList;
