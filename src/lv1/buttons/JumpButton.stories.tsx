import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import JumpButton from './JumpButton';

export default {
  component: JumpButton,
};

export const JumpButtonComponent = () => {
  const ref = React.createRef<HTMLButtonElement | HTMLAnchorElement>();
  return (
    <JumpButton
      target={select(
        'Target',
        {
          _blank: '_blank',
          _self: '_self',
        },
        '_self',
        'JumpButton'
      )}
      small={boolean('Small', false, 'JumpButton')}
      large={boolean('Large', false, 'JumpButton')}
      disabled={boolean('Disabled', false, 'JumpButton')}
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
          'JumpButton'
        ) || undefined
      }
      danger={boolean('Danger', false, 'JumpButton')}
      url={text('Url', 'https://www.freee.co.jp/', 'JumpButton')}
      onClick={action('click')}
      onSelfWindowNavigation={action('onSelfWindowNavigation')}
      type={select(
        'Type',
        { submit: 'submit', button: 'button', reset: 'reset' },
        'button',
        'JumpButton'
      )}
      rel={text('Rel', '', 'JumpButton')}
      ref={ref}
      {...commonKnobs()}
    >
      ボタン
    </JumpButton>
  );
};

export const Default = () => (
  <>
    <JumpButton mr={1} mb={1}>
      default
    </JumpButton>
    <JumpButton mr={1} mb={1} appearance="primary">
      primary
    </JumpButton>
    <JumpButton mr={1} mb={1} appearance="secondary">
      secondary
    </JumpButton>
    <JumpButton mr={1} mb={1} appearance="tertiary">
      tertiary
    </JumpButton>
  </>
);

export const Danger = () => (
  <>
    <JumpButton mr={1} mb={1} danger>
      default
    </JumpButton>
    <JumpButton mr={1} mb={1} danger appearance="primary">
      primary
    </JumpButton>
    <JumpButton mr={1} mb={1} danger appearance="secondary">
      secondary
    </JumpButton>
    <JumpButton mr={1} mb={1} danger appearance="tertiary">
      tertiary
    </JumpButton>
  </>
);

export const Disabled = () => (
  <>
    <div>
      <JumpButton mr={1} mb={1} disabled>
        default
      </JumpButton>
      <JumpButton mr={1} mb={1} disabled appearance="primary">
        primary
      </JumpButton>
      <JumpButton mr={1} mb={1} disabled appearance="secondary">
        secondary
      </JumpButton>
      <JumpButton mr={1} mb={1} disabled appearance="tertiary">
        tertiary
      </JumpButton>
    </div>
    <div>
      <JumpButton mr={1} mb={1} disabled danger>
        default
      </JumpButton>
      <JumpButton mr={1} mb={1} disabled danger appearance="primary">
        primary
      </JumpButton>
      <JumpButton mr={1} mb={1} disabled danger appearance="secondary">
        secondary
      </JumpButton>
      <JumpButton mr={1} mb={1} disabled danger appearance="tertiary">
        tertiary
      </JumpButton>
    </div>
  </>
);

export const Small = () => (
  <>
    <div>
      <JumpButton mr={1} mb={1} small>
        default
      </JumpButton>
      <JumpButton mr={1} mb={1} small appearance="primary">
        primary
      </JumpButton>
      <JumpButton mr={1} mb={1} small appearance="secondary">
        secondary
      </JumpButton>
      <JumpButton mr={1} mb={1} small appearance="tertiary">
        tertiary
      </JumpButton>
    </div>
    <div>
      <JumpButton mr={1} mb={1} small danger>
        default
      </JumpButton>
      <JumpButton mr={1} mb={1} small danger appearance="primary">
        primary
      </JumpButton>
      <JumpButton mr={1} mb={1} small danger appearance="secondary">
        secondary
      </JumpButton>
      <JumpButton mr={1} mb={1} small danger appearance="tertiary">
        tertiary
      </JumpButton>
    </div>
  </>
);

export const Large = () => (
  <>
    <div>
      <JumpButton mr={1} mb={1} large>
        default
      </JumpButton>
      <JumpButton mr={1} mb={1} large appearance="primary">
        primary
      </JumpButton>
      <JumpButton mr={1} mb={1} large appearance="secondary">
        secondary
      </JumpButton>
      <JumpButton mr={1} mb={1} large appearance="tertiary">
        tertiary
      </JumpButton>
    </div>
    <div>
      <JumpButton mr={1} mb={1} large danger>
        default
      </JumpButton>
      <JumpButton mr={1} mb={1} large danger appearance="primary">
        primary
      </JumpButton>
      <JumpButton mr={1} mb={1} large danger appearance="secondary">
        secondary
      </JumpButton>
      <JumpButton mr={1} mb={1} large danger appearance="tertiary">
        tertiary
      </JumpButton>
    </div>
  </>
);

export const TargetBlank = () => (
  <>
    <div>
      <JumpButton mr={1} mb={1} target="_blank">
        default
      </JumpButton>
      <JumpButton mr={1} mb={1} target="_blank" appearance="primary">
        primary
      </JumpButton>
      <JumpButton mr={1} mb={1} target="_blank" appearance="secondary">
        secondary
      </JumpButton>
      <JumpButton mr={1} mb={1} target="_blank" appearance="tertiary">
        tertiary
      </JumpButton>
    </div>
    <div>
      <JumpButton mr={1} mb={1} target="_blank" danger>
        default
      </JumpButton>
      <JumpButton mr={1} mb={1} target="_blank" danger appearance="primary">
        primary
      </JumpButton>
      <JumpButton mr={1} mb={1} target="_blank" danger appearance="secondary">
        secondary
      </JumpButton>
      <JumpButton mr={1} mb={1} target="_blank" danger appearance="tertiary">
        tertiary
      </JumpButton>
    </div>
  </>
);
