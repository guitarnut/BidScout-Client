import React, {Component} from 'react'
import {deleteXml, getAllXml, getVast, host} from "../../api/restapi";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {storeAllXml} from "../../store/actions";
import {checkAuth, confirmAction, pageNotFound} from "../../common/sharedmethods";
import UIButton from "../ui/button";

const mapDispatchToProps = dispatch => {
  return {
    storeAllXml: creatives => dispatch(storeAllXml(creatives))
  }
};

class _ViewXml extends Component {
  state = {
    vast: '',
    id: '',
    failed: false,
    user: {}
  };

  constructor() {
    super();
  }

  componentWillMount() {
    checkAuth(this);
  }

  componentDidMount() {
    const {id} = this.props.match.params;

    getVast(id)
      .then(data => {
        if (data === '') {
          pageNotFound(this);
          return;
        }
        this.setState({
          vast: data,
          id: id,
          user: this.props.user
        })
      });
  }

  edit() {
    this.props.history.push('/xml/edit/' + this.state.id);
  }

  remove() {
    if (confirmAction("Delete XML?")) {
      deleteXml(this.state.id)
        .then(() => {
          getAllXml()
            .then((data) => {
              this.props.storeAllXml(data);
              this.props.history.push('/bidder')
            });
        })
        .catch(() => {
          this.setState({
            failed: true
          })
        })
    }
  }

  render() {
    return (
      <div className={'container'}>
        <div className={'col-md-10'}>
          <h2>XML Document: {this.state.name}</h2>
        </div>
        <div className={'col-md-2'}>
          <h2><UIButton text="Edit" action={this.edit.bind(this)}/> <UIButton text="Delete"
                                                                             action={this.remove.bind(this)}/></h2>
        </div>
        <div className={'col-md-12'}>
          <hr/>
        </div>
        <div className={'col-md-12'}>
          <p>VAST Tag URI: <a target='_blank'
                              href={host + '/vast/serve/' + this.state.user.id + '/' + this.state.id}>{host + '/vast/serve/' + this.state.user.id + '/' + this.state.id}
          </a>
          </p>
          <pre lang="xml"><code>
          {decodeURIComponent(this.state.vast.replace(new RegExp('>', 'g'), '>\n'))}
        </code></pre>
        </div>

      </div>
    )
  }
}

const ViewXml = connect(state => ({
  user: state.user
}), mapDispatchToProps)(_ViewXml);

export default withRouter(ViewXml);
