import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import BackwardButton from './BackwardButton';

export default {
  component: BackwardButton,
};

export const BackwardButtonComponent = () => (
  <BackwardButton
    small={boolean('Small', false, 'BackwardButton')}
    large={boolean('Large', false, 'BackwardButton')}
    disabled={boolean('Disabled', false, 'BackwardButton')}
    url={text('URL', 'https://www.freee.co.jp/', 'BackwardButton')}
    appearance={
      select(
        'Appearance',
        {
          primary: 'primary',
          secondary: 'secondary',
          tertiary: 'tertiary',
          undefined: '',
        },
        '',
        'BackwardButton'
      ) || undefined
    }
    danger={boolean('Danger', false, 'BackwardButton')}
    onClick={action('click')}
    onSelfWindowNavigation={action('self window navigation')}
    type={select(
      'Type',
      { submit: 'submit', button: 'button', reset: 'reset' },
      'button',
      'BackwardButton'
    )}
    rel={text('Rel', '', 'BackwardButton')}
    {...commonKnobs()}
  >
    {text('Children', 'ボタン', 'BackwardButton')}
  </BackwardButton>
);

export const Default = () => (
  <>
    <BackwardButton mr={1} mb={1}>
      default
    </BackwardButton>
    <BackwardButton mr={1} mb={1} appearance="primary">
      primary
    </BackwardButton>
    <BackwardButton mr={1} mb={1} appearance="secondary">
      secondary
    </BackwardButton>
    <BackwardButton mr={1} mb={1} appearance="tertiary">
      tertiary
    </BackwardButton>
  </>
);

export const Danger = () => (
  <>
    <BackwardButton mr={1} mb={1} danger>
      default
    </BackwardButton>
    <BackwardButton mr={1} mb={1} danger appearance="primary">
      primary
    </BackwardButton>
    <BackwardButton mr={1} mb={1} danger appearance="secondary">
      secondary
    </BackwardButton>
    <BackwardButton mr={1} mb={1} danger appearance="tertiary">
      tertiary
    </BackwardButton>
  </>
);

export const Disabled = () => (
  <>
    <div>
      <BackwardButton mr={1} mb={1} disabled>
        default
      </BackwardButton>
      <BackwardButton mr={1} mb={1} disabled appearance="primary">
        primary
      </BackwardButton>
      <BackwardButton mr={1} mb={1} disabled appearance="secondary">
        secondary
      </BackwardButton>
      <BackwardButton mr={1} mb={1} disabled appearance="tertiary">
        tertiary
      </BackwardButton>
    </div>
    <div>
      <BackwardButton mr={1} mb={1} disabled danger>
        default
      </BackwardButton>
      <BackwardButton mr={1} mb={1} disabled danger appearance="primary">
        primary
      </BackwardButton>
      <BackwardButton mr={1} mb={1} disabled danger appearance="secondary">
        secondary
      </BackwardButton>
      <BackwardButton mr={1} mb={1} disabled danger appearance="tertiary">
        tertiary
      </BackwardButton>
    </div>
  </>
);

export const Small = () => (
  <>
    <div>
      <BackwardButton mr={1} mb={1} small>
        default
      </BackwardButton>
      <BackwardButton mr={1} mb={1} small appearance="primary">
        primary
      </BackwardButton>
      <BackwardButton mr={1} mb={1} small appearance="secondary">
        secondary
      </BackwardButton>
      <BackwardButton mr={1} mb={1} small appearance="tertiary">
        tertiary
      </BackwardButton>
    </div>
    <div>
      <BackwardButton mr={1} mb={1} small danger>
        default
      </BackwardButton>
      <BackwardButton mr={1} mb={1} small danger appearance="primary">
        primary
      </BackwardButton>
      <BackwardButton mr={1} mb={1} small danger appearance="secondary">
        secondary
      </BackwardButton>
      <BackwardButton mr={1} mb={1} small danger appearance="tertiary">
        tertiary
      </BackwardButton>
    </div>
  </>
);

export const Large = () => (
  <>
    <div>
      <BackwardButton mr={1} mb={1} large>
        default
      </BackwardButton>
      <BackwardButton mr={1} mb={1} large appearance="primary">
        primary
      </BackwardButton>
      <BackwardButton mr={1} mb={1} large appearance="secondary">
        secondary
      </BackwardButton>
      <BackwardButton mr={1} mb={1} large appearance="tertiary">
        tertiary
      </BackwardButton>
    </div>
    <div>
      <BackwardButton mr={1} mb={1} large danger>
        default
      </BackwardButton>
      <BackwardButton mr={1} mb={1} large danger appearance="primary">
        primary
      </BackwardButton>
      <BackwardButton mr={1} mb={1} large danger appearance="secondary">
        secondary
      </BackwardButton>
      <BackwardButton mr={1} mb={1} large danger appearance="tertiary">
        tertiary
      </BackwardButton>
    </div>
  </>
);
