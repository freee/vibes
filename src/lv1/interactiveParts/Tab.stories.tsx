import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import Tab from './Tab';

export default {
  component: Tab,
};

export const TabComponent = () => (
  <Tab
    current={boolean('Current', false, 'Tab')}
    small={boolean('Small', false, 'Tab')}
    onClick={action('click')}
    onBlur={action('blur')}
    notification={text('notification', '', 'Tab')}
    {...commonKnobs()}
  >
    {text('Children', 'タブテキスト', 'Tab')}
  </Tab>
);

export const Default = () => {
  const [index, setIndex] = React.useState(1);

  return (
    <div>
      <Tab current={index === 0} onClick={() => setIndex(0)}>
        タブテキスト
      </Tab>
      <Tab current={index === 1} onClick={() => setIndex(1)}>
        タブテキスト
      </Tab>
      <Tab
        current={index === 2}
        onClick={() => setIndex(2)}
        notification="新着メッセージがあります"
      >
        タブテキスト
      </Tab>
    </div>
  );
};

export const Small = () => {
  const [index, setIndex] = React.useState(1);

  return (
    <div>
      <Tab small current={index === 0} onClick={() => setIndex(0)}>
        タブテキスト
      </Tab>
      <Tab small current={index === 1} onClick={() => setIndex(1)}>
        タブテキスト
      </Tab>
      <Tab small current={index === 2} onClick={() => setIndex(2)}>
        タブテキスト
      </Tab>
    </div>
  );
};
