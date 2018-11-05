import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

function TextBoxMultiline(props) {
  return (
    <TextField
      id="standard-full-width"
      name={props.name}
      label={props.label}
      style={{margin: 8}}
      placeholder="Placeholder"
      helperText={props.tip}
      multiline
      rowsMax="4"
      margin="normal"
      onChange={props.handler}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}

export default TextBoxMultiline;
