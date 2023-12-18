import * as React from 'react';

import { commonKnobs } from '../../../stories';
import InlineLink from '../../lv1/buttons/InlineLink';
import Paragraph from '../../lv1/typography/Paragraph';
import LineSeparatedList from './LineSeparatedList';

export default {
  component: LineSeparatedList,
};

const listSamples = [
  { value: <Paragraph>リストコンテンツ</Paragraph> },
  {
    value: (
      <Paragraph>
        長いリストコンテンツ長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い
      </Paragraph>
    ),
  },
  {
    value: (
      <Paragraph>
        <InlineLink
          href="https://www.freee.co.jp/"
          rel="noopener noreferrer"
          target="_blank"
        >
          リンク付きリストコンテンツ
        </InlineLink>
      </Paragraph>
    ),
  },
  {
    value: (
      <Paragraph>
        <InlineLink
          href="https://www.freee.co.jp/"
          rel="noopener noreferrer"
          target="_blank"
        >
          長いリンク付きリストコンテンツ長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い
        </InlineLink>
      </Paragraph>
    ),
  },
];

export const LineSeparatedListComponent = () => (
  <LineSeparatedList listContents={listSamples} {...commonKnobs()} />
);
