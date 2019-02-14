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
        <div className={'col-md-3'}>
          <Switcher
            name="requirementsDesktop"
            label="Desktop"
            value={props.parentState.requirementsDesktop}
            context={props.context}
          />
        </div>
        <div className={'col-md-3'}>
          <Switcher
            name="requirementsMobile"
            label="Mobile"
            value={props.parentState.requirementsMobile}
            context={props.context}
          />
        </div>
        <div className={'col-md-3'}>
          <Switcher
            name="requirementsInapp"
            label="InApp"
            value={props.parentState.requirementsInapp}
            context={props.context}
          />
        </div>
        <div className={'col-md-3'}>
          <Switcher
            name="requirementsCtv"
            label="CTV"
            value={props.parentState.requirementsCtv}
            context={props.context}
          />
        </div>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelPlatforms;
