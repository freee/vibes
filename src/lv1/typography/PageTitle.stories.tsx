import * as React from 'react';

import { text, boolean, select } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import Button from '../buttons/Button';
import PageTitle from './PageTitle';

export default {
  component: PageTitle,
};

export const PageTitleComponent = () => (
  <PageTitle
    inline={boolean('Inline', false, 'PageTitle')}
    textAlign={
      select(
        'TextAlign',
        { left: 'left', center: 'center', right: 'right', undefined: '' },
        '',
        'PageTitle'
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
        'PageTitle'
      ) || undefined
    }
    {...commonKnobs()}
  >
    {text('Children', 'ページタイトル', 'PageTitle')}
  </PageTitle>
);

export const WithRef = () => {
  const WithRefInner = () => {
    const ref = React.useRef<HTMLHeadingElement | null>(null);

    return (
      <>
        <PageTitle ref={ref}>ページタイトル</PageTitle>
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
