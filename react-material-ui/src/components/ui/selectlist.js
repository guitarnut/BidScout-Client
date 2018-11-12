import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

function SelectList(props) {
  return (
    <Select value={props.value} onChange={props.handler} displayEmpty>
      <MenuItem value=''>{props.name}</MenuItem>
      {Object.keys(props.data).map(k => {
        return (
          <MenuItem key={k} value={k}>{props.data[k]}</MenuItem>
          )
      })}
    </Select>
  )
}

export default SelectList;
