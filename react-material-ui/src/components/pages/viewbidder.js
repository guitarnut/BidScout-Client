import React, {Component} from 'react'
import {getCampaignNames, getCreativeNames, getUserId} from '../../api/restapi';
import ListWithButton from "../ui/listwithbutton";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class _ViewBidder extends Component {
  state = {
    campaigns: {},
    creatives: {},
    selectedCampaign: '',
    selectedCreative: '',
    user: {}
  };

  constructor() {
    super();
  }

  componentDidMount() {
    console.log(this.props);
    this.setState({
      campaigns: this.props.campaigns,
      creatives: this.props.creatives,
      user: this.props.user
    });
  }

  setCampaign(v) {
    this.setState({
      selectedCampaign: v
    })
  }

  setCreative(v) {
    this.setState({
      selectedCreative: v
    })
  }

  viewSelected(v) {
    if(v[0].split('/').length === 4) {
      this.props.history.push(v[0]);
    }
  }

  render() {
    return (
      <div>
        <h1>Bidder</h1>
        <p>Endpoint: [host]/bid/{this.state.user.id}/[OPTIONAL]</p>
        <ListWithButton data={this.state.campaigns} name="Select Campaign" handler={this.setCampaign.bind(this)}
                        value={this.state.selectedCampaign} buttonText="View"
                        action={this.viewSelected.bind(this, ['/campaign/view/' + this.state.selectedCampaign])}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed turpis sit amet purus aliquam tempor.
          Etiam cursus, erat at sagittis semper, dui lectus lacinia nisl, eu imperdiet nisi arcu vitae lectus. Mauris
          rutrum urna eu justo cursus porta. Sed viverra sodales tincidunt. Sed felis mi, semper eget arcu quis,
          vestibulum commodo erat. Vivamus ut nibh fringilla, pulvinar dolor quis, rhoncus est. Vivamus nec semper
          nisi.</p>
        <ListWithButton data={this.state.creatives} name="Select Creative" handler={this.setCreative.bind(this)}
                        value={this.state.selectedCreative} buttonText="View"
                        action={this.viewSelected.bind(this, ['/creative/view/' + this.state.selectedCreative])}/>
      </div>
    )
  }
}

const ViewBidder = connect(
  state => ({
    campaigns: state.campaigns,
    creatives: state.creatives,
    user: state.user
  })
)(_ViewBidder);

export default withRouter(ViewBidder);
