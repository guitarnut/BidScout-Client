import React, {Component} from 'react';
import TextBox from '../ui/textfield';
import {loginUser} from "../../api/restapi";
import {handleInputChange} from "../../input/formInputHandler";
import UIButton from '../ui/button';

class LoginForm extends Component {

  state = {
    username: null,
    password: null,
    login: false
  };

  constructor() {
    super();
  }

  loginUser = () => {
    loginUser(this.state.username, this.state.password)
      .then(()=>{
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
        <UIButton text="Login" action={this.loginUser.bind(this)}/>
      </div>
    )
  }
}

export default LoginForm;
