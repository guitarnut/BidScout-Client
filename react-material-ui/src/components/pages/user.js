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
    console.log(this.props);
    this.setState({
      ...this.props.user
    })
  }

  save = () => {
    updateUser(this.state)
      .then((data) => {
        this.props.storeLoginUser(data);
      });
  };

  render() {
    return (
      <div className={'container'}>
        <div className={'col-md-12'}>
          <h2>Account</h2>
          <p><strong>Last Login</strong>: {new Date(this.state.lastLogin).toString()}</p>
        </div>
        <div className={'col-md-12'}>
          <hr/>
        </div>
        <div className={'col-md-4'}><TextBox name="username" label="Username" context={this} value={this.state.username}/></div>
        <div className={'col-md-4'}><TextBox name="firstName" label="First Name" context={this} value={this.state.firstName}/></div>
        <div className={'col-md-4'}><TextBox name="lastName" label="Last Name" context={this} value={this.state.lastName}/></div>
        <div className={'col-md-12'}>
          <hr/>
        </div>
        <div className={'col-md-4'}><TextBox name="address" label="Address" context={this} value={this.state.address}/></div>
        <div className={'col-md-4'}><TextBox name="city" label="City" context={this} value={this.state.city}/></div>
        <div className={'col-md-2'}><TextBox name="state" label="State" context={this} value={this.state.state}/></div>
        <div className={'col-md-2'}><TextBox name="zip" label="Zip" context={this} value={this.state.zip}/></div>
        <div className={'col-md-12'}>
          <hr/>
        </div>
        <div className={'col-md-4'}><TextBox name="email" label="Email" context={this} value={this.state.email}/></div>
        <div className={'col-md-4'}><TextBox name="phone" label="Phone" context={this} value={this.state.phone}/></div>
        <div className={'col-md-12'}>
          <hr/>
        </div>
        <div className={'col-md-12'}><UIButton text="Save Changes" icon="save" action={this.save.bind(this)}/></div>
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
