import React from 'react';
import {SplitButton, MenuItem} from 'react-bootstrap';
import {handleInput} from "../../input/formInputHandler";

function handleChange(v, props) {
  let event = {
    target: {
      name: props.name,
      value: v
    }
  };
  handleInput.call(props.context, event);
}

const SelectList = (props) =>
  <SplitButton
    id={(Math.random()*1000).toString()}
    title={props.label}
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
