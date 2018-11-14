import React from 'react';
import {Panel} from 'react-bootstrap';
import TextBox from '../../ui/textfield';

const PanelLists = (props) =>
  <Panel>
    <Panel.Heading>
      <Panel.Title toggle>Whitelist and Blacklist</Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
      <Panel.Body>
        <TextBox name="requirements.publisherWhitelist" label="Publisher Whitelist"
                 handler={props.handleInputArray}/>
        <TextBox name="requirements.domainWhitelist" label="Domain Whitelist"
                 handler={props.handleInputArray}/>
        <TextBox name="requirements.bundleWhitelist" label="Bundle Whitelist"
                 handler={props.handleInputArray}/>
        <TextBox name="requirements.publisherBlacklist" label="Publisher Blacklist"
                 handler={props.handleInputArray}/>
        <TextBox name="requirements.domainBlacklist" label="Domain Blacklist"
                 handler={props.handleInputArray}/>
        <TextBox name="requirements.bundleBlacklist" label="Bundle Blacklist"
                 handler={props.handleInputArray}/>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelLists;
