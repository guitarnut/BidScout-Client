import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

function Stat(props) {
  const { classes } = props;

  return (
    <TextField
      disabled
      id="outlined-disabled"
      label={props.title}
      value={props.value}
      className={classes.textField}
      margin="normal"
      variant="outlined"
    />
  )
}

export default withStyles(styles)(Stat);
