import * as React from 'react';

import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import Button from '../buttons/Button';
import SectionTitle from './SectionTitle';

export default {
  component: SectionTitle,
};

export const SectionTitleComponent = () => (
  <SectionTitle
    inline={boolean('Inline', false, 'SectionTitle')}
    textAlign={
      select(
        'TextAlign',
        { left: 'left', center: 'center', right: 'right', undefined: '' },
        '',
        'SectionTitle'
      ) || undefined
    }
    headlineLevel={
      select(
        'HeadlineLevel',
        {
          '1': 1,
          '2': 2,
          '3': 3,
          '4': 4,
          '5': 5,
          '6': 6,
          '-1': -1,
          undefined: '',
        } as const,
        '',
        'SectionTitle'
      ) || undefined
    }
    {...commonKnobs()}
  >
    {text('Children', 'セクションタイトル', 'SectionTitle')}
  </SectionTitle>
);

export const WithRef = () => {
  const WithRefInner = () => {
    const ref = React.useRef<HTMLHeadingElement | null>(null);

    return (
      <>
        <SectionTitle ref={ref}>セクションタイトル</SectionTitle>
        <Button
          appearance="tertiary"
          onClick={() => {
            if (ref.current) {
              ref.current.focus();
            }
          }}
        >
          focus a heading element
        </Button>
      </>
    );
  };
  return <WithRefInner />;
};
