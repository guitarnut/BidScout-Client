import React, {Component} from 'react';
import {storeLoginUser, storeLogout} from "../../../store/actions/index";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {logout} from "../../../api/restapi";

const mapDispatchToProps = dispatch => {
  return {
    storeLogout: () => dispatch(storeLogout())
  }
};

class _Logout extends Component {

  state = {
    username: null,
    password: null,
  };

  componentDidMount() {
    this.props.storeLogout();
    logout();
  }

  gotoLogin() {
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className={'row'}>
        <div className={'col-md-12'}>
          <h2>You have been successfully logged out.</h2>
          <p onClick={this.gotoLogin.bind(this)}>Return to login page.</p>
        </div>
      </div>
    )
  }

}

const Logout = connect(null, mapDispatchToProps)(_Logout);

export default withRouter(Logout);
