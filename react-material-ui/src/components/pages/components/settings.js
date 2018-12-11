import React from 'react';
import PropTypes from 'prop-types';
import {Panel} from 'react-bootstrap';

const Settings = (props) =>
  <div className={'row'}>
    <Panel>
      <Panel.Heading><h4>Settings</h4></Panel.Heading>
      <Panel.Body>
        <p>User Match: {props.parentState.requirementsUserMatch.toString()}</p>
        <p>Secure Bids: {props.parentState.requirementsSecure.toString()}</p>
      </Panel.Body>
    </Panel>
  </div>;

Settings.propTypes = {
  props: PropTypes.object.isRequired,
};

export default Settings;


