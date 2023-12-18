import * as React from 'react';

import { commonKnobs } from '../../../stories';
import GooglePlayBadge from './GooglePlayBadge';

export default {
  component: GooglePlayBadge,
};

export const GooglePlayBadgeComponent = () => (
  <GooglePlayBadge {...commonKnobs()} />
);
