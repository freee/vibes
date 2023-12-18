import * as React from 'react';

import { SkeletonStackedBarChart } from '../skeleton/SkeletonStackedBarChart';
import { commonKnobs } from '../../../stories';

export default {
  component: SkeletonStackedBarChart,
};

export const SkeletonStackedBarChartComponent = () => (
  <SkeletonStackedBarChart {...commonKnobs()} />
);
