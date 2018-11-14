import React from 'react';
import {SplitButton, MenuItem} from 'react-bootstrap';

const SelectList = (props) =>
  <SplitButton
    title={props.name}
    key={props.value}
    id={props.value}
    onSelect={props.handler}
  >
    {Object.keys(props.data).map(k => {
      return (
        <MenuItem key={k} eventKey={k} value={k}
                  active={props.value === k ? (true) : (false)}>{props.data[k]}</MenuItem>
      )
    })}
  </SplitButton>;

export default SelectList;
