import React, {Component} from 'react';
import TextBox from './textfield';
import {loginUser} from "../api/restapi";
import {handleInputChange} from "../input/formInputHandler";
import UIButton from './button';

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
        <p><a href="/campaign/view/5be0af66ea3278f806fd08cb">View Campaign</a></p>
        <p><a href="/creative/view/5be0afb5ea3278f806fd08cc">View Creative</a></p>
        <UIButton action={this.loginUser.bind(this)}/>
      </div>
    )
  }
}

export default LoginForm;
