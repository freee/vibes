import * as React from 'react';

import { actions } from '@storybook/addon-actions';
import { text, number, select, boolean } from '@storybook/addon-knobs';
import Pagination from './Pagination';
import { commonKnobs } from '../../../stories';

export default {
  component: Pagination,
};

const handlers = actions({
  onChange: 'change',
  onFocus: 'focus',
  onBlur: 'blur',
  onKeyDown: 'keydown',
  onKeyUp: 'keyup',
});

export const PaginationComponent = () => (
  <Pagination
    rowsPerPageOptions={[
      { value: '10' },
      { value: '20' },
      { value: '50' },
      { value: '100' },
      { value: '200' },
    ]}
    currentPage={number('currentPage', 1, {}, 'Pagination')}
    rowCount={number('rowCount', 999, {}, 'Pagination')}
    displayRowCount={text('displayRowCount', '', 'Pagination')}
    selectBoxWidth={
      select(
        'selectBoxWidth',
        {
          xSmall: 'xSmall',
          small: 'small',
          medium: 'medium',
          large: 'large',
        },
        'small',
        'Pagination'
      ) || undefined
    }
    disabled={boolean('disabled', false, 'Pagination')}
    rowsPerPageValue={number('value', 20, {}, 'Pagination')}
    {...handlers}
    {...commonKnobs()}
  />
);

export const InteractiveSample = () => {
  const [rowsPerPageValue, setRowsPerPageValue] = React.useState<string>('20');
  return (
    <Pagination
      rowsPerPageOptions={[
        { value: '10' },
        { value: '20' },
        { value: '50' },
        { value: '100' },
        { value: '200' },
      ]}
      currentPage={number('currentPage', 1, {}, 'Pagination')}
      rowCount={number('rowCount', 999, {}, 'Pagination')}
      displayRowCount={text('displayRowCount', '', 'Pagination')}
      selectBoxWidth={
        select(
          'selectBoxWidth',
          {
            xSmall: 'xSmall',
            small: 'small',
            medium: 'medium',
            large: 'large',
          },
          'small',
          'Pagination'
        ) || undefined
      }
      disabled={boolean('disabled', false, 'Pagination')}
      rowsPerPageValue={Number(rowsPerPageValue)}
      onChange={(e) => setRowsPerPageValue(e.target.value)}
      {...commonKnobs()}
    />
  );
};

export const RowsPerPageOptionName = () => (
  <Pagination
    rowsPerPageOptions={[
      { value: '10', name: 'ten' },
      { value: '20', name: 'twenty' },
      { value: '50', name: 'fifty' },
      { value: '100', name: 'one hundred' },
      { value: '200', name: 'two hundreds' },
    ]}
    currentPage={number('currentPage', 1, {}, 'Pagination')}
    rowCount={number('rowCount', 999, {}, 'Pagination')}
    displayRowCount={text('displayRowCount', '', 'Pagination')}
    selectBoxWidth={
      select(
        'selectBoxWidth',
        {
          xSmall: 'xSmall',
          small: 'small',
          medium: 'medium',
          large: 'large',
        },
        'small',
        'Pagination'
      ) || undefined
    }
    disabled={boolean('disabled', false, 'Pagination')}
    rowsPerPageValue={number('value', 20, {}, 'Pagination')}
    {...handlers}
    {...commonKnobs()}
  />
);

export const WithThousandsSeparator = () => (
  <Pagination
    rowsPerPageOptions={[
      { value: '1000' },
      { value: '2000' },
      { value: '3000' },
    ]}
    currentPage={1}
    rowCount={1500}
    selectBoxWidth="small"
    rowsPerPageValue={1000}
    {...handlers}
    {...commonKnobs()}
  />
);

export const WithSuffixedRowCount = () => (
  <Pagination
    rowsPerPageOptions={[
      { value: '1000' },
      { value: '2000' },
      { value: '3000' },
    ]}
    currentPage={1}
    rowCount={1500}
    displayRowCount={'1000件以上'}
    selectBoxWidth="small"
    rowsPerPageValue={1000}
    {...handlers}
    {...commonKnobs()}
  />
);

export const WithCurrentPageRowCount = () => (
  <Pagination
    rowsPerPageOptions={[{ value: '20' }, { value: '50' }, { value: '100' }]}
    currentPage={3}
    currentPageRowCount={15}
    selectBoxWidth="small"
    rowsPerPageValue={20}
    {...handlers}
    {...commonKnobs()}
  />
);
