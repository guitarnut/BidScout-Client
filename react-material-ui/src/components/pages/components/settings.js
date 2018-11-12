import React from 'react'

function Settings(props) {
  return (
    <div>
      <h3>Settings</h3>
      <p>User Match: {props.data.userMatch.toString()}</p>
      <p>Secure Bids: {props.data.secure.toString()}</p>
    </div>
  )
}
export default Settings;


