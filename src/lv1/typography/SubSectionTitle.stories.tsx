import * as React from 'react';

import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import Button from '../buttons/Button';
import SubSectionTitle from './SubSectionTitle';

export default {
  component: SubSectionTitle,
};

export const SubSectionTitleComponent = () => (
  <SubSectionTitle
    inline={boolean('Inline', false, 'SubSectionTitle')}
    textAlign={
      select(
        'TextAlign',
        { left: 'left', center: 'center', right: 'right', undefined: '' },
        '',
        'SubSectionTitle'
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
        'SubSectionTitle'
      ) || undefined
    }
    {...commonKnobs()}
  >
    {text('Children', 'サブセクションタイトル', 'SubSectionTitle')}
  </SubSectionTitle>
);

export const WithRef = () => {
  const WithRefInner = () => {
    const ref = React.useRef<HTMLHeadingElement | null>(null);

    return (
      <>
        <SubSectionTitle ref={ref}>サブセクションタイトル</SubSectionTitle>
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
