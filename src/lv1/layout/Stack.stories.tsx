import * as React from 'react';

import { commonKnobs } from '../../../stories';
import { Stack } from './Stack';
import Paragraph from '../typography/Paragraph';
import Button from '../buttons/Button';
import { boolean, select } from '@storybook/addon-knobs';
import SearchField from '../forms/SearchField';
import ContentsBase from '../bases/ContentsBase';
import ColumnBase from '../bases/ColumnBase';
import { Text } from '../typography/Text';

export default {
  component: Stack,
};

export const StackComponent = () => (
  <Stack
    direction={
      select(
        'direction',
        {
          undefined: '',
          vertical: 'vertical',
          horizontal: 'horizontal',
          'vertical-reverse': 'vertical-reverse',
          'horizontal-reverse': 'horizontal-reverse',
        },
        '',
        'Stack'
      ) || undefined
    }
    gap={select('gap', [0, 0.25, 0.5, 1, 1.5, 2, 3], 1, 'Stack')}
    justifyContent={
      select(
        'justifycontent',
        {
          undefined: '',
          start: 'start',
          end: 'end',
          center: 'center',
          'space-between': 'space-between',
        },
        '',
        'Stack'
      ) || undefined
    }
    alignItems={
      select(
        'alignItems',
        {
          undefined: '',
          stretch: 'stretch',
          center: 'center',
          start: 'start',
          end: 'end',
        },
        '',
        'Stack'
      ) || undefined
    }
    wrap={
      select(
        'wrap',
        {
          undefined: '',
          wrap: 'wrap',
          nowrap: 'nowrap',
        },
        '',
        'Stack'
      ) || undefined
    }
    inline={boolean('inline', false, 'Stack')}
    {...commonKnobs()}
  >
    <Paragraph>Stackを使うと、コンポーネントを等間隔に並べられます</Paragraph>
    <Button>ボタン1</Button>
    <Button>ボタン2</Button>
  </Stack>
);

export const Toolbar = () => (
  <Stack direction="horizontal" justifyContent="space-between">
    <Stack direction="horizontal" gap={1}>
      <Button appearance="primary">送信</Button>
      <Button>編集</Button>
      <Button>コピー</Button>
      <SearchField label="検索" />
    </Stack>
    <Stack direction="horizontal" gap={1}>
      <Button>エクスポート</Button>
      <Button danger>削除</Button>
    </Stack>
  </Stack>
);

export const Messages = () => (
  <Stack direction="vertical" alignItems="center">
    <ContentsBase>
      <Stack direction="vertical" gap={1.5}>
        <Paragraph>
          freeeは「スモールビジネスを、世界の主役に。」をミッションに掲げ、統合型経営プラットフォームを開発・提供し、
          <br />
          だれもが自由に自然体で経営できる環境をつくっていきます。
        </Paragraph>
        <Paragraph>
          起業やビジネスを育てていくことを、もっと魅力的で気軽な行為に。個人事業や中小企業などのスモールビジネスに携わるすべての人が、
          <br />
          じぶんらしく自信をもって経営できるように。
        </Paragraph>
        <Paragraph>
          大胆にスピード感をもってアイデアを具現化できるスモールビジネスは、今までにない多様な価値観や生き方、
          <br />
          新しいイノベーションを生み出す起爆剤だと私たちは考えています。スモールビジネスが大企業を刺激し、
          <br />
          社会をさらにオモシロク、世の中全体をより良くする流れを後押ししていきます。
        </Paragraph>
      </Stack>
    </ContentsBase>
  </Stack>
);

export const Direction = () => (
  <Stack gap={2}>
    <Stack direction="vertical">
      <ColumnBase>direction=vertical 1</ColumnBase>
      <ColumnBase>direction=vertical 2</ColumnBase>
      <ColumnBase>direction=vertical 3</ColumnBase>
    </Stack>
    <Stack direction="horizontal">
      <ColumnBase>direction=horizontal 1</ColumnBase>
      <ColumnBase>direction=horizontal 2</ColumnBase>
      <ColumnBase>direction=horizontal 3</ColumnBase>
    </Stack>
    <Stack direction="vertical-reverse">
      <ColumnBase>direction=vertical-reverse 1</ColumnBase>
      <ColumnBase>direction=vertical-reverse 2</ColumnBase>
      <ColumnBase>direction=vertical-reverse 3</ColumnBase>
    </Stack>
    <Stack direction="horizontal-reverse">
      <ColumnBase>direction=horizontal-reverse 1</ColumnBase>
      <ColumnBase>direction=horizontal-reverse 2</ColumnBase>
      <ColumnBase>direction=horizontal-reverse 3</ColumnBase>
    </Stack>
  </Stack>
);

export const JustifyContent = () => (
  <Stack gap={2} alignItems="stretch">
    <Stack direction="horizontal" justifyContent="start">
      <ColumnBase>justifyContent=start 1</ColumnBase>
      <ColumnBase>justifyContent=start 2</ColumnBase>
      <ColumnBase>justifyContent=start 3</ColumnBase>
    </Stack>
    <Stack direction="horizontal" justifyContent="end">
      <ColumnBase>justifyContent=end 1</ColumnBase>
      <ColumnBase>justifyContent=end 2</ColumnBase>
      <ColumnBase>justifyContent=end 3</ColumnBase>
    </Stack>
    <Stack direction="horizontal" justifyContent="center">
      <ColumnBase>justifyContent=center 1</ColumnBase>
      <ColumnBase>justifyContent=center 2</ColumnBase>
      <ColumnBase>justifyContent=center 3</ColumnBase>
    </Stack>
    <Stack direction="horizontal" justifyContent="space-between">
      <ColumnBase>justifyContent=space-between 1</ColumnBase>
      <ColumnBase>justifyContent=space-between 2</ColumnBase>
      <ColumnBase>justifyContent=space-between 3</ColumnBase>
    </Stack>
  </Stack>
);

export const AlignItems = () => (
  <Stack gap={2}>
    <Stack direction="horizontal" alignItems="start">
      <ColumnBase paddingSize="small">
        <Text size={0.875}>alignItems=start 1</Text>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Text size={1.5}>alignItems=start 2</Text>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Text size={0.75}>alignItems=start 3</Text>
      </ColumnBase>
    </Stack>
    <Stack direction="horizontal" alignItems="center">
      <ColumnBase paddingSize="small">
        <Text size={0.875}>alignItems=center 1</Text>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Text size={1.5}>alignItems=center 2</Text>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Text size={0.75}>alignItems=center 3</Text>
      </ColumnBase>
    </Stack>
    <Stack direction="horizontal" alignItems="end">
      <ColumnBase paddingSize="small">
        <Text size={0.875}>alignItems=end 1</Text>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Text size={1.5}>alignItems=end 2</Text>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Text size={0.75}>alignItems=end 3</Text>
      </ColumnBase>
    </Stack>
    <Stack direction="horizontal" alignItems="stretch">
      <ColumnBase paddingSize="small">
        <Text size={0.875}>alignItems=stretch 1</Text>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Text size={1.5}>alignItems=stretch 2</Text>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Text size={0.75}>alignItems=stretch 3</Text>
      </ColumnBase>
    </Stack>
  </Stack>
);

export const Gap = () => (
  <Stack gap={2}>
    <Stack direction="horizontal" gap={3}>
      <ColumnBase paddingSize="small">
        <Paragraph>gap=3 1</Paragraph>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Paragraph>gap=3 2</Paragraph>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Paragraph>gap=3 3</Paragraph>
      </ColumnBase>
    </Stack>
    <Stack direction="horizontal" gap={2}>
      <ColumnBase paddingSize="small">
        <Paragraph>gap=3 1</Paragraph>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Paragraph>gap=3 2</Paragraph>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Paragraph>gap=3 3</Paragraph>
      </ColumnBase>
    </Stack>
    <Stack direction="horizontal" gap={1}>
      <ColumnBase paddingSize="small">
        <Paragraph>gap=1 1</Paragraph>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Paragraph>gap=1 2</Paragraph>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Paragraph>gap=1 3</Paragraph>
      </ColumnBase>
    </Stack>
    <Stack direction="horizontal" gap={0.5}>
      <ColumnBase paddingSize="small">
        <Paragraph>gap=0.5 1</Paragraph>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Paragraph>gap=0.5 2</Paragraph>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Paragraph>gap=0.5 3</Paragraph>
      </ColumnBase>
    </Stack>
    <Stack direction="horizontal" gap={0.25}>
      <ColumnBase paddingSize="small">
        <Paragraph>gap=0.25 1</Paragraph>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Paragraph>gap=0.25 2</Paragraph>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Paragraph>gap=0.25 3</Paragraph>
      </ColumnBase>
    </Stack>
    <Stack direction="horizontal" gap={0}>
      <ColumnBase paddingSize="small">
        <Paragraph>gap=0 1</Paragraph>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Paragraph>gap=0 2</Paragraph>
      </ColumnBase>
      <ColumnBase paddingSize="small">
        <Paragraph>gap=0 3</Paragraph>
      </ColumnBase>
    </Stack>
  </Stack>
);

export const Wrap = () => (
  <Stack gap={2}>
    <Stack direction="horizontal" wrap="wrap">
      <ColumnBase>
        <Paragraph>wrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>wrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>wrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>wrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>wrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>wrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>wrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>wrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>wrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>wrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>wrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>wrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>wrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>wrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>wrap</Paragraph>
      </ColumnBase>
    </Stack>
    <Stack direction="horizontal" wrap="nowrap">
      <ColumnBase>
        <Paragraph>nowrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>nowrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>nowrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>nowrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>nowrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>nowrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>nowrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>nowrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>nowrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>nowrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>nowrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>nowrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>nowrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>nowrap</Paragraph>
      </ColumnBase>
      <ColumnBase>
        <Paragraph>nowrap</Paragraph>
      </ColumnBase>
    </Stack>
  </Stack>
);

export const Inline = () => (
  <>
    <Stack inline mr={2} gap={0.5} direction="horizontal">
      <Button>ボタン1</Button>
      <Button>ボタン2</Button>
    </Stack>
    <Paragraph inline>
      <code>inline={'{true}'}</code>にすると、<code>inline-flex</code>になります
    </Paragraph>
  </>
);
