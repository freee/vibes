import * as React from 'react';

import TableListHead from './TableListHead';
import { boolean, number } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import TableListHeadCell from './TableListHeadCell';

export default {
  component: TableListHead,
};

export const TableListHeadComponent = () => (
  <table style={{ width: '25rem' }}>
    <tbody>
      <TableListHead
        fixedHeader={boolean('fixedHeader', false, 'TableListHead')}
        fixedHeaderOffset={number('fixedHeaderOffset', 0, {}, 'TableListHead')}
        {...commonKnobs()}
      >
        <TableListHeadCell>テーブルセル1</TableListHeadCell>
        <TableListHeadCell>テーブルセル2</TableListHeadCell>
        <TableListHeadCell>テーブルセル3</TableListHeadCell>
      </TableListHead>
    </tbody>
  </table>
);
