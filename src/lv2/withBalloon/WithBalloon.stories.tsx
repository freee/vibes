import * as React from 'react';

import WithBalloon from './WithBalloon';
import { commonKnobs } from '../../../stories';
import ScrollableBase from '../../lv1/bases/ScrollableBase';
import { select, text } from '@storybook/addon-knobs';
import Button from '../../lv1/buttons/Button';
import { Avatar, Paragraph } from '../../lv1';
import dsSquare from '../../lv1/icons/storyAssets/ds_square.jpeg';

export default {
  component: WithBalloon,
};

export const WithBalloonComponent = () => (
  <WithBalloon
    border={
      select(
        'border',
        {
          alert: 'alert',
          success: 'success',
          notice: 'notice',
          default: 'default',
          none: '',
        },
        'default',
        'WithBalloon'
      ) || undefined
    }
    renderBalloonContent={() =>
      text('balloonContent', 'こういう感じでバルーンを出せます', 'WithBalloon')
    }
    renderContent={() =>
      text(
        'content',
        'コンテンツに対する注釈をバルーンで表示できます。タッチ操作やキーボード操作では開けないことがあるため、バルーンコンテンツには代替アクセス手段を用意してください。',
        'WithBalloon'
      )
    }
    {...commonKnobs()}
  />
);

export const FocusableElement = () => (
  <WithBalloon
    border={
      select(
        'border',
        {
          alert: 'alert',
          success: 'success',
          notice: 'notice',
          default: 'default',
          none: '',
        },
        'default',
        'WithBalloon'
      ) || undefined
    }
    balloonContent={text(
      'balloonContent',
      'こういう感じでバルーンを出せます',
      'WithBalloon'
    )}
    renderContent={(balloonId) => (
      <>
        このように
        <a href="https://www.freee.co.jp/" aria-describedby={balloonId}>
          フォーカス可能な要素
        </a>
        があると、フォーカス時にバルーンが表示されます。
        <a href="https://jobs.freee.co.jp">採用情報</a>
      </>
    )}
    {...commonKnobs()}
  />
);

export const LazyImageLoading = () => (
  <WithBalloon
    border={
      select(
        'border',
        {
          alert: 'alert',
          success: 'success',
          notice: 'notice',
          default: 'default',
          none: '',
        },
        'default',
        'WithBalloon'
      ) || undefined
    }
    renderBalloonContent={(isVisible) => (
      <>
        <Avatar size="small" imageUrl={isVisible ? dsSquare : ''} />
        <Paragraph inline ml={0.5}>
          freee株式会社 CEO
        </Paragraph>
      </>
    )}
    renderContent={() => '佐々木大輔'}
    {...commonKnobs()}
  />
);
export const InsideBigScroll = () => (
  <div style={{ width: '40rem', height: '20rem', display: 'flex' }}>
    <ScrollableBase scrollableX scrollableY>
      <div style={{ position: 'relative', width: '80rem', height: '40rem' }}>
        <div style={{ position: 'absolute', top: '15rem', left: '40rem' }}>
          <WithBalloon
            border={
              select(
                'border',
                {
                  alert: 'alert',
                  success: 'success',
                  notice: 'notice',
                  default: 'default',
                  none: '',
                },
                'default',
                'WithBalloon'
              ) || undefined
            }
            renderBalloonContent={() =>
              text(
                'balloonContent',
                'こういう感じでバルーンを出せます',
                'WithBalloon'
              )
            }
            {...commonKnobs()}
            renderContent={() => 'あああ'}
          />
        </div>
      </div>
    </ScrollableBase>
  </div>
);

export const DisabledButton = () => (
  <div lang="ja">
    <WithBalloon
      border={
        select(
          'border',
          {
            alert: 'alert',
            success: 'success',
            notice: 'notice',
            default: 'default',
            none: '',
          },
          'default',
          'WithBalloon'
        ) || undefined
      }
      renderBalloonContent={() => 'こういう感じでバルーンを出せます'}
      renderContent={(balloonId) => (
        <Button disabled aria-describedby={balloonId}>
          非活性なボタン
        </Button>
      )}
      {...commonKnobs()}
    ></WithBalloon>
  </div>
);

export const DeprecatedProps = () => (
  <WithBalloon
    border={
      select(
        'border',
        {
          alert: 'alert',
          success: 'success',
          notice: 'notice',
          default: 'default',
          none: '',
        },
        'default',
        'WithBalloon'
      ) || undefined
    }
    balloonContent={text(
      'balloonContent',
      'こういう感じでバルーンを出せます',
      'WithBalloon'
    )}
    {...commonKnobs()}
  >
    {text(
      'content',
      'コンテンツに対する注釈をバルーンで表示できます。タッチ操作やキーボード操作では開けないことがあるため、バルーンコンテンツには代替アクセス手段を用意してください。',
      'WithBalloon'
    )}
  </WithBalloon>
);
