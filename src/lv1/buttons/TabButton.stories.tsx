import * as React from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import TabButton from './TabButton';

export default {
  title: 'deprecated/buttons/TabButton',
  component: TabButton,
};

export const TabButtonComponent = () => (
  <TabButton
    current={boolean('Current', false, 'TabButton')}
    small={boolean('Small', false, 'TabButton')}
    {...commonKnobs()}
  >
    {text('Children', 'タブ', 'TabButton')}
  </TabButton>
);

export const Default = () => (
  <>
    <TabButton mr={1} mb={1}>
      タブ1
    </TabButton>
    <TabButton mr={1} mb={1} current>
      タブ2
    </TabButton>
    <TabButton mr={1} mb={1}>
      タブ3
    </TabButton>
  </>
);

export const Small = () => (
  <>
    <TabButton mr={1} mb={1} small>
      タブ1
    </TabButton>
    <TabButton mr={1} mb={1} small current>
      タブ2
    </TabButton>
    <TabButton mr={1} mb={1} small>
      タブ3
    </TabButton>
  </>
);
