import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import TableListCell from './TableListCell';
import TableListRow from './TableListRow';

export default {
  component: TableListRow,
};

export const TableListRowComponent = () => {
  return (
    <table style={{ width: '25rem' }}>
      <tbody>
        <TableListRow
          url={text('Url', '', 'TableListCell')}
          onClick={action('click')}
          onSelfWindowNavigation={action('self window navigation')}
          {...commonKnobs()}
        >
          <TableListCell>テーブルセル1</TableListCell>
          <TableListCell>テーブルセル2</TableListCell>
          <TableListCell>テーブルセル3</TableListCell>
        </TableListRow>
      </tbody>
    </table>
  );
};
