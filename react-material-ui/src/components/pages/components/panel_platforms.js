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
          name="model.requirements.desktop"
          label="Desktop"
          value={props.requirements.desktop}
          handler={props.handleInput}
        />
        <Switcher
          name="model.requirements.mobile"
          label="Mobile"
          value={props.requirements.mobile}
          handler={props.handleInput}
        />
        <Switcher
          name="model.requirements.inapp"
          label="InApp"
          value={props.requirements.inapp}
          handler={props.handleInput}
        />
        <Switcher
          name="model.requirements.ctv"
          label="CTV"
          value={props.requirements.ctv}
          handler={props.handleInput}
        />
      </Panel.Body>
    </Panel.Collapse>
  </Panel>;

export default PanelPlatforms;
