import React from 'react';
import PropTypes from 'prop-types';

const Settings = (props) =>
  <div>
    <h3>Settings</h3>
    <p>User Match: {props.parentState.requirementsUserMatch.toString()}</p>
    <p>Secure Bids: {props.parentState.requirementsSecure.toString()}</p>
  </div>;

Settings.propTypes = {
  props: PropTypes.object.isRequired,
};

export default Settings;


