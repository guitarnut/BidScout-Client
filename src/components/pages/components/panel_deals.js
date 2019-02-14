import React from 'react';
import {Panel} from 'react-bootstrap';
import TextBox from '../../ui/textfield';

const PanelDeals = (props) =>
  <Panel>
    <Panel.Heading>
      <Panel.Title toggle>Deal Ids</Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
      <Panel.Body>
        <div className={'col-md-12'}>
          <TextBox name="requirementsDealIds" label="Deal Ids"
                   context={props.context} value={props.parentState.requirementsDealIds}/>
        </div>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelDeals;
