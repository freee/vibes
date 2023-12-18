import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import Paragraph from '../typography/Paragraph';
import Note from '../typography/Note';
import InlineLink from './InlineLink';

export default {
  component: InlineLink,
};

export const InlineLinkComponent = () => (
  <InlineLink
    href={text('Href', 'https://www.freee.co.jp/', 'InlineLink') || undefined}
    target={select(
      'Target',
      {
        _blank: '_blank',
        _self: '_self',
      },
      '_self',
      'InlineLink'
    )}
    rel={text('Rel', '', 'InlineLink' || undefined)}
    onClick={action('onClick')}
    onSelfWindowNavigation={action('self window navigation')}
    {...commonKnobs()}
  >
    {text('Children', '文中リンク', 'InlineLink')}
  </InlineLink>
);

export const TargetBlank = () => (
  <InlineLink href="https://www.freee.co.jp/" target="_blank">
    target=_blankにするとアイコンが変わります
  </InlineLink>
);

export const NoHref = () => (
  <InlineLink>hrefなしではbutton要素になります</InlineLink>
);

export const Disabled = () => (
  <InlineLink href="https://www.freee.co.jp/" target="_blank" disabled>
    disabledになります
  </InlineLink>
);

export const WithinComponent = () => (
  <>
    <Paragraph>
      Paragraphの中で使うと0.875rem = 14px で
      <InlineLink href="https://www.freee.co.jp/" target="_blank">
        こんな感じ
      </InlineLink>
    </Paragraph>
    <Note>
      Noteの中で使うと0.75rem = 12px で
      <InlineLink href="https://www.freee.co.jp/" target="_blank">
        ちょっと小さい
      </InlineLink>
    </Note>
  </>
);

export const CustomLineHeight = () => (
  <div style={{ lineHeight: 3 }}>
    <InlineLink target="_blank" href="https://www.freee.co.jp/">
      大きなline-heightのときでもアイコンは文字に対して中央に並ぶ
    </InlineLink>
  </div>
);
