import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import IconOnlyBackwardButton from './IconOnlyBackwardButton';

export default {
  component: IconOnlyBackwardButton,
};

export const IconOnlyBackwardButtonComponent = () => (
  <IconOnlyBackwardButton
    buttonLabel={text('buttonLabel', 'ボタンラベル', 'IconOnlyBackwardButton')}
    small={boolean('Small', false, 'IconOnlyBackwardButton')}
    large={boolean('Large', false, 'IconOnlyBackwardButton')}
    disabled={boolean('Disabled', false, 'IconOnlyBackwardButton')}
    url={text('URL', 'https://www.freee.co.jp/', 'IconOnlyBackwardButton')}
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
        'IconOnlyBackwardButton'
      ) || undefined
    }
    danger={boolean('Danger', false, 'IconOnlyBackwardButton')}
    onClick={action('click')}
    onSelfWindowNavigation={action('self window navigation')}
    type={select(
      'Type',
      { submit: 'submit', button: 'button', reset: 'reset' },
      'button',
      'IconOnlyBackwardButton'
    )}
    rel={text('Rel', '', 'IconOnlyBackwardButton')}
    {...commonKnobs()}
  />
);

export const Default = () => (
  <>
    <IconOnlyBackwardButton mr={1} mb={1} buttonLabel="default" />
    <IconOnlyBackwardButton
      mr={1}
      mb={1}
      appearance="primary"
      buttonLabel="primary"
    />
    <IconOnlyBackwardButton
      mr={1}
      mb={1}
      appearance="secondary"
      buttonLabel="secondary"
    />
    <IconOnlyBackwardButton
      mr={1}
      mb={1}
      appearance="tertiary"
      buttonLabel="tertiary"
    />
  </>
);

export const Danger = () => (
  <>
    <IconOnlyBackwardButton mr={1} mb={1} danger buttonLabel="default" />
    <IconOnlyBackwardButton
      mr={1}
      mb={1}
      danger
      appearance="primary"
      buttonLabel="primary"
    />
    <IconOnlyBackwardButton
      mr={1}
      mb={1}
      danger
      appearance="secondary"
      buttonLabel="secondary"
    />
    <IconOnlyBackwardButton
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
      <IconOnlyBackwardButton mr={1} mb={1} disabled buttonLabel="default" />
      <IconOnlyBackwardButton
        mr={1}
        mb={1}
        disabled
        appearance="primary"
        buttonLabel="primary"
      />
      <IconOnlyBackwardButton
        mr={1}
        mb={1}
        disabled
        appearance="secondary"
        buttonLabel="secondary"
      />
      <IconOnlyBackwardButton
        mr={1}
        mb={1}
        disabled
        appearance="tertiary"
        buttonLabel="tertiary"
      />
    </div>
    <div>
      <IconOnlyBackwardButton
        mr={1}
        mb={1}
        disabled
        danger
        buttonLabel="default"
      />
      <IconOnlyBackwardButton
        mr={1}
        mb={1}
        disabled
        danger
        appearance="primary"
        buttonLabel="primary"
      />
      <IconOnlyBackwardButton
        mr={1}
        mb={1}
        disabled
        danger
        appearance="secondary"
        buttonLabel="secondary"
      />
      <IconOnlyBackwardButton
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
      <IconOnlyBackwardButton mr={1} mb={1} small buttonLabel="default" />
      <IconOnlyBackwardButton
        mr={1}
        mb={1}
        small
        appearance="primary"
        buttonLabel="primary"
      />
      <IconOnlyBackwardButton
        mr={1}
        mb={1}
        small
        appearance="secondary"
        buttonLabel="secondary"
      />
      <IconOnlyBackwardButton
        mr={1}
        mb={1}
        small
        appearance="tertiary"
        buttonLabel="tertiary"
      />
    </div>
    <div>
      <IconOnlyBackwardButton
        mr={1}
        mb={1}
        small
        danger
        buttonLabel="default"
      />
      <IconOnlyBackwardButton
        mr={1}
        mb={1}
        small
        danger
        appearance="primary"
        buttonLabel="primary"
      />
      <IconOnlyBackwardButton
        mr={1}
        mb={1}
        small
        danger
        appearance="secondary"
        buttonLabel="secondary"
      />
      <IconOnlyBackwardButton
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
      <IconOnlyBackwardButton mr={1} mb={1} large buttonLabel="default" />
      <IconOnlyBackwardButton
        mr={1}
        mb={1}
        large
        appearance="primary"
        buttonLabel="primary"
      />
      <IconOnlyBackwardButton
        mr={1}
        mb={1}
        large
        appearance="secondary"
        buttonLabel="secondary"
      />
      <IconOnlyBackwardButton
        mr={1}
        mb={1}
        large
        appearance="tertiary"
        buttonLabel="tertiary"
      />
    </div>
    <div>
      <IconOnlyBackwardButton
        mr={1}
        mb={1}
        large
        danger
        buttonLabel="default"
      />
      <IconOnlyBackwardButton
        mr={1}
        mb={1}
        large
        danger
        appearance="primary"
        buttonLabel="primary"
      />
      <IconOnlyBackwardButton
        mr={1}
        mb={1}
        large
        danger
        appearance="secondary"
        buttonLabel="secondary"
      />
      <IconOnlyBackwardButton
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
