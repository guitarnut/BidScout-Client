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
        <div className={'col-md-12'}>
          <TextBox name="requirementsPublisherWhitelist" label="Publisher Whitelist"
                   context={props.context} value={props.parentState.requirementsPublisherWhitelist}/>
          <TextBox name="requirementsDomainWhitelist" label="Domain Whitelist"
                   context={props.context} value={props.parentState.requirementsDomainWhitelist}/>
          <TextBox name="requirementsBundleWhitelist" label="Bundle Whitelist"
                   context={props.context} value={props.parentState.requirementsBundleWhitelist}/>
          <hr/>
          <TextBox name="requirementsPublisherBlacklist" label="Publisher Blacklist"
                   context={props.context} value={props.parentState.requirementsPublisherBlacklist}/>
          <TextBox name="requirementsDomainBlacklist" label="Domain Blacklist"
                   context={props.context} value={props.parentState.requirementsDomainBlacklist}/>
          <TextBox name="requirementsBundleBlacklist" label="Bundle Blacklist"
                   context={props.context} value={props.parentState.requirementsBundleBlacklist}/>
        </div>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelLists;
