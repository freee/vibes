import * as React from 'react';
import { action } from '@storybook/addon-actions';

import { StackedBarChart } from './StackedBarChart';
import { Paragraph } from '../../lv1';
import { commonKnobs } from '../../../stories';

export default {
  component: StackedBarChart,
};

const colors = ['RE', 'OR', 'YE', 'YG', 'GR', 'BG', 'PU', 'GY'] as const;
const items = colors.map((color, i) => ({
  label: color,
  value: (100 / colors.length) * (i + 1),
  valueLabel: `${(i + 1) * 10}個`,
  color: color,
}));

export const StackedBarChartComponent = () => (
  <StackedBarChart
    items={items}
    onClickItem={action('onClickItem')}
    {...commonKnobs()}
  />
);

export const WithLongLabelItem = () => (
  <>
    <Paragraph mb={1}>ラベルが長い項目は省略されます。</Paragraph>
    <StackedBarChart
      items={[
        {
          label:
            'ラベルが長い項目は省略されますラベルが長い項目は省略されますラベルが長い項目は省略されます',
          value: 30,
          valueLabel: '30%',
          color: 'RE',
        },
        {
          label: '別の項目',
          value: 70,
          valueLabel: '70%',
          color: 'OR',
        },
      ]}
      onClickItem={action('onClickItem')}
    />
  </>
);

export const WithTooSmallValueItem = () => (
  <>
    <Paragraph mb={1}>
      非情に小さな値をもつ項目であっても消失しないように、一定の幅で表示されます。それ以外の項目には残った領域が割り当てられます。
    </Paragraph>
    <StackedBarChart
      items={[
        {
          label: '非情に小さな値をもつ項目であっても、一定の幅で表示されます',
          value: 1,
          valueLabel: '1%',
          color: 'RE',
        },
        {
          label: 'それ以外の項目には残った領域が割り当てられます',
          value: 29,
          valueLabel: '29%',
          color: 'OR',
        },
        {
          label: 'それ以外の項目には残った領域が割り当てられます',
          value: 70,
          valueLabel: '70%',
          color: 'YE',
        },
      ]}
      onClickItem={action('onClickItem')}
    />
    <Paragraph mb={1} mt={2}>
      ただし、項目の値が 0（すなわち割合が 0
      ％）の場合は、項目は表示されません。
    </Paragraph>
    <StackedBarChart
      items={[
        {
          label: '項目の値が 0 の場合は非表示になります',
          value: 0,
          valueLabel: '0%',
          color: 'RE',
        },
        {
          label: 'それ以外の項目には残った領域が割り当てられます',
          value: 30,
          valueLabel: '30%',
          color: 'OR',
        },
        {
          label: '項目の値が 0 の場合は非表示になります',
          value: 0,
          valueLabel: '0%',
          color: 'RE',
        },
        {
          label: 'それ以外の項目には残った領域が割り当てられます',
          value: 70,
          valueLabel: '70%',
          color: 'YE',
        },
        {
          label: '項目の値が 0 の場合は非表示になります',
          value: 0,
          valueLabel: '0%',
          color: 'RE',
        },
      ]}
      onClickItem={action('onClickItem')}
    />
  </>
);

export const TooManyItems = () => {
  const tooManyItems = items.concat(items, items, items);
  return (
    <>
      <Paragraph mb={1}>
        親要素の幅に対して項目の数が多すぎる場合、項目が溢れることがあります。そのため、
        最小幅の 3.375rem × 項目数
        が親要素の幅よりも小さくなることを保証する必要があります。
      </Paragraph>
      <StackedBarChart
        items={tooManyItems}
        onClickItem={action('onClickItem')}
      />
    </>
  );
};
