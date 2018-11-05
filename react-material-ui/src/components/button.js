import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

function UIButton(props) {
  return (
    <Button variant="contained" size="small" onClick={props.action}>
      <SaveIcon/>
      Save
    </Button>
  )
}

export default UIButton;
