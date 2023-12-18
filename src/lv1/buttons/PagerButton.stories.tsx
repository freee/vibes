import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import PagerButton from './PagerButton';

export default {
  component: PagerButton,
};

export const PagerButtonComponent = () => (
  <PagerButton
    small={boolean('Small', false, 'PagerButton')}
    disabled={boolean('Disabled', false, 'PagerButton')}
    current={boolean('Current', false, 'PagerButton')}
    onClick={action('click')}
    label={text('Label', 'Pager Button', 'PagerButton')}
    {...commonKnobs()}
  >
    {text('Children', '1', 'PagerButton')}
  </PagerButton>
);

export const Default = () => (
  <>
    <PagerButton mr={1} mb={1} label={'ページ 1'}>
      1
    </PagerButton>
    <PagerButton mr={1} mb={1} label={'ページ 2'}>
      2
    </PagerButton>
    <PagerButton mr={1} mb={1} label={'ページ 3'} current>
      3
    </PagerButton>
    <PagerButton mr={1} mb={1} label={'ページ 4'}>
      4
    </PagerButton>
    <PagerButton mr={1} mb={1} label={'ページ 5'}>
      5
    </PagerButton>
  </>
);

export const Disabled = () => (
  <>
    <PagerButton mr={1} mb={1} label={'ページ 1'} disabled>
      1
    </PagerButton>
    <PagerButton mr={1} mb={1} label={'ページ 2'} disabled>
      2
    </PagerButton>
    <PagerButton mr={1} mb={1} label={'ページ 3'} disabled current>
      3
    </PagerButton>
    <PagerButton mr={1} mb={1} label={'ページ 4'} disabled>
      4
    </PagerButton>
    <PagerButton mr={1} mb={1} label={'ページ 5'} disabled>
      5
    </PagerButton>
  </>
);

export const Small = () => (
  <>
    <PagerButton mr={1} mb={1} label={'ページ 1'} small>
      1
    </PagerButton>
    <PagerButton mr={1} mb={1} label={'ページ 2'} small>
      2
    </PagerButton>
    <PagerButton mr={1} mb={1} label={'ページ 3'} small current>
      3
    </PagerButton>
    <PagerButton mr={1} mb={1} label={'ページ 4'} small>
      4
    </PagerButton>
    <PagerButton mr={1} mb={1} label={'ページ 5'} small>
      5
    </PagerButton>
  </>
);
