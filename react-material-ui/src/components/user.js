import React, {Component} from 'react'
import {handleInputChange} from "../input/formInputHandler";
import {getUser} from "../api/restapi";
import ModelUser from "../model/user";
import UIButton from './button';

class User extends Component {
  state = {
    user: ModelUser
  };

  constructor() {
    super();
  }

  componentDidMount() {
    getUser()
      .then(data => {
        this.setState({
          user: data
        })
      })
  }

  save = () => {
    //saveCampaign(this.state);
  };

  handleInputChange(event) {
    handleInputChange(event, this);
  }

  render() {
    return (
      <div>
        <h1>Account</h1>
        <p><strong>Username</strong><br/>{this.state.user.username}</p>
        <p><strong>Name</strong><br/>{this.state.user.firstName} {this.state.user.lastName}</p>
        <p><strong>Roles</strong><br/>{this.state.user.roles.map(v => {
          return (
            <span key={v}>{v} </span>
          )
        })}</p>
        <p><strong>Created</strong><br/>{new Date().toDateString(this.state.user.created)}</p>
        <p><strong>Last Login</strong><br/>{new Date().toDateString(this.state.user.lastLogin)}</p>
        <p><strong>Address</strong><br/>{this.state.user.address}</p>
        <p><strong>City</strong><br/>{this.state.user.city}</p>
        <p><strong>State</strong><br/>{this.state.user.state}</p>
        <p><strong>Zip</strong><br/>{this.state.user.zip}</p>
        <p><strong>Email</strong><br/>{this.state.user.email}</p>
        <p><strong>Phone</strong><br/>{this.state.user.phone}</p>
        <UIButton/>
      </div>
    )
  }
}

export default User;
