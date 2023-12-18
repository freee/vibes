import * as React from 'react';

import { commonKnobs } from '../../../stories';
import CloudSkeletonIllust from './CloudSkeletonIllust';

export default {
  component: CloudSkeletonIllust,
};

export const CloudSkeletonIllustComponent = () => (
  <CloudSkeletonIllust {...commonKnobs()} />
);
