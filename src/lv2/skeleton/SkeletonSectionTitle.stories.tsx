import * as React from 'react';

import { commonKnobs } from '../../../stories';
import { SkeletonSectionTitle } from './SkeletonSectionTitle';

export default {
  component: SkeletonSectionTitle,
};
export const SkeletonSectionTitleComponent = () => (
  <SkeletonSectionTitle {...commonKnobs()} />
);
