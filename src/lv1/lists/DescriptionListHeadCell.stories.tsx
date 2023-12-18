import * as React from 'react';

import { text, select } from '@storybook/addon-knobs';
import DescriptionListHeadCell from './DescriptionListHeadCell';

export default {
  component: DescriptionListHeadCell,
};

export const DescriptionListHeadCellComponent = () => (
  <table style={{ width: '25rem' }}>
    <tbody>
      <tr>
        <DescriptionListHeadCell
          spacing={
            select(
              'Spacing',
              {
                Normal: 'normal',
                Compact: 'compact',
                undefined: '',
              },
              '',
              'DescriptionListHeadCell'
            ) || undefined
          }
        >
          {text('Children', 'テーブルセル', 'DescriptionListHeadCell')}
        </DescriptionListHeadCell>
      </tr>
    </tbody>
  </table>
);
