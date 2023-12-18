import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import TableListHeadCell from './TableListHeadCell';

export default {
  component: TableListHeadCell,
};

export const TableListHeadCellComponent = () => (
  <table style={{ width: '25rem' }}>
    <tbody>
      <tr>
        <TableListHeadCell
          alignCenter={boolean('AlignCenter', false, 'TableListHeadCell')}
          alignRight={boolean('Alignright', false, 'TableListHeadCell')}
          ordering={
            select(
              'Ordering',
              { desc: 'desc', asc: 'asc', undefined: '' },
              '',
              'TableListHeadCell'
            ) || undefined
          }
          minWidth={number('MinWidth', 0, undefined, 'TableListHeadCell')}
          maxWidth={number('MaxWidth', 0, undefined, 'TableListHeadCell')}
          onClick={action('click')}
          {...commonKnobs()}
        >
          {text('Children', 'テーブルセル', 'TableListHeadCell')}
        </TableListHeadCell>
      </tr>
    </tbody>
  </table>
);
