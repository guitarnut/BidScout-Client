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
        <TextBox name="model.requirements.publisherWhitelist" label="Publisher Whitelist"
                 handler={props.handleInput} value={props.requirements.publisherWhitelist}/>
        <TextBox name="model.requirements.domainWhitelist" label="Domain Whitelist"
                 handler={props.handleInput} value={props.requirements.domainWhitelist}/>
        <TextBox name="model.requirements.bundleWhitelist" label="Bundle Whitelist"
                 handler={props.handleInput} value={props.requirements.bundleWhitelist}/>
        <TextBox name="model.requirements.publisherBlacklist" label="Publisher Blacklist"
                 handler={props.handleInput} value={props.requirements.publisherBlacklist}/>
        <TextBox name="model.requirements.domainBlacklist" label="Domain Blacklist"
                 handler={props.handleInput} value={props.requirements.domainBlacklist}/>
        <TextBox name="model.requirements.bundleBlacklist" label="Bundle Blacklist"
                 handler={props.handleInput} value={props.requirements.bundleBlacklist}/>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelLists;
