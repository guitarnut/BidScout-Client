import React from 'react';
import PropTypes from 'prop-types';

const Settings = ({data}) =>
  <div>
    <h3>Settings</h3>
    <p>User Match: {data.userMatch.toString()}</p>
    <p>Secure Bids: {data.secure.toString()}</p>
  </div>;

Settings.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Settings;


