import React, {Component} from 'react'
import {handleInputChange} from "../../input/formInputHandler";
import {getUser, updateUser} from "../../api/restapi";
import ModelUser from "../../model/user";
import UIButton from '../ui/button';
import TextBox from "../ui/textfield";
import {connect} from 'react-redux';
import {storeAllCampaigns, storeAllCreatives, storeLoginUser} from "../../store/actions";

const mapDispatchToProps = dispatch => {
  return {
    storeLoginUser: login => dispatch(storeLoginUser(login))
  }
};

class _User extends Component {
  state = {
    user: ModelUser
  };

  constructor() {
    super();
  }

  componentDidMount() {
    this.setState({
      user: this.props.user
    })
  }

  save = () => {
    updateUser(this.state.user)
      .then((data) => {
        this.props.storeLoginUser(data);
      });
  };

  handleInputChange(event) {
    handleInputChange(event, this);
  }

  render() {
    return (
      <div>
        <h1>Account</h1>
        <p><strong>Last Login</strong><br/>{new Date().toDateString(this.state.user.lastLogin)}</p>
        <div className="col-md-4"><TextBox name="user.username" label="Username"
                                           handler={this.handleInputChange.bind(this)}
                                           value={this.state.user.username}/></div>
        <div className="col-md-4"><TextBox name="user.firstName" label="First Name"
                                           handler={this.handleInputChange.bind(this)}
                                           value={this.state.user.firstName}/></div>
        <div className="col-md-4"><TextBox name="user.lastName" label="Last Name"
                                           handler={this.handleInputChange.bind(this)}
                                           value={this.state.user.lastName}/></div>
        <div className="col-md-12"><TextBox name="user.address" label="Address"
                                            handler={this.handleInputChange.bind(this)}
                                            value={this.state.user.address}/></div>
        <div className="col-md-4"><TextBox name="user.city" label="City" handler={this.handleInputChange.bind(this)}
                                           value={this.state.user.city}/></div>
        <div className="col-md-4"><TextBox name="user.state" label="State" handler={this.handleInputChange.bind(this)}
                                           value={this.state.user.state}/></div>
        <div className="col-md-4"><TextBox name="user.zip" label="Zip" handler={this.handleInputChange.bind(this)}
                                           value={this.state.user.zip}/></div>
        <div className="col-md-4"><TextBox name="user.email" label="Email" handler={this.handleInputChange.bind(this)}
                                           value={this.state.user.email}/></div>
        <div className="col-md-4"><TextBox name="user.phone" label="Phone" handler={this.handleInputChange.bind(this)}
                                           value={this.state.user.phone}/></div>

        <div className="col-md-12"><UIButton text="Save Changes" icon="save" action={this.save.bind(this)}/></div>
      </div>
    )
  }
}

const User = connect(
  state => ({
    user: state.user
  }), mapDispatchToProps
)(_User);

export default User;
