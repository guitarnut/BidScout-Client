import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import TextBox from './textfield';
import {loginUser} from "../api/restapi";
import {handleInputChange} from "../input/formInputHandler";
import UIButton from './button';

class LoginForm extends Component {

  state = {
    username: null,
    password: null
  };

  constructor() {
    super();
  }

  loginUser = () => {
    loginUser(this.state.username, this.state.password)
      .then((resp)=>{
        window.location.pathname = '/';
      });
  };

  handleInputChange(event) {
    handleInputChange(event, this);
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <TextBox name="username" label="Username" handler={this.handleInputChange.bind(this)}/>
        <TextBox name="password" label="Password" handler={this.handleInputChange.bind(this)}/>
        <UIButton action={this.loginUser.bind(this)}/>
      </div>
    )
  }
}

export default LoginForm;
