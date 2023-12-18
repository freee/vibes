import * as React from 'react';

import { commonKnobs } from '../../../stories';
import { Text } from './Text';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Vibes2021BackgroundColor } from '../../constants';

export default {
  component: Text,
};

export const TextComponent = () => (
  <Text
    ellipsis={boolean('ellipsis', false, 'Text')}
    weight={select('weight', ['normal', 'bold', undefined], undefined, 'Text')}
    size={select('size', [0.75, 0.875, 1, 1.5, undefined], undefined, 'Text')}
    color={select(
      'color',
      [
        'black',
        'burnt',
        'link',
        'alert',
        'notice',
        'white',
        'GY7',
        'S9',
        'P7',
        'P5',
        'RE5',
        'YE10',
        undefined,
      ],
      undefined,
      'Text'
    )}
    {...commonKnobs()}
  >
    {text('children', 'テキスト', 'Text')}
  </Text>
);

export const Size = () => (
  <>
    <div>
      <Text size={0.75} ma={1}>
        size=0.75 (12px)
      </Text>
      <Text size={0.875} ma={1}>
        size=0.875 (14px)
      </Text>
      <Text size={1} ma={1}>
        size=1 (16px)
      </Text>
      <Text size={1.5} ma={1}>
        size=1.5 (24px)
      </Text>
    </div>

    <div>
      <Text size={0.75} weight="bold" ma={1}>
        size=0.75 (12px)
      </Text>
      <Text size={0.875} weight="bold" ma={1}>
        size=0.875 (14px)
      </Text>
      <Text size={1} weight="bold" ma={1}>
        size=1 (16px)
      </Text>
      <Text size={1.5} weight="bold" ma={1}>
        size=1.5 (24px)
      </Text>
    </div>
  </>
);

export const Color = () => (
  <>
    <div>
      <Text color="black" ma={1}>
        black
      </Text>
      <Text color="burnt" ma={1}>
        burnt
      </Text>
      <Text color="link" ma={1}>
        link
      </Text>
      <Text color="alert" ma={1}>
        alert
      </Text>
      <Text color="notice" ma={1}>
        notice
      </Text>
      <Text color="white" ma={1}>
        white
      </Text>
    </div>

    <div>
      <Text color="GY7" ma={1}>
        GY7
      </Text>
      <Text color="S9" ma={1}>
        S9
      </Text>
      <Text color="P7" ma={1}>
        P7
      </Text>
      <Text color="P5" ma={1}>
        P5
      </Text>
      <Text color="RE5" ma={1}>
        RE5
      </Text>
      <Text color="YE10" ma={1}>
        YE10
      </Text>
    </div>
  </>
);

export const Ellipsis = () => (
  <>
    <div style={{ width: '10rem' }}>
      <Text ellipsis>長いテキストの省略表示を作れます</Text>
    </div>
  </>
);

export const OverflowWrap = () => (
  <>
    <p
      style={{
        backgroundColor: Vibes2021BackgroundColor,
        width: '8rem',
        marginBottom: '1rem',
      }}
    >
      <Text>
        default(overflowWrap=&apos;normal&apos;) 単語区切り の 位置 が
        どう変わるか https://toolong/path/longlonglonglonglonglonglong 他の単語
        は こうみえるよ
      </Text>
    </p>
    <p
      style={{
        backgroundColor: Vibes2021BackgroundColor,
        width: '8rem',
        marginBottom: '1rem',
      }}
    >
      <Text overflowWrap="anywhere">
        overflowWrap=&apos;anywhere&apos; 単語区切り の 位置 が 変わるか
        https://toolong/path/longlonglonglonglonglonglong 他の単語 は
        こうみえるよ
      </Text>
    </p>
    <p
      style={{
        backgroundColor: Vibes2021BackgroundColor,
        width: '8rem',
        marginBottom: '1rem',
      }}
    >
      <Text overflowWrap="break-word">
        overflowWrap=&apos;break-word&apos; 単語区切り の 位置 が 変わるか
        https://toolong/path/longlonglonglonglonglonglong 他の単語 は
        こうみえるよ
      </Text>
    </p>
  </>
);
