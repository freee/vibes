import * as React from 'react';

import { commonKnobs } from '../../../stories';
import CloudUploadIllust from './CloudUploadIllust';

export default {
  component: CloudUploadIllust,
};

export const CloudUploadIllustComponent = () => (
  <CloudUploadIllust {...commonKnobs()} />
);
