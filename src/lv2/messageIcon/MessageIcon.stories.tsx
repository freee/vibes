import * as React from 'react';

import MessageIcon from './MessageIcon';
import ScrollableBase from '../../lv1/bases/ScrollableBase';
import InlineLink from '../../lv1/buttons/InlineLink';
import Paragraph from '../../lv1/typography/Paragraph';
import { text, boolean } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import { Stack } from '../../lv1';

export default {
  component: MessageIcon,
  parameters: { layout: 'fullscreen' },
};
export const MessageIconComponent = () => (
  <MessageIcon
    label={text('Label', 'ヘルプ', 'MessageIcon')}
    error={boolean('Error', false, 'MessageIcon')}
    notice={boolean('Notice', false, 'MessageIcon')}
    success={boolean('Success', false, 'MessageIcon')}
    small={boolean('Small', false, 'MessageIcon')}
    {...commonKnobs()}
  >
    {text(
      'Content',
      'アイコンをマウスオーバーしたりクリックすると吹き出しがでます',
      'MessageIcon'
    )}
  </MessageIcon>
);
export const IncludesLinks = () => (
  <>
    <MessageIcon
      label={text('Label', 'ヘルプ', 'MessageIcon')}
      error={boolean('Error', false, 'MessageIcon')}
      notice={boolean('Notice', false, 'MessageIcon')}
      success={boolean('Success', false, 'MessageIcon')}
      small={boolean('Small', false, 'MessageIcon')}
      {...commonKnobs()}
    >
      こんなふうに
      <InlineLink href="https://www.freee.co.jp" target="_blank">
        リンク
      </InlineLink>
      を中に置くのもOKです。
      <br />
      <InlineLink href="https://corp.freee.co.jp" target="_blank">
        もうひとつリンク
      </InlineLink>
    </MessageIcon>

    <Paragraph>
      <InlineLink href="https://corp.freee.co.jp">
        バルーンのフォーカストラップを試す用のバルーン外のリンク
      </InlineLink>
    </Paragraph>
  </>
);

export const InsideBigScroll = () => (
  <div style={{ width: '100vw', height: '20rem', display: 'flex' }}>
    <ScrollableBase scrollableX scrollableY>
      <div style={{ position: 'relative', width: '80rem', height: '40rem' }}>
        <div style={{ position: 'absolute', top: '15rem', left: '40rem' }}>
          <MessageIcon
            label={text('Label', 'ヘルプ', 'MessageIcon')}
            error={boolean('Error', false, 'MessageIcon')}
            notice={boolean('Notice', false, 'MessageIcon')}
            success={boolean('Success', false, 'MessageIcon')}
            {...commonKnobs()}
          >
            {text(
              'Content',
              'アイコンをマウスオーバーしたりクリックすると吹き出しがでます',
              'MessageIcon'
            )}
          </MessageIcon>
        </div>
      </div>
    </ScrollableBase>
  </div>
);

export const Positions = () => (
  <Stack
    justifyContent="space-between"
    direction="horizontal"
    ml={0.5}
    mr={0.5}
    mt={3}
    mb={3}
  >
    <MessageIcon label="ヘルプ">
      ウインドウの左端に近いときは右側に出ます
    </MessageIcon>
    <MessageIcon label="ヘルプ">左右に余裕があるときは中央に出ます</MessageIcon>
    <MessageIcon label="ヘルプ">
      ウインドウの右端に近いときは左側に出ます
    </MessageIcon>
  </Stack>
);
