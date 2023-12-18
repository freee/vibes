import * as React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import ZebraBase from '../bases/ZebraBase';
import Message from './Message';

export default {
  component: Message,
};

export const MessageComponent = () => (
  <Message
    info={boolean('Info', false, 'Message')}
    error={boolean('Error', false, 'Message')}
    notice={boolean('Notice', false, 'Message')}
    success={boolean('Success', false, 'Message')}
    {...commonKnobs()}
  >
    {text('Children', 'メッセージメッセージメッセージ', 'Message')}
  </Message>
);

export const Samples = () => (
  <>
    <ZebraBase>
      <Message info marginRight>
        情報メッセージ情報メッセージ情報メッセージ
      </Message>
    </ZebraBase>
    <ZebraBase>
      <Message info marginRight>
        あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
      </Message>
    </ZebraBase>
    <ZebraBase>
      <Message notice marginRight>
        <span>
          メンテナンスのお知らせ
          <br />
          2019年1月1日 0:00から2019年12月31日 23:59
          のあいだ、メンテナンスのため会計フリーをお使いいただけませんのでご注意ください。
        </span>
      </Message>
    </ZebraBase>

    <ZebraBase>
      <Message error marginRight>
        エラーメッセージ
      </Message>
      <Message notice marginRight>
        警告メッセージ
      </Message>
      <Message success marginRight>
        成功メッセージ
      </Message>
    </ZebraBase>
  </>
);
