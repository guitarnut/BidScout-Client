import React from 'react';
import {Panel} from 'react-bootstrap';
import Switcher from "../../ui/switch";

const PanelPlatforms = (props) =>
  <Panel>
    <Panel.Heading>
      <Panel.Title toggle>Platforms</Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
      <Panel.Body>
        <Switcher
          name="requirementsDesktop"
          label="Desktop"
          value={props.parentState.requirementsDesktop}
          context={props.context}
        />
        <Switcher
          name="requirementsMobile"
          label="Mobile"
          value={props.parentState.requirementsMobile}
          context={props.context}
        />
        <Switcher
          name="requirementsInapp"
          label="InApp"
          value={props.parentState.requirementsInapp}
          context={props.context}
        />
        <Switcher
          name="requirementsCtv"
          label="CTV"
          value={props.parentState.requirementsCtv}
          context={props.context}
        />
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelPlatforms;
