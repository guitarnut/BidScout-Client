import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function SelectCheck(props) {
  console.log(props);
  return (
    <FormControl>

    <Select
      multiple
      value={props.value}
      onChange={props.handler}
      input={<Input id="select-multiple-checkbox" />}
      renderValue={selected => selected.join(', ')}
      MenuProps={MenuProps}
    >
      {props.values.map(v => (
        <MenuItem key={v} value={v}>
          <Checkbox checked={props.name.indexOf(v) > -1} />
          <ListItemText primary={v} />
        </MenuItem>
      ))}
    </Select>
    </FormControl>
  )
}

export default SelectCheck;
