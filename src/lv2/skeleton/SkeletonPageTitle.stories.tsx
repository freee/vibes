import * as React from 'react';

import { commonKnobs } from '../../../stories';
import { SkeletonPageTitle } from './SkeletonPageTitle';

export default {
  component: SkeletonPageTitle,
};

export const SkeletonPageTitleComponent = () => (
  <SkeletonPageTitle {...commonKnobs()} />
);
