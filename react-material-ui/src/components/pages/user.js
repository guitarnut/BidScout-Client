import React, {Component} from 'react'
import {getAccountStatus, updateUser} from "../../api/restapi";
import UIButton from '../ui/button';
import TextBox from "../ui/textfield";
import {connect} from 'react-redux';
import {storeLoginUser} from "../../store/actions";
import {checkAuth, convertMilliToDateString} from "../../common/sharedmethods";
import {Badge} from 'react-bootstrap';
import {UserStatisticsModel} from "../../model/userstatistics";

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
    failedLoginAttemptCount: 0,
    status: UserStatisticsModel
  };

  constructor() {
    super();
  }

  componentWillMount() {
    checkAuth(this);
  }

  componentDidMount() {
    this.setState({
      ...this.props.user
    });
    getAccountStatus()
      .then((data) => {
        this.setState({
          status: {
            ...data
          }
        })
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
        <div className={'col-md-6'}>
          <h2>Account Settings</h2>
          <p><strong>Last Login</strong>: {convertMilliToDateString(this.state.lastLogin)}</p>
          <p><strong>Account Level:</strong> Free</p>
        </div>
        <div className={'col-md-12'}>
          <hr/>
        </div>

        <div className={'col-md-12'}>
          <h4>Bidder Limits</h4>
        </div>
        <div className={'col-md-4'}><p><Badge>{this.state.status.campaigns}/{this.state.status.campaignsLimit}</Badge> Campaigns</p></div>
        <div className={'col-md-4'}><p><Badge>{this.state.status.creatives}/{this.state.status.creativesLimit}</Badge> Creatives</p></div>
        <div className={'col-md-4'}><p><Badge>{this.state.status.vast}/{this.state.status.vastLimit}</Badge> VAST Documents</p></div>
        <div className={'col-md-12'}>
          <hr/>
        </div>
        <div className={'col-md-12'}>
          <h4>Stored Request Record Limits</h4>
        </div>
        <div className={'col-md-6'}><p><Badge>{this.state.status.auctionRecords}/{this.state.status.auctionRecordsLimit}</Badge> Auction Records</p></div>
        <div className={'col-md-6'}><p><Badge>{this.state.status.vastRecords}/{this.state.status.vastRecordsLimit}</Badge> VAST Tag Records</p></div>
        <div className={'col-md-12'}>
          <hr/>
        </div>
        <div className={'col-md-12'}>
          <h4>Daily HTTP Request Limits</h4>
        </div>
        <div className={'col-md-6'}><p><Badge>{this.state.status.bidRequests}/{this.state.status.bidRequestsLimit}</Badge> Bid Requests</p></div>
        <div className={'col-md-6'}><p><Badge>{this.state.status.vastTagRequests}/{this.state.status.vastTagRequestsLimit}</Badge> VAST Tag Requests</p></div>
        <div className={'col-md-12'}><p>Requests reset to 0 on {convertMilliToDateString(this.state.status.periodEnd)}.</p></div>

        <div className={'col-md-12'}>
          <hr/>
        </div>
        <div className={'col-md-4'}><TextBox name="username" label="Username" context={this}
                                             value={this.state.username}/></div>
        <div className={'col-md-4'}><TextBox name="firstName" label="First Name" context={this}
                                             value={this.state.firstName}/></div>
        <div className={'col-md-4'}><TextBox name="lastName" label="Last Name" context={this}
                                             value={this.state.lastName}/></div>
        <div className={'col-md-12'}>
          <hr/>
        </div>
        <div className={'col-md-4'}><TextBox name="address" label="Address" context={this} value={this.state.address}/>
        </div>
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
