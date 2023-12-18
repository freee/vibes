import * as React from 'react';

import { commonKnobs } from '../../../stories';
import { number } from '@storybook/addon-knobs';
import { SkeletonListTable } from './SkeletonListTable';
import { SkeletonRectangle } from './SkeletonRectangle';
import { SkeletonCircle } from './SkeletonCircle';
import { SkeletonIcon } from './SkeletonIcon';

export default {
  component: SkeletonListTable,
};

export const SkeletonListTableComponent = () => (
  <SkeletonListTable
    columnCount={number('columnCount', 5, undefined, 'SkeletonListTable')}
    rowCount={number('rowCount', 3, undefined, 'SkeletonListTable')}
    {...commonKnobs()}
  />
);

export const CustomSkeletonComponents = () => (
  <SkeletonListTable
    rowCells={[
      { value: <SkeletonRectangle /> },
      { value: <SkeletonCircle /> },
      { value: <SkeletonIcon /> },
    ]}
  />
);
