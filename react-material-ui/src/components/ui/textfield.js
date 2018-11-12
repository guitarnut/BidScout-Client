import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import InputAdornment from '@material-ui/core/InputAdornment';

function TextBox(props) {
  if (props.prefix !== undefined) {
    return (
      <TextField
        id="standard-full-width"
        name={props.name}
        label={props.label}
        style={{margin: 8}}
        placeholder=""
        helperText={props.tip}
        margin="normal"
        onChange={props.handler}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: <InputAdornment position="start">{props.prefix}</InputAdornment>
        }}
      />
    );
  } else {
    return (
      <TextField
        id="standard-full-width"
        name={props.name}
        label={props.label}
        style={{margin: 8}}
        placeholder=""
        helperText={props.tip}
        margin="normal"
        onChange={props.handler}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
    )
  }

}

export default TextBox;
