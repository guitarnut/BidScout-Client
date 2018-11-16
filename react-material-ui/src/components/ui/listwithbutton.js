import React from 'react'
import UIButton from "./button";
import SelectList from "./selectlist";

const ListWithButton = (props) =>
  <div>
    <div className="col-md-3">
      <SelectList data={props.data} name={props.name}
                  handler={props.handler} value={props.value}/></div>
    <div className="col-md-9">
      <UIButton text={props.buttonText} action={props.action}/>
    </div>
  </div>;
export default ListWithButton;
