import * as React from 'react';

import { RequiredIcon } from './RequiredIcon';
import { commonKnobs } from '../../../stories';
import { Text, Paragraph, Note } from '..';

export default {
  component: RequiredIcon,
};

export const RequiredIconComponent = () => <RequiredIcon {...commonKnobs()} />;
export const VerticalAlignment = () => (
  <>
    <Note mb={1.5}>
      日本語の文字と並べたときの位置が自然になるように調整してあります。
    </Note>
    <Paragraph mb={1}>
      <Text size={0.75}>
        FontSize=0.75(12px) 日本語の文字
        <RequiredIcon ml={0.5} />
      </Text>
    </Paragraph>
    <Paragraph mb={1}>
      <Text size={0.875}>
        FontSize=0.875(14px) 日本語の文字
        <RequiredIcon ml={0.5} />
      </Text>
    </Paragraph>
    <Paragraph mb={1}>
      <Text size={1}>
        FontSize=1(16px) 日本語の文字
        <RequiredIcon ml={0.5} />
      </Text>
    </Paragraph>
    <Paragraph mb={1}>
      <Text size={1.5}>
        FontSize=1.5(24px) 日本語の文字
        <RequiredIcon ml={0.5} />
      </Text>
    </Paragraph>
  </>
);
