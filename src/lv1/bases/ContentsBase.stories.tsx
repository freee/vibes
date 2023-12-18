import * as React from 'react';

import ContentsBase from './ContentsBase';
import { commonKnobs } from '../../../stories';
import { select } from '@storybook/addon-knobs';

export default {
  component: ContentsBase,
};
export const ContentsBaseComponent = () => (
  <ContentsBase
    paddingSize={
      select(
        'PaddingSize',
        { none: '', small: 'small', large: 'large' },
        '',
        'ContentsBase'
      ) || undefined
    }
    {...commonKnobs()}
  >
    <div>ContentsBaseは背景色が設定されたコンテンツエリアの地色です。</div>
  </ContentsBase>
);
