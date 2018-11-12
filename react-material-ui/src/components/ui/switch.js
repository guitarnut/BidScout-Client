import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function Switcher(props) {
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            name={props.name}
            checked={props.value}
            onChange={props.handler}
            value={props.value}
          />
        }
        label={props.label}
      />
    </FormGroup>
  );
}

export default Switcher;
