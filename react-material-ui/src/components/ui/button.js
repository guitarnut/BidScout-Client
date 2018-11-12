import React from 'react'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import SearchIcon from '@material-ui/icons/Search';


function UIButton(props) {
  //https://material.io/tools/icons/?style=baseline
  return (
    <Button variant="contained" size="small" onClick={props.action}>
      {props.icon === 'save' ? <SaveIcon/>:''}
      {props.icon === 'search' ? <SearchIcon/>:''}
      {props.text}</Button>
  )
}

export default UIButton;
