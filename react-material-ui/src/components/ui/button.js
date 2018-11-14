import React from 'react'
import {Button} from 'react-bootstrap';

const UIButton = (props) =>
    <Button onClick={props.action}>{props.text}</Button>;

export default UIButton;
