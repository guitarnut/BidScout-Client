import React, {Component} from 'react'
import {handleInputChange} from "../../input/formInputHandler";
import {getUser, updateUser} from "../../api/restapi";
import ModelUser from "../../model/user";
import UIButton from '../ui/button';
import TextBox from "../ui/textfield";

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
    updateUser(this.state.user);
  };

  handleInputChange(event) {
    handleInputChange(event, this);
  }

  render() {
    return (
      <div>
        <h1>Account</h1>
        <p><strong>Last Login</strong><br/>{new Date().toDateString(this.state.user.lastLogin)}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed turpis sit amet purus aliquam tempor.
          Etiam cursus, erat at sagittis semper, dui lectus lacinia nisl, eu imperdiet nisi arcu vitae lectus. Mauris
          rutrum urna eu justo cursus porta. Sed viverra sodales tincidunt. Sed felis mi, semper eget arcu quis,
          vestibulum commodo erat. Vivamus ut nibh fringilla, pulvinar dolor quis, rhoncus est. Vivamus nec semper nisi.
          Nulla sit amet laoreet est. Vivamus nec tincidunt orci. Ut ex leo, aliquet faucibus maximus sed, varius eu
          neque. Ut placerat est mauris.</p>
        <TextBox name="user.username" label="Username" handler={this.handleInputChange.bind(this)} value={this.state.user.username}/>
        <TextBox name="user.firstName" label="First Name" handler={this.handleInputChange.bind(this)} value={this.state.user.firstName}/>
        <TextBox name="user.lastName" label="Last Name" handler={this.handleInputChange.bind(this)} value={this.state.user.lastName}/>
        <TextBox name="user.address" label="Address" handler={this.handleInputChange.bind(this)} value={this.state.user.address}/>
        <TextBox name="user.city" label="City" handler={this.handleInputChange.bind(this)} value={this.state.user.city}/>
        <TextBox name="user.state" label="State" handler={this.handleInputChange.bind(this)} value={this.state.user.state}/>
        <TextBox name="user.zip" label="Email" handler={this.handleInputChange.bind(this)} value={this.state.user.zip}/>
        <TextBox name="user.email" label="Email" handler={this.handleInputChange.bind(this)} value={this.state.user.email}/>
        <TextBox name="user.phone" label="Phone" handler={this.handleInputChange.bind(this)} value={this.state.user.phone}/>
        <UIButton text="Save Changes" icon="save" action={this.save.bind(this)}/>
      </div>
    )
  }
}

export default User;
