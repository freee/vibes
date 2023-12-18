import * as React from 'react';

import { commonKnobs } from '../../../stories';
import ImageUploadIllust from './ImageUploadIllust';

export default {
  component: ImageUploadIllust,
};

export const ImageUploadIllustComponent = () => (
  <ImageUploadIllust {...commonKnobs()} />
);
