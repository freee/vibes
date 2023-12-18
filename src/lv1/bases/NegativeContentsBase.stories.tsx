import * as React from 'react';

import { NegativeContentsBase } from './NegativeContentsBase';
import ContentsBase from './ContentsBase';
import ColumnBase from './ColumnBase';
import Paragraph from '../typography/Paragraph';
import { VibesProvider } from '../../utilities';
import { commonKnobs } from '../../../stories';
import { select } from '@storybook/addon-knobs';

export default {
  component: NegativeContentsBase,
};
export const NegativeContentsBaseComponent = () => (
  <NegativeContentsBase
    contentsBasePaddingSize={
      select(
        'contentsBasePaddingSize',
        { none: '', small: 'small', large: 'large' },
        '',
        'NegativeContentsBase'
      ) || undefined
    }
    {...commonKnobs()}
  >
    <div>ContentsBaseを打ち消す専用のコンポーネントです。</div>
  </NegativeContentsBase>
);

export const Examples = () => {
  const paddingSize = select(
    'contentsBasePaddingSize',
    { none: '', small: 'small', large: 'large' },
    '',
    'NegativeContentsBase'
  );
  return (
    <ContentsBase paddingSize={paddingSize || undefined}>
      <Paragraph mb={1}>ContentsBaseにはPaddingがついています</Paragraph>
      <NegativeContentsBase
        contentsBasePaddingSize={paddingSize || undefined}
        mb={1}
      >
        <ColumnBase>
          <Paragraph>
            こういう感じでColumnBaseやListTableをContentsBase内で両サイド突き抜けて使いたい場合に使用します
          </Paragraph>
        </ColumnBase>
      </NegativeContentsBase>

      <NegativeContentsBase
        contentsBasePaddingSize={paddingSize || undefined}
        mb={1}
      >
        <ColumnBase>
          <Paragraph>
            paddingSizeにはContentsBaseへの指定と同じものを指定してください
          </Paragraph>
        </ColumnBase>
      </NegativeContentsBase>
      <NegativeContentsBase contentsBasePaddingSize={paddingSize || undefined}>
        <ColumnBase>
          <Paragraph>
            最後に置いた場合には下方向にもネガティブマージンがつきます
          </Paragraph>
        </ColumnBase>
      </NegativeContentsBase>
    </ContentsBase>
  );
};

export const Responsive = () => {
  const paddingSize = select(
    'contentsBasePaddingSize',
    { none: '', small: 'small', large: 'large' },
    '',
    'NegativeContentsBase'
  );
  return (
    <VibesProvider fixedLayout={false}>
      <ContentsBase paddingSize={paddingSize || undefined}>
        <Paragraph mb={1}>ContentsBaseにはPaddingがついています</Paragraph>
        <NegativeContentsBase
          contentsBasePaddingSize={paddingSize || undefined}
          mb={1}
        >
          <ColumnBase>
            <Paragraph>
              こういう感じでColumnBaseやListTableをContentsBase内で両サイド突き抜けて使いたい場合に使用します
            </Paragraph>
          </ColumnBase>
        </NegativeContentsBase>

        <NegativeContentsBase
          contentsBasePaddingSize={paddingSize || undefined}
          mb={1}
        >
          <ColumnBase>
            <Paragraph>
              paddingSizeにはContentsBaseへの指定と同じものを指定してください
            </Paragraph>
          </ColumnBase>
        </NegativeContentsBase>
        <NegativeContentsBase
          contentsBasePaddingSize={paddingSize || undefined}
        >
          <ColumnBase>
            <Paragraph>
              最後に置いた場合には下方向にもネガティブマージンがつきます
            </Paragraph>
          </ColumnBase>
        </NegativeContentsBase>
      </ContentsBase>
    </VibesProvider>
  );
};
