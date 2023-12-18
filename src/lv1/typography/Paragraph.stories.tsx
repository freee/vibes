import * as React from 'react';

import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import Paragraph from './Paragraph';

export default {
  component: Paragraph,
};

export const ParagraphComponent = () => (
  <Paragraph
    inline={boolean('Inline', false, 'Paragraph')}
    textAlign={
      select(
        'TextAlign',
        { left: 'left', center: 'center', right: 'right', undefined: '' },
        '',
        'Paragraph'
      ) || undefined
    }
    {...commonKnobs()}
  >
    {text(
      'Children',
      '本文本文本文本文本文本文本文本文本文本文本文',
      'Paragraph'
    )}
  </Paragraph>
);

export const EllipsisWhenOverflow = () => {
  return (
    <div style={{ width: '300px' }}>
      <Paragraph ellipsis>
        ellipsisを指定するとテキストが溢れた時には省略されます
      </Paragraph>
      <Paragraph inline ellipsis mt={1}>
        inlineのときもellipsisを指定するとテキストが溢れた時には省略されます
      </Paragraph>
    </div>
  );
};
