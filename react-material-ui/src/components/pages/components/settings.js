import React from 'react';
import PropTypes from 'prop-types';
import {Panel} from 'react-bootstrap';

const Settings = (props) =>
  <div className={'row'}>
    <Panel>
      <Panel.Heading><h4>Settings</h4></Panel.Heading>
      <Panel.Body>
        <div className={'col-md-6'}><p><strong>User Match:</strong> {props.parentState.requirementsUserMatch.toString()}</p></div>
        <div className={'col-md-6'}><p><strong>Secure Bids:</strong> {props.parentState.requirementsSecure.toString()}</p></div>
      </Panel.Body>
    </Panel>
  </div>;

Settings.propTypes = {
  props: PropTypes.object.isRequired,
};

export default Settings;


