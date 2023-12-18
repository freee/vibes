import * as React from 'react';

import { commonKnobs } from '../../../stories';
import { number } from '@storybook/addon-knobs';
import { SkeletonDescriptionList } from './SkeletonDescriptionList';

export default {
  component: SkeletonDescriptionList,
};

export const SkeletonDescriptionListComponent = () => (
  <SkeletonDescriptionList
    rowCount={number('rowCount', 3, undefined, 'SkeletonDescriptionList')}
    {...commonKnobs()}
  />
);
