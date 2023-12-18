import * as React from 'react';

import WithSideContent from './WithSideContent';
import Button from '../buttons/Button';
import { commonKnobs } from '../../../stories';
import { select } from '@storybook/addon-knobs';

export default {
  component: WithSideContent,
};

export const WithSideContentComponent = () => (
  <WithSideContent
    verticalAlign={
      select(
        'VerticalAlign',
        { undefined: '', top: 'top', bottom: 'bottom', middle: 'middle' },
        '',
        'WithSideContent'
      ) || undefined
    }
    {...commonKnobs()}
    sideContent={<Button>サブボタン</Button>}
  >
    <Button marginRight>ボタン1</Button>
    <Button>ボタン2</Button>
  </WithSideContent>
);

export const SideContentOnly = () => (
  // childrenなしでも使っていいのよアピール
  <WithSideContent
    verticalAlign={
      select(
        'VerticalAlign',
        { undefined: '', top: 'top', bottom: 'bottom', middle: 'middle' },
        '',
        'WithSideContent'
      ) || undefined
    }
    {...commonKnobs()}
    sideContent={<Button>サブボタン</Button>}
  />
);

export const TextAndButton = () => (
  <WithSideContent
    verticalAlign={
      select(
        'VerticalAlign',
        { undefined: '', top: 'top', bottom: 'bottom', middle: 'middle' },
        'middle',
        'WithSideContent'
      ) || undefined
    }
    {...commonKnobs()}
    sideContent={<Button>サブボタン</Button>}
  >
    左にテキスト、右にボタンなんていうパターンのときは verticalAlign=middle
    がいい感じ
  </WithSideContent>
);
