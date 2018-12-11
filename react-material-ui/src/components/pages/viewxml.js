import React, {Component} from 'react'
import {deleteXml, getAllXml, getVast, host} from "../../api/restapi";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {storeAllXml} from "../../store/actions";
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';


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

  componentDidMount() {
    const {id} = this.props.match.params;

    getVast(id)
      .then(data => {
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

  render() {
    return (
      <div>
        <h2>XML {this.state.name}</h2>
        <p><a onClick={this.edit.bind(this)}><FaRegEdit/></a> | <a
          onClick={this.remove.bind(this)}><FaRegTrashAlt/></a></p>
        <p>VAST Tag URI: <a target='_blank'
                            href={host + '/vast/' + this.state.user.id + '/' + this.state.id}>{host + '/vast/' + this.state.user.id + '/' + this.state.id}
                            </a>
        </p>
        <pre lang="xml"><code>
          {decodeURIComponent(this.state.vast.replace(new RegExp('>', 'g'), '>\n'))}
        </code></pre>
      </div>
    )
  }
}

const ViewXml = connect(state => ({
  user: state.user
}), mapDispatchToProps)(_ViewXml);

export default withRouter(ViewXml);
