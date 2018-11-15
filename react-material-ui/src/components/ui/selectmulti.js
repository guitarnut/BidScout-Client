import React from 'react';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

const MultiSelect = (props) =>
  <FormGroup controlId="formControlsSelectMultiple">
    <ControlLabel>{props.label}</ControlLabel>
    <FormControl componentClass="select" multiple>
      {Object.keys(props.data).map(k => {
        return (
          <option key={k} value={k}>{props.data[k]}</option>
        )
      })}
    </FormControl>
  </FormGroup>;

export default MultiSelect;
