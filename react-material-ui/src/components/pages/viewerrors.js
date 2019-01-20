import React, {Component} from 'react'
import {viewBidErrors} from "../../api/restapi";

class ViewErrors extends Component {

  state = {
    errors: []
  };

  constructor() {
    super();
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
              <div className={'col-md-3'}><p key={Math.random() * 1000}>{v}</p></div>
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
