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
        <TextBox name="model.requirements.dealIds" label="Deal Ids"
                 handler={props.handleInput} value={props.requirements.dealIds}/>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelDeals;
