import * as React from 'react';

import { action } from '@storybook/addon-actions';
import MessageBlock from './MessageBlock';
import { boolean, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import { VStack } from '../../lv1';

export default {
  component: MessageBlock,
};

export const MessageBlockComponent = () => (
  <MessageBlock
    info={boolean('Info', false, 'MessageBlock')}
    error={boolean('Error', false, 'MessageBlock')}
    success={boolean('Success', false, 'MessageBlock')}
    notice={boolean('Notice', false, 'MessageBlock')}
    assistance={boolean('Assistance', false, 'MessageBlock')}
    discovery={boolean('Discovery', false, 'MessageBlock')}
    linkTarget={text('LinkTarget', '_blank', 'MessageBlock')}
    linkTitle={text('LinkTitle', '詳細', 'MessageBlock')}
    linkUrl={text('LinkURL', '#', 'MessageBlock')}
    linkRel={text('LinkRel', '', 'MessageBlock')}
    onLinkClick={action('onLinkClick')}
    onRequestClose={action('onRequestClose')}
    hover={boolean('hover', false, 'MessageBlock')}
    onSelfWindowNavigation={action('onSelfWindowNavigation')}
    {...commonKnobs()}
  >
    {text('children', '情報メッセージ', 'MessageBlock')}
  </MessageBlock>
);

const MessageBlockExamples = () => (
  <>
    <MessageBlock assistance mb={1}>
      アシスタンスメッセージ
    </MessageBlock>
    <MessageBlock discovery mb={1}>
      リリースメッセージ
    </MessageBlock>
    <MessageBlock info mb={1}>
      説明・補足メッセージ
    </MessageBlock>
    <MessageBlock error onRequestClose={action('clickClose')} mb={1}>
      エラーメッセージ
    </MessageBlock>
    <MessageBlock
      notice
      linkTitle="詳しく見る"
      linkUrl="https://www.freee.co.jp/"
      mb={1}
    >
      <span>
        <strong>メンテナンスのお知らせ</strong>
        <br />
        2019年1月1日 0:00 から 2019年12月31日 23:59
        のあいだ、メンテナンスのため会計フリーをお使いいただけませんのでご注意ください。
      </span>
    </MessageBlock>
    <MessageBlock success onRequestClose={action('clickClose')} mb={1}>
      完了メッセージ
    </MessageBlock>
  </>
);
export const Examples = () => (
  <>
    <MessageBlockExamples />
    <div style={{ width: '50%' }}>
      <MessageBlockExamples />
    </div>
  </>
);

export const InVStack = () => (
  <VStack>
    <MessageBlock>
      <code>container-type: inline-size</code> を指定していると{' '}
      <code>display: flex</code>{' '}
      内で表示が崩れることがあったので、それが解消されているか確認するためのストーリーです。
    </MessageBlock>
    <MessageBlock>表示が崩れたりしてないですよね？</MessageBlock>
  </VStack>
);
