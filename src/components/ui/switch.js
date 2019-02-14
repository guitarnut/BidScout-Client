import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {handleInput} from "../../input/formInputHandler";

function Switcher(props) {
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            name={props.name}
            checked={props.value}
            onChange={handleInput.bind(props.context)}
            value={props.value}
          />
        }
        label={props.label}
      />
    </FormGroup>
  );
}

export default Switcher;
