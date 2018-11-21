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
    return (
      <div>
        <h1>Bid Request Errors</h1>
        {this.state.errors.map((v) => {
              return (
                <p key={Math.random() * 1000}>{v}</p>
              )
        })}
      </div>
    )
  }
}

export default ViewErrors;
