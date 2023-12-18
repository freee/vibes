import * as React from 'react';

import { commonKnobs } from '../../../stories';
import FileUploadIllust from './FileUploadIllust';

export default {
  component: FileUploadIllust,
};

export const FileUploadIllustComponent = () => (
  <FileUploadIllust {...commonKnobs()} />
);
