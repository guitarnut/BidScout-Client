import React, {Component} from 'react'
import {viewBidErrors} from "../../api/restapi";
import {Panel} from 'react-bootstrap';
import {checkAuth} from "../../common/sharedmethods";

class ViewErrors extends Component {

  state = {
    errors: []
  };

  constructor() {
    super();
  }
  componentWillMount() {
    checkAuth(this);
  }

  componentDidMount() {
    this.getErrors();
  }

  getErrors() {
    viewBidErrors()
      .then((data) => {
        this.setState({
          errors: data
        })
      })
  }

  render() {
    if (this.state.errors.length > 0) {
      return (
        <div className={'container'}>
          <div className={'col-md-12'}><h2>Bid Request Errors</h2></div>
          {this.state.errors.map((v) => {
            return (
              <div className={'col-md-4'} key={Math.random() * 1000}>
                <Panel>
                  <Panel.Body>
                    <p>{v}</p>
                  </Panel.Body>
                </Panel>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <div className={'container'}>
          <div className={'col-md-12'}><h2>Bid Request Errors</h2></div>
          <div className={'col-md-12'}><p>You have no bid request errors.</p></div>
        </div>
      )
    }
  }
}

export default ViewErrors;
