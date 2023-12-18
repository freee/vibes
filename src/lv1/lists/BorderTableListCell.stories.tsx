import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, text, select, number } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import BorderTableListCell from './BorderTableListCell';

export default {
  component: BorderTableListCell,
};

export const BorderTableListCellComponent = () => (
  <table style={{ width: '25rem' }}>
    <tbody>
      <tr>
        <BorderTableListCell
          rowSpan={number('rowSpan', 0, {}, 'BorderTableListCell')}
          small={boolean('Small', false, 'BorderTableListCell')}
          alignCenter={boolean('AlignCenter', false, 'BorderTableListCell')}
          alignRight={boolean('AlignRight', false, 'BorderTableListCell')}
          breakWord={boolean('BreakWord', false, 'BorderTableListCell')}
          onClick={action('click')}
          status={select(
            'Status',
            [undefined, 'alert', 'notice', 'success'],
            undefined,
            'BorderTableListCell'
          )}
          {...commonKnobs()}
        >
          {text('Children', 'テーブルセル', 'BorderTableListCell')}
        </BorderTableListCell>
      </tr>
    </tbody>
  </table>
);
