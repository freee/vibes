import * as React from 'react';

import { commonKnobs } from '../../../stories';
import AppStoreBadge from './AppStoreBadge';

export default {
  component: AppStoreBadge,
};

export const AppStoreBadgeComponent = () => (
  <AppStoreBadge {...commonKnobs()} />
);
