import * as React from 'react';

import { commonKnobs } from '../../../stories';
import CsvUploadIllust from './CsvUploadIllust';

export default {
  component: CsvUploadIllust,
};

export const CsvUploadIllustComponent = () => (
  <CsvUploadIllust {...commonKnobs()} />
);
