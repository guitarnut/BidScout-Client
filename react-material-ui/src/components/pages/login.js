import React, {Component} from 'react';
import TextBox from '../ui/textfield';
import {createUser, getCampaignNames, getCreativeNames, loginUser} from "../../api/restapi";
import {handleInputChange} from "../../input/formInputHandler";
import UIButton from '../ui/button';
import {storeLoginUser, storeAllCampaigns, storeAllCreatives} from '../../store/actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const mapDispatchToProps = dispatch => {
  return {
    storeLoginUser: login => dispatch(storeLoginUser(login)),
    storeAllCampaigns: campaigns => dispatch(storeAllCampaigns(campaigns)),
    storeAllCreatives: creatives => dispatch(storeAllCreatives(creatives))
  }
};

class _LoginForm extends Component {

  state = {
    username: null,
    password: null,
    message: ''
  };

  loginUser = () => {
    loginUser(this.state.username, this.state.password)
      .then((data) => {
        this.props.storeLoginUser(data);
        getCreativeNames()
          .then((data)=>{
            this.props.storeAllCreatives(data);
            getCampaignNames()
              .then((data)=>{
                this.props.storeAllCampaigns(data);
                this.props.history.push('/bidder')
              });
          });
      })
      .catch(() => {
        this.props.storeLoginUser({
          username: '',
          loggedIn: false
        });
        this.setState({
          message: 'Login failed. Invalid username or password.'
        })
      });
  };

  createUser = () => {
    createUser(this.state)
      .then((data) => {
        if (!data.hasOwnProperty('username')) {
          this.setState({
            message: 'Username already exists.'
          })
        } else {
          this.setState({
            username: data.username,
            message: 'Account created. Enter your password to login.'
          })
        }
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
        <UIButton text="Create" action={this.createUser.bind(this)}/>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

const LoginForm = connect(null, mapDispatchToProps)(_LoginForm);

export default withRouter(LoginForm);
