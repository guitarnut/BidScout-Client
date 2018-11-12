import React from 'react'
import UIButton from "./button";
import SelectList from "./selectlist";

function ListWithButton(props) {
  return (
    <div>
      <SelectList data={props.data} name={props.name}
                     handler={props.handler} value={props.value}/>
        <UIButton text={props.buttonText} action={props.action}/>
    </div>
  )
}
export default ListWithButton;
