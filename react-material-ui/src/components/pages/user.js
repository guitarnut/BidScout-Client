import React, {Component} from 'react'
import {handleInputChange} from "../../input/formInputHandler";
import {updateUser} from "../../api/restapi";
import UIButton from '../ui/button';
import TextBox from "../ui/textfield";
import {connect} from 'react-redux';
import {storeLoginUser} from "../../store/actions";

const mapDispatchToProps = dispatch => {
  return {
    storeLoginUser: login => dispatch(storeLoginUser(login))
  }
};

class _User extends Component {
  state = {
    id: '',
    username: '',
    firstName: '',
    lastName: '',
    roles: [],
    enabled: '',
    created: 0,
    lastLogin: 0,
    address: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    phone: '',
    ipAccess: [],
    uaAccess: [],
    dateAccess: [],
    failedLoginAttemptCount: 0
  };

  constructor() {
    super();
  }

  componentDidMount() {
    this.setState({
      ...this.props.user
    })
  }

  save = () => {
    updateUser(this.state.user)
      .then((data) => {
        this.props.storeLoginUser(data);
      });
  };

  render() {
    return (
      <div>
        <h2>Account</h2>
        <p><strong>Last Login</strong><br/>{new Date().toDateString(this.state.lastLogin)}</p>
        <div><TextBox name="username" label="Username" context={this} value={this.state.username}/></div>
        <div><TextBox name="firstName" label="First Name" context={this} value={this.state.firstName}/></div>
        <div><TextBox name="lastName" label="Last Name" context={this} value={this.state.lastName}/></div>
        <div><TextBox name="address" label="Address" context={this} value={this.state.address}/></div>
        <div><TextBox name="city" label="City" context={this} value={this.state.city}/></div>
        <div><TextBox name="state" label="State" context={this} value={this.state.state}/></div>
        <div><TextBox name="zip" label="Zip" context={this} value={this.state.zip}/></div>
        <div><TextBox name="email" label="Email" context={this} value={this.state.email}/></div>
        <div><TextBox name="phone" label="Phone" context={this} value={this.state.phone}/></div>
        <div><UIButton text="Save Changes" icon="save" action={this.save.bind(this)}/></div>
      </div>
    )
  }
}

const User = connect(
  state => ({
    ...state
  }), mapDispatchToProps
)(_User);

export default User;
