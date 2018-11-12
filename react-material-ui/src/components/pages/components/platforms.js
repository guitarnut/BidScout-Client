import React from 'react'

function Platforms(props) {
  return (
  <div>
    <h3>Platforms</h3>
    <p>Mobile: {props.data.mobile.toString()}</p>
    <p>Desktop: {props.data.desktop.toString()}</p>
    <p>InApp: {props.data.inapp.toString()}</p>
    <p>CTV: {props.data.ctv.toString()}</p>
  </div>
  )
}
export default Platforms;
