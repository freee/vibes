import * as React from 'react';

import { text, boolean, select } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import Note from './Note';

export default {
  component: Note,
};

export const NoteComponent = () => (
  <Note
    inline={boolean('Inline', false, 'Note')}
    textAlign={
      select(
        'TextAlign',
        { left: 'left', center: 'center', right: 'right', undefined: '' },
        '',
        'Note'
      ) || undefined
    }
    {...commonKnobs()}
  >
    {text(
      'Children',
      '注釈注釈注釈注釈注釈注釈注釈注釈注釈注釈注釈注釈注釈注釈注釈注釈注釈注釈注釈',
      'Note'
    )}
  </Note>
);

export const EllipsisWhenOverflow = () => {
  return (
    <div style={{ width: '300px' }}>
      <Note ellipsis>
        ellipsisを指定するとテキストが溢れた時には省略されます
      </Note>
      <Note inline ellipsis mt={1}>
        inlineのときもellipsisを指定するとテキストが溢れた時には省略されます
      </Note>
    </div>
  );
};
