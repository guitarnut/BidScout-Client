import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});


function ProgressChip(props) {
  console.log(props);
  return (
      <Chip
        variant="outlined"
        label={props.name}
        icon = {props.value === true ? <DoneIcon/> : null}
      />
  )
}

export default ProgressChip;
