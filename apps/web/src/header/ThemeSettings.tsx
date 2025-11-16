import { FC } from 'react';
import {
  Button,
  FlexLayout,
  Overlay,
  OverlayPanel,
  OverlayPanelContent,
  OverlayTrigger,
  Text,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  useId,
} from '@salt-ds/core';
import { SettingsIcon } from '@salt-ds/icons';

export const ThemeSettings: FC = () => {
  return (
    <Overlay placement="bottom">
      <OverlayTrigger>
        <Button>
          <SettingsIcon />
        </Button>
      </OverlayTrigger>
      <OverlayPanel role="dialog">
        <OverlayPanelContent>
          <FlexLayout direction="column" gap={2}>
            <Text>Density</Text>
            <ToggleButtonGroup>
              <ToggleButton value="high">High</ToggleButton>
              <ToggleButton value="medium">Medium</ToggleButton>
              <ToggleButton value="low">Low</ToggleButton>
              <ToggleButton value="touch">Touch</ToggleButton>
            </ToggleButtonGroup>
          </FlexLayout>
          <FlexLayout direction="column" gap={2}>
            <Text>Mode</Text>
            <ToggleButtonGroup>
              <ToggleButton value="system">System</ToggleButton>
              <ToggleButton value="dark">Dark</ToggleButton>
              <ToggleButton value="light">Light</ToggleButton>
            </ToggleButtonGroup>
          </FlexLayout>
          {/* <div className="p-2">
            <h5>Theme Settings</h5>
            <div>Theme options will go here.</div>
          </div> */}
        </OverlayPanelContent>
      </OverlayPanel>
    </Overlay>
  );
};
