import * as React from 'react';

import WithDescriptionContent from './WithDescriptionContent';
import { commonKnobs } from '../../../stories';
import TextField from '../forms/TextField';
import Note from '../typography/Note';
import Paragraph from '../typography/Paragraph';

import { select } from '@storybook/addon-knobs';
import { InlineLink } from '..';
export default {
  component: WithDescriptionContent,
};
export const WithDescriptionContentComponent = () => (
  <WithDescriptionContent
    position={select(
      'Position',
      {
        horizontal: 'horizontal',
        vertical: 'vertical',
        'vertical-reverse': 'vertical-reverse',
      },
      'vertical',
      'WithDescriptionContent'
    )}
    renderContent={(descriptionContentId) => (
      <TextField aria-describedby={descriptionContentId} label="秘密の質問" />
    )}
    renderDescriptionContent={() => (
      <Note>8文字以上20文字以内で入力してください</Note>
    )}
    {...commonKnobs()}
  />
);

export const WithMargin = () => {
  return (
    <>
      <Paragraph mb={1}>
        実際の使用時はマージンを0.5rem程度のmarginをつけて、いい感じに調整してください
      </Paragraph>

      <WithDescriptionContent
        position="horizontal"
        renderContent={(descriptionContentId) => (
          <TextField
            aria-describedby={descriptionContentId}
            label="テキストフィールド"
          />
        )}
        renderDescriptionContent={() => (
          <Note ml={0.5}>ml=0.5をNoteにつけている例</Note>
        )}
        mb={1.5}
      />

      <WithDescriptionContent
        position="vertical"
        renderContent={(descriptionContentId) => (
          <TextField
            aria-describedby={descriptionContentId}
            label="テキストフィールド"
          />
        )}
        renderDescriptionContent={() => (
          <Note mt={0.5}>mt=0.5をNoteにつけている例</Note>
        )}
        mb={1.5}
      />

      <WithDescriptionContent
        position="vertical-reverse"
        renderContent={(descriptionContentId) => (
          <TextField
            aria-describedby={descriptionContentId}
            label="テキストフィールド"
          />
        )}
        renderDescriptionContent={() => (
          <Note mb={0.5}>mb=0.5をNoteにつけている例</Note>
        )}
        mb={1.5}
      />
    </>
  );
};

export const DescriptionWithLink = () => (
  <WithDescriptionContent
    renderDescriptionContent={() => (
      <Note mt={0.5}>
        注釈内に
        <InlineLink href="https://www.freee.co.jp/">
          こんなふうにリンク等がある
        </InlineLink>
        場合、フォーカス順は<code>renderContent</code>内の要素より先になります
      </Note>
    )}
    renderContent={(descId) => (
      <TextField aria-describedby={descId} label="テキストフィールド" />
    )}
  />
);

export const InsideLargeWidth = () => (
  <div style={{ width: '70rem' }}>
    <WithDescriptionContent
      position="horizontal"
      renderContent={(descriptionContentId) => (
        <TextField aria-describedby={descriptionContentId} label="秘密の質問" />
      )}
      renderDescriptionContent={() => (
        <Note>
          横幅が大きい場所に入れたときに表示崩れが起きないことを確認するためのstoryです
        </Note>
      )}
    />
  </div>
);
