import React, {Component} from 'react';
import TextBox from '../ui/textfield';
import {authorized, createUser, getAllXml, getCampaignNames, getCreativeNames, loginUser} from "../../api/restapi";
import UIButton from '../ui/button';
import {storeAllCampaigns, storeAllCreatives, storeAllXml, storeLoginUser} from '../../store/actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const mapDispatchToProps = dispatch => {
  return {
    storeLoginUser: login => dispatch(storeLoginUser(login)),
    storeAllCampaigns: campaigns => dispatch(storeAllCampaigns(campaigns)),
    storeAllCreatives: creatives => dispatch(storeAllCreatives(creatives)),
    storeAllXml: xml => dispatch(storeAllXml(xml))
  }
};

class _LoginForm extends Component {

  loaded = 0;

  componentWillMount() {
    if(authorized()) {
      this.props.history.push('/bidder');
    }
    this.setState({
      username: '',
      password: '',
      message: ''
    })
  }

  success() {
    this.loaded++;
    if (this.loaded === 3) {
      this.props.history.push('/bidder');
    }
  }

  // Todo: Use async waterfall
  loginUser = () => {

    loginUser(this.state.username, this.state.password)
      .then((data) => {
        this.props.storeLoginUser(data);
        getCreativeNames()
          .then((data) => {
            this.props.storeAllCreatives(data);
            this.success();
          });
        getCampaignNames()
          .then((data) => {
            this.props.storeAllCampaigns(data);
            this.success();
          });
        getAllXml()
          .then((data) => {
            this.props.storeAllXml(data);
            this.success();
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

  render() {
    return (
      <div className={'row'}>
        <div className={'col-md-12'}>
          <h2>Login</h2>
        </div>
        <div className={'col-md-6'}>
          <TextBox name="username" label="Username" context={this} value={this.state.username}/>
        </div>
        <div className={'col-md-6'}>
          <TextBox name="password" label="Password" context={this} value={this.state.password}/>
        </div>
        <div className={'col-md-12'}>
          <UIButton text="Login" action={this.loginUser.bind(this)}/> <UIButton text="Create Account"
                                                                                action={this.createUser.bind(this)}/>
        </div>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

const LoginForm = connect(null, mapDispatchToProps)(_LoginForm);

export default withRouter(LoginForm);
