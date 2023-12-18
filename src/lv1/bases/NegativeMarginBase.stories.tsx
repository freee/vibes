import * as React from 'react';

import NegativeMarginBase from './NegativeMarginBase';
import Container from './Container';
import ColumnBase from './ColumnBase';
import { commonKnobs } from '../../../stories';
import { boolean, select } from '@storybook/addon-knobs';

export default {
  component: NegativeMarginBase,
};
export const NegativeMarginBaseComponent = () => (
  <NegativeMarginBase
    top={boolean('MarginTop (deprecated)', true, 'NegativeMarginBase')}
    left={boolean('MarginLeft (deprecated)', true, 'NegativeMarginBase')}
    right={boolean('MarginRight (deprecated)', true, 'NegativeMarginBase')}
    bottom={boolean('MarginBottom (deprecated)', true, 'NegativeMarginBase')}
    marginSize={select(
      'MarginSize',
      { small: 'small', medium: 'medium', large: 'large' },
      'medium',
      'NegativeMarginBase'
    )}
    {...commonKnobs()}
  >
    マイナスのマージンを持つ領域です。このコンポーネントは将来的に廃止する可能性があります。かわりに
    マージンをつけたいコンポーネントや MarginBase コンポーネントに ma, mb, ml,
    mr, mt 属性にマイナス値を渡してください。
  </NegativeMarginBase>
);

export const Examples = () => (
  <Container marginTop marginBottom>
    <NegativeMarginBase left right>
      <ColumnBase marginBottom border="default">
        マイナスのマージンを持つ領域です。左右にマイナスのマージンを設定できます。
      </ColumnBase>
    </NegativeMarginBase>

    <NegativeMarginBase marginSize="large" left right>
      <ColumnBase marginBottom border="default">
        マージン幅を調整できます。これはlargeです。
      </ColumnBase>
    </NegativeMarginBase>

    <NegativeMarginBase marginSize="medium" left right>
      <ColumnBase marginBottom border="default">
        マージン幅を調整できます。これはmediumです。
      </ColumnBase>
    </NegativeMarginBase>

    <NegativeMarginBase marginSize="small" left right>
      <ColumnBase marginBottom border="default">
        マージン幅を調整できます。これはsmallです。
      </ColumnBase>
    </NegativeMarginBase>

    <ColumnBase marginBottom border="default">
      下のBaseは上部にマイナスのマージンを持ちます。
    </ColumnBase>

    <NegativeMarginBase top bottom>
      <ColumnBase marginBottom border="default">
        上下のマージンも調節できます。
      </ColumnBase>
    </NegativeMarginBase>

    <ColumnBase marginBottom border="default">
      上のBaseは下部にマイナスのマージンを持ちます。
    </ColumnBase>
  </Container>
);
