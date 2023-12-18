import * as React from 'react';

import HeadlineArea from './HeadlineArea';
import Button from '../../lv1/buttons/Button';
import { text, select } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';

export default {
  component: HeadlineArea,
};

export const HeadlineAreaComponent = () => (
  <HeadlineArea
    pageTitle={text('pageTitle', '画面見出しエリア', 'HeadlineArea')}
    statusIconText={text('statusIconText', 'ステータス', 'HeadlineArea')}
    statusIconType={select(
      'statusIconType',
      {
        progress: 'progress',
        done: 'done',
        success: 'success',
        required: 'required',
        disabled: 'disabled',
        emphasis: 'emphasis',
        warning: 'warning',
        error: 'error',
      },
      'success',
      'HeadlineArea'
    )}
    {...commonKnobs()}
    ref={React.createRef<HTMLHeadingElement>()}
  >
    {text(
      'children',
      'ヘッドラインエリアコンポーネントは画面の見出しと説明文をラップしたコンポーネントです。オプションでステータスアイコンをつけることもできます。 ',
      'HeadlineArea'
    )}
  </HeadlineArea>
);

export const WithRelatedMenu = () => (
  <HeadlineArea
    pageTitle={text('pageTitle', '画面見出しエリア', 'HeadlineArea')}
    statusIconText={text('statusIconText', 'ステータス', 'HeadlineArea')}
    statusIconType={select(
      'statusIconType',
      {
        progress: 'progress',
        done: 'done',
        success: 'success',
        required: 'required',
        disabled: 'disabled',
        emphasis: 'emphasis',
        warning: 'warning',
        error: 'error',
      },
      'success',
      'HeadlineArea'
    )}
    relatedMenus={
      <>
        <Button small mr={1}>
          menu1
        </Button>
        <Button small>menu2</Button>
      </>
    }
    {...commonKnobs()}
  >
    {text(
      'children',
      'ヘッドラインエリアコンポーネントは画面の見出しと説明文をラップしたコンポーネントです。オプションでステータスアイコンをつけることもできます。 ',
      'HeadlineArea'
    )}
  </HeadlineArea>
);

export const WithRef = () => {
  const headlineRef = React.createRef<HTMLHeadingElement>();
  return (
    <>
      <HeadlineArea pageTitle="Refありのサンプル" ref={headlineRef}>
        ボタンを押すとタイトルにフォーカスするよ
      </HeadlineArea>
      <Button onClick={() => headlineRef.current?.focus()}>
        タイトルにフォーカス
      </Button>
    </>
  );
};

export const WithSkeleton = () => (
  <HeadlineArea
    pageTitle={text('pageTitle', '画面見出しエリア', 'HeadlineArea')}
    loading
    statusIconText={text('statusIconText', 'ステータス', 'HeadlineArea')}
    statusIconType={select(
      'statusIconType',
      {
        progress: 'progress',
        done: 'done',
        success: 'success',
        required: 'required',
        disabled: 'disabled',
        emphasis: 'emphasis',
        warning: 'warning',
        error: 'error',
      },
      'success',
      'HeadlineArea'
    )}
    {...commonKnobs()}
    ref={React.createRef<HTMLHeadingElement>()}
  >
    {text(
      'children',
      'ヘッドラインエリアコンポーネントは画面の見出しと説明文をラップしたコンポーネントです。オプションでステータスアイコンをつけることもできます。 ',
      'HeadlineArea'
    )}
  </HeadlineArea>
);
