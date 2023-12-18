import * as React from 'react';

import { text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import DescriptionListCell from './DescriptionListCell';

export default {
  component: DescriptionListCell,
};

export const DescriptionListCellComponent = () => (
  <table style={{ width: '25rem' }}>
    <tbody>
      <tr>
        <DescriptionListCell {...commonKnobs()}>
          {text('Children', 'テーブルセル', 'DescriptionListCell')}
        </DescriptionListCell>
      </tr>
    </tbody>
  </table>
);
