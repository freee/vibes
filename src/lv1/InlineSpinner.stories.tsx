import * as React from 'react';

import { boolean } from '@storybook/addon-knobs';
import { commonKnobs } from '../../stories';
import InlineSpinner from './InlineSpinner';
import MarginBase from './bases/MarginBase';
import InlineLink from './buttons/InlineLink';

export default {
  component: InlineSpinner,
};

export const InlineSpinnerComponent = () => (
  <InlineSpinner
    isLoading={boolean('IsLoading', true, 'InlineSpinner')}
    large={boolean('large', false, 'InlineSpinner')}
    {...commonKnobs()}
  />
);

export const WithButton = () => (
  <>
    <MarginBase ma={1}>
      <InlineLink mr={0.5}>ローディング中</InlineLink>
      <InlineSpinner isLoading />
    </MarginBase>
    <MarginBase ma={1}>
      <InlineSpinner isLoading />
      <InlineLink ml={0.5}>ローディング中</InlineLink>
    </MarginBase>
  </>
);
