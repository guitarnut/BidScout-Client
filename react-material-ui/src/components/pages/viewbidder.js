import React, {Component} from 'react'
import {getCampaignNames, getCreativeNames, getUserId} from '../../api/restapi';
import ListWithButton from "../ui/listwithbutton";
import {withRouter} from 'react-router-dom';

class ViewBidder extends Component {
  state = {
    allCampaigns: [],
    allCreatives: {},
    selectedCampaign: '',
    selectedCreative: '',
    userid: ''
  };

  constructor() {
    super();
  }

  componentDidMount() {
    getCampaignNames()
      .then(data => {
        console.log(getUserId());
        this.setState({
          userid: getUserId()
        });
        this.setState({
          allCampaigns: data
        })
      });
    getCreativeNames()
      .then(data => {
        this.setState({
          allCreatives: data
        })
      });
  }

  setCampaign(v) {
    this.setState({
      selectedCampaign: v
    })
  }

  viewCampaign() {
    if (this.state.selectedCampaign !== '') {
      this.props.history.push('/campaign/view/' + this.state.selectedCampaign);
    }
  }

  setCreative(v) {
    this.setState({
      selectedCreative: v
    })
  }

  viewCreative() {
    if (this.state.selectedCreative !== '') {
      this.props.history.push('/creative/view/' + this.state.selectedCreative);
    }
  }

  render() {
    return (
      <div>
        <h1>Bidder</h1>
        <p>Endpoint: [host]/bid/{this.state.userid}/[OPTIONAL]</p>
        <ListWithButton data={this.state.allCampaigns} name="Select Campaign" handler={this.setCampaign.bind(this)}
                        value={this.state.selectedCampaign} buttonText="View" action={this.viewCampaign.bind(this)}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed turpis sit amet purus aliquam tempor.
          Etiam cursus, erat at sagittis semper, dui lectus lacinia nisl, eu imperdiet nisi arcu vitae lectus. Mauris
          rutrum urna eu justo cursus porta. Sed viverra sodales tincidunt. Sed felis mi, semper eget arcu quis,
          vestibulum commodo erat. Vivamus ut nibh fringilla, pulvinar dolor quis, rhoncus est. Vivamus nec semper
          nisi.
          Nulla sit amet laoreet est. Vivamus nec tincidunt orci. Ut ex leo, aliquet faucibus maximus sed, varius eu
          neque. Ut placerat est mauris.</p>
        <ListWithButton data={this.state.allCreatives} name="Select Creative"
                        handler={this.setCreative.bind(this)} value={this.state.selectedCreative} buttonText="View"
                        action={this.viewCreative.bind(this)}/>
      </div>
    )
  }
}

export default withRouter(ViewBidder);
