import * as React from 'react';

import { MdHome, MdRouter } from 'react-icons/md';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { commonKnobs } from '../../../stories';
import GlobalNaviButton from './GlobalNaviButton';

export default {
  component: GlobalNaviButton,
};

export const GlobalNaviButtonComponent = () => (
  <>
    <GlobalNaviButton
      href={text('Href', '#', 'GlobalNaviButton')}
      IconComponent={MdHome}
      current={boolean('Current', true, 'GlobalNaviButton')}
      {...commonKnobs()}
    >
      {text('Children', 'ホーム', 'GlobalNaviButton')}
    </GlobalNaviButton>
    <GlobalNaviButton
      href="#"
      IconComponent={MdRouter}
      current={true}
      onSelfWindowNavigation={action('onSelfWindowNavigation')}
      {...commonKnobs()}
    >
      リンク（with react-router）
    </GlobalNaviButton>
    <GlobalNaviButton href="#" {...commonKnobs()} current={true}>
      アイコンなし（without IconComponent）
    </GlobalNaviButton>
  </>
);
