import * as React from 'react';

import FinishTaskIllust from './FinishTaskIllust';
import { commonKnobs } from '../../../stories';

export default {
  component: FinishTaskIllust,
};

export const FinishTaskIllustComponent = () => (
  <FinishTaskIllust {...commonKnobs()} />
);
