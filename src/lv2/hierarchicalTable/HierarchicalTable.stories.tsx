import * as React from 'react';

import HierarchicalTable, {
  HierarchicalTableHeader,
  HierarchicalTableRow,
} from './HierarchicalTable';
import ScrollableBase from '../../lv1/bases/ScrollableBase';
import { commonKnobs } from '../../../stories';
import { Order } from '../../lv1/lists/TableListHeadCell';

const sampleHeaders: Array<HierarchicalTableHeader> = [
  { value: '部門(階層表示)', width: 20, minWidth: 20 },
  { value: '見出し1', minWidth: 10, alignRight: true },
  { value: '見出し2', minWidth: 10, alignRight: true },
  { value: '見出し3', minWidth: 10, alignRight: true },
  { value: '見出し4', minWidth: 10, alignRight: true },
];

const sampleRows: Array<HierarchicalTableRow> = [
  {
    cells: [
      { value: '部門1' },
      { value: '1,000', alignRight: true },
      { value: '2,000', alignRight: true },
      { value: '3,000', alignRight: true },
      { value: '4,000', alignRight: true },
    ],
    childRows: [
      {
        cells: [
          { value: '部門1-1' },
          { value: '500', alignRight: true },
          { value: '1,000', alignRight: true },
          { value: '1,500', alignRight: true },
          { value: '2,000', alignRight: true },
        ],
        childRows: [
          {
            cells: [
              { value: '部門1-1-1' },
              { value: '250', alignRight: true },
              { value: '500', alignRight: true },
              { value: '750', alignRight: true },
              { value: '1,000', alignRight: true },
            ],
            childRows: [],
          },
          {
            cells: [
              { value: '部門1-1-2' },
              { value: '250', alignRight: true },
              { value: '500', alignRight: true },
              { value: '750', alignRight: true },
              { value: '1,000', alignRight: true },
            ],
            childRows: [],
          },
        ],
      },
      {
        cells: [
          { value: '部門1-2' },
          { value: '500', alignRight: true },
          { value: '1,000', alignRight: true },
          { value: '1,500', alignRight: true },
          { value: '2,000', alignRight: true },
        ],
        childRows: [],
      },
    ],
  },
  {
    cells: [
      { value: '部門2' },
      { value: '1,000', alignRight: true },
      { value: '2,000', alignRight: true },
      { value: '3,000', alignRight: true },
      { value: '4,000', alignRight: true },
    ],
    childRows: [],
  },
  {
    cells: [
      { value: '部門3' },
      { value: '3,000', alignRight: true },
      { value: '4,000', alignRight: true },
      { value: '5,000', alignRight: true },
      { value: '6,000', alignRight: true },
    ],
    childRows: [
      {
        cells: [
          { value: '部門3-1' },
          { value: '3,000', alignRight: true },
          { value: '4,000', alignRight: true },
          { value: '5,000', alignRight: true },
          { value: '6,000', alignRight: true },
        ],
        childRows: [
          {
            cells: [
              { value: '部門3-1-1' },
              { value: '1,000', alignRight: true },
              { value: '2,000', alignRight: true },
              { value: '3,000', alignRight: true },
              { value: '4,000', alignRight: true },
            ],
            childRows: [
              {
                cells: [
                  { value: '部門3-1-1-1' },
                  { value: '1,000', alignRight: true },
                  { value: '2,000', alignRight: true },
                  { value: '3,000', alignRight: true },
                  { value: '4,000', alignRight: true },
                ],
                childRows: [
                  {
                    cells: [
                      { value: '部門3-1-1-1-1' },
                      { value: '1,000', alignRight: true },
                      { value: '2,000', alignRight: true },
                      { value: '3,000', alignRight: true },
                      { value: '4,000', alignRight: true },
                    ],
                    childRows: [],
                  },
                  {
                    cells: [
                      { value: '部門3-1-1-1-2' },
                      { value: '0', alignRight: true },
                      { value: '0', alignRight: true },
                      { value: '0', alignRight: true },
                      { value: '0', alignRight: true },
                    ],
                    childRows: [],
                  },
                ],
              },
            ],
          },
          {
            cells: [
              { value: '部門3-1-2' },
              { value: '2,000', alignRight: true },
              { value: '2,000', alignRight: true },
              { value: '2,000', alignRight: true },
              { value: '2,000', alignRight: true },
            ],
            childRows: [],
          },
        ],
      },
    ],
  },
];

export default {
  component: HierarchicalTable,
};

const Component = (props: React.ComponentProps<typeof HierarchicalTable>) => (
  <HierarchicalTable {...props} {...commonKnobs()} />
);

export const HierarchicalTableComponent = () => (
  <Component headers={sampleHeaders} rows={sampleRows} />
);

export const FixedHeaderAndFixedRowHeader = () => (
  <ScrollableBase scrollableX scrollableY>
    <div style={{ height: '50vh' }}>
      <Component
        headers={sampleHeaders}
        rows={sampleRows}
        fixedHeader={true}
        fixedRowHeader={true}
      />
    </div>
  </ScrollableBase>
);

export const SortableHeader = () => {
  const [ordering, setOrdering] = React.useState<Order>('init');

  const hierarchilcalSort = (rows: Array<HierarchicalTableRow>) => {
    rows.reverse();
    rows.map((row) => hierarchilcalSort(row.childRows));
    return rows;
  };

  const nextOrder: {
    [key in Order]: Order;
  } = {
    asc: 'desc',
    desc: 'init',
    init: 'asc',
  };

  const headers = [
    {
      ...sampleHeaders[0],
      ordering,
      onClick: () => setOrdering((prev) => nextOrder[prev]),
    } as HierarchicalTableHeader,
  ].concat(sampleHeaders.slice(1));

  const rows = [...sampleRows];
  if (ordering === 'desc') {
    hierarchilcalSort(rows);
  }

  return (
    <ScrollableBase scrollableX scrollableY>
      <Component headers={headers} rows={rows} />
    </ScrollableBase>
  );
};
