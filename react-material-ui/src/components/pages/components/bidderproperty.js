import React from 'react'
import {FaRegEdit} from 'react-icons/fa';
import UIButton from "../../ui/button";
import {Panel} from 'react-bootstrap';

function BidderProperty(props) {
  if (Object.keys(props.items).length === 0) {
    return (
      <div className={"col-md-4"}><p>You have no {props.typestring}. <a href={props.createlink}>Build a {props.typestring}.</a></p></div>
    )
  } else {
    return (
      <div className={"col-md-4"}>
        <h4>{props.typestring}</h4>
        {props.count >= props.limit ? (
          <p>You are at your limit of {props.limit}.</p>
        ):(
          <UIButton text={'Create New'} action={props.createlink}/>
        )
        }
        <div>
          <hr/>
        </div>
        {Object.keys(props.items).map((v) => {
          return (
            <Panel key={v}>
              <Panel.Body>
                <p key={v}><a href={props.viewlink + v}>{props.items[v]}</a><br/>
                  <a href={props.editlink + v}><FaRegEdit/> Edit</a></p>
              </Panel.Body>
            </Panel>
          )
        })}
      </div>
    )
  }
}

export default BidderProperty;
