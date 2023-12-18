import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import IconOnlyJumpButton from './IconOnlyJumpButton';

export default {
  component: IconOnlyJumpButton,
};

export const IconOnlyJumpButtonComponent = () => (
  <IconOnlyJumpButton
    buttonLabel={text('buttonLabel', 'ボタンラベル', 'IconOnlyJumpButton')}
    target={select(
      'Target',
      {
        _blank: '_blank',
        _self: '_self',
      },
      '_self',
      'IconOnlyJumpButton'
    )}
    small={boolean('Small', false, 'IconOnlyJumpButton')}
    large={boolean('Large', false, 'IconOnlyJumpButton')}
    disabled={boolean('Disabled', false, 'IconOnlyJumpButton')}
    url={text('Url', 'https://www.freee.co.jp/', 'IconOnlyJumpButton')}
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
        'IconOnlyJumpButton'
      ) || undefined
    }
    danger={boolean('Danger', false, 'IconOnlyJumpButton')}
    onClick={action('click')}
    onSelfWindowNavigation={action('self window navigation')}
    type={select(
      'Type',
      { submit: 'submit', button: 'button', reset: 'reset' },
      'button',
      'IconOnlyJumpButton'
    )}
    rel={text('Rel', '', 'IconOnlyJumpButton')}
    {...commonKnobs()}
  />
);

export const Default = () => (
  <>
    <IconOnlyJumpButton mr={1} mb={1} buttonLabel="default" />
    <IconOnlyJumpButton
      mr={1}
      mb={1}
      appearance="primary"
      buttonLabel="primary"
    />
    <IconOnlyJumpButton
      mr={1}
      mb={1}
      appearance="secondary"
      buttonLabel="secondary"
    />
    <IconOnlyJumpButton
      mr={1}
      mb={1}
      appearance="tertiary"
      buttonLabel="tertiary"
    />
  </>
);

export const Danger = () => (
  <>
    <IconOnlyJumpButton mr={1} mb={1} danger buttonLabel="default" />
    <IconOnlyJumpButton
      mr={1}
      mb={1}
      danger
      appearance="primary"
      buttonLabel="primary"
    />
    <IconOnlyJumpButton
      mr={1}
      mb={1}
      danger
      appearance="secondary"
      buttonLabel="secondary"
    />
    <IconOnlyJumpButton
      mr={1}
      mb={1}
      danger
      appearance="tertiary"
      buttonLabel="tertiary"
    />
  </>
);

export const Disabled = () => (
  <>
    <div>
      <IconOnlyJumpButton mr={1} mb={1} disabled buttonLabel="default" />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        disabled
        appearance="primary"
        buttonLabel="primary"
      />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        disabled
        appearance="secondary"
        buttonLabel="secondary"
      />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        disabled
        appearance="tertiary"
        buttonLabel="tertiary"
      />
    </div>
    <div>
      <IconOnlyJumpButton mr={1} mb={1} disabled danger buttonLabel="default" />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        disabled
        danger
        appearance="primary"
        buttonLabel="primary"
      />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        disabled
        danger
        appearance="secondary"
        buttonLabel="secondary"
      />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        disabled
        danger
        appearance="tertiary"
        buttonLabel="tertiary"
      />
    </div>
  </>
);

export const Small = () => (
  <>
    <div>
      <IconOnlyJumpButton mr={1} mb={1} small buttonLabel="default" />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        small
        appearance="primary"
        buttonLabel="primary"
      />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        small
        appearance="secondary"
        buttonLabel="secondary"
      />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        small
        appearance="tertiary"
        buttonLabel="tertiary"
      />
    </div>
    <div>
      <IconOnlyJumpButton mr={1} mb={1} small danger buttonLabel="default" />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        small
        danger
        appearance="primary"
        buttonLabel="primary"
      />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        small
        danger
        appearance="secondary"
        buttonLabel="secondary"
      />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        small
        danger
        appearance="tertiary"
        buttonLabel="tertiary"
      />
    </div>
  </>
);

export const Large = () => (
  <>
    <div>
      <IconOnlyJumpButton mr={1} mb={1} large buttonLabel="default" />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        large
        appearance="primary"
        buttonLabel="primary"
      />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        large
        appearance="secondary"
        buttonLabel="secondary"
      />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        large
        appearance="tertiary"
        buttonLabel="tertiary"
      />
    </div>
    <div>
      <IconOnlyJumpButton mr={1} mb={1} large danger buttonLabel="default" />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        large
        danger
        appearance="primary"
        buttonLabel="primary"
      />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        large
        danger
        appearance="secondary"
        buttonLabel="secondary"
      />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        large
        danger
        appearance="tertiary"
        buttonLabel="tertiary"
      />
    </div>
  </>
);

export const TargetBlank = () => (
  <>
    <div>
      <IconOnlyJumpButton mr={1} mb={1} target="_blank" buttonLabel="default" />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        target="_blank"
        appearance="primary"
        buttonLabel="primary"
      />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        target="_blank"
        appearance="secondary"
        buttonLabel="secondary"
      />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        target="_blank"
        appearance="tertiary"
        buttonLabel="tertiary"
      />
    </div>
    <div>
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        target="_blank"
        danger
        buttonLabel="default"
      />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        target="_blank"
        danger
        appearance="primary"
        buttonLabel="primary"
      />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        target="_blank"
        danger
        appearance="secondary"
        buttonLabel="secondary"
      />
      <IconOnlyJumpButton
        mr={1}
        mb={1}
        target="_blank"
        danger
        appearance="tertiary"
        buttonLabel="tertiary"
      />
    </div>
  </>
);
