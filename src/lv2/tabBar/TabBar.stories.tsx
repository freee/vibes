import * as React from 'react';

import { action } from '@storybook/addon-actions';

import TabBar from './TabBar';
import { commonKnobs } from '../../../stories';
import { select, boolean } from '@storybook/addon-knobs';
import Button from '../../lv1/buttons/Button';
import IconOnlyButton from '../../lv1/buttons/IconOnlyButton';
import { MdDelete, MdEdit } from 'react-icons/md';
import StatusIcon from '../../lv1/icons/StatusIcon';

export default {
  component: TabBar,
};

export const TabBarComponent = () => (
  <TabBar
    tabs={['tab1', 'tab2', 'tab3', 'tab4', 'tab5']}
    currentTabIndex={select(
      'currentTabIndex',
      {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
      },
      3,
      'TabBar'
    )}
    small={boolean('small', false, 'TabBar')}
    onClickTab={action('tabclicked')}
    {...commonKnobs()}
  />
);

export const WithDataAttributes = () => (
  <TabBar
    tabs={['tab1', 'tab2', 'tab3', 'tab4', 'tab5'].map((name) => ({
      name,
      'data-guide': name,
      'data-test': name,
      'data-tracking': name,
    }))}
    currentTabIndex={3}
    onClickTab={action('tabclicked')}
    {...commonKnobs()}
  />
);

export const WithDataAttributesAndReactElement = () => (
  <TabBar
    tabs={['tab1', 'tab2', 'tab3', 'tab4', 'tab5'].map((name) => ({
      name: (
        <>
          {name}
          <StatusIcon type="success" marginLeft>
            success
          </StatusIcon>
        </>
      ),
      'data-guide': name,
      'data-test': name,
      'data-tracking': name,
    }))}
    currentTabIndex={3}
    onClickTab={action('tabclicked')}
    {...commonKnobs()}
  />
);

export const WithButtons = () => (
  <TabBar
    tabs={['tab1', 'tab2', 'tab3', 'tab4', 'tab5']}
    currentTabIndex={3}
    onClickTab={action('tabclicked')}
    renderButtons={() => [
      <Button key={0} appearance="tertiary">
        新規登録
      </Button>,
      <IconOnlyButton
        label="編集"
        IconComponent={MdEdit}
        key={1}
        appearance="tertiary"
      />,
      <IconOnlyButton
        label="削除"
        IconComponent={MdDelete}
        key={2}
        appearance="tertiary"
      />,
    ]}
    {...commonKnobs()}
  />
);

export const WithNotifications = () => (
  <TabBar
    tabs={[
      {
        name: 'tab1',
        notification: 'New message has arrived',
      },
      {
        name: 'tab2',
      },
      {
        name: 'tab3',
        notification: 'New message has arrived',
      },
    ]}
    currentTabIndex={1}
    onClickTab={action('tabclicked')}
    {...commonKnobs()}
  />
);
