import React, {Component} from 'react';
import {storeLoginUser} from "../../store/actions";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {logout} from "../../api/restapi";

const mapDispatchToProps = dispatch => {
  return {
    storeLoginUser: login => dispatch(storeLoginUser(login))
  }
};

class _Logout extends Component {

  state = {
    username: null,
    password: null,
  };

  componentDidMount() {
    this.props.storeLoginUser({
      username: '',
      loggedIn: false
    });
    logout();
  }

  gotoLogin() {
    this.props.history.push('/login')
  }

  render() {
    return (
      <div>
        <h1>You have been successfully logged out.</h1>
        <p onClick={this.gotoLogin.bind(this)}>Return to login page.</p>
      </div>
    )
  }

}

const Logout = connect(null, mapDispatchToProps)(_Logout);

export default withRouter(Logout);
