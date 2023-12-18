import * as React from 'react';

import { MdArrowDropDown } from 'react-icons/md';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import IconOnlyButton from './IconOnlyButton';

export default {
  component: IconOnlyButton,
};

export const IconOnlyButtonComponent = () => (
  <IconOnlyButton
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
        'IconOnlyButton'
      ) || undefined
    }
    primary={boolean('Primary', false, 'IconOnlyButton')}
    danger={boolean('Danger', false, 'IconOnlyButton')}
    small={boolean('Small', false, 'IconOnlyButton')}
    large={boolean('Large', false, 'IconOnlyButton')}
    disabled={boolean('Disabled', false, 'IconOnlyButton')}
    IconComponent={MdArrowDropDown}
    label="Icon Only Button"
    type={select(
      'Type',
      { submit: 'submit', button: 'button', reset: 'reset' },
      'button',
      'IconOnlyButton'
    )}
    onSelfWindowNavigation={action('self window navigation')}
    onClick={action('click')}
    onKeyDown={action('keydown')}
    onFocus={action('focus')}
    onBlur={action('blur')}
    href={text('Href', '', 'IconOnlyButton')}
    download={text('Download', '', 'Button') || undefined}
    target={select(
      'Target',
      {
        _blank: '_blank',
        _self: '_self',
      },
      '_self',
      'IconOnlyButton'
    )}
    rel={text('Rel', '', 'IconOnlyButton') || undefined}
    {...commonKnobs()}
  />
);

export const Default = () => (
  <>
    <IconOnlyButton
      mr={1}
      mb={1}
      IconComponent={MdArrowDropDown}
      label="default"
    />
    <IconOnlyButton
      mr={1}
      mb={1}
      IconComponent={MdArrowDropDown}
      appearance="primary"
      label="primary"
    />
    <IconOnlyButton
      mr={1}
      mb={1}
      IconComponent={MdArrowDropDown}
      appearance="secondary"
      label="secondary"
    />
    <IconOnlyButton
      mr={1}
      mb={1}
      IconComponent={MdArrowDropDown}
      appearance="tertiary"
      label="tertiary"
    />
  </>
);

export const Danger = () => (
  <>
    <IconOnlyButton
      mr={1}
      mb={1}
      IconComponent={MdArrowDropDown}
      danger
      label="default"
    />
    <IconOnlyButton
      mr={1}
      mb={1}
      IconComponent={MdArrowDropDown}
      danger
      appearance="primary"
      label="primary"
    />
    <IconOnlyButton
      mr={1}
      mb={1}
      IconComponent={MdArrowDropDown}
      danger
      appearance="secondary"
      label="secondary"
    />
    <IconOnlyButton
      mr={1}
      mb={1}
      IconComponent={MdArrowDropDown}
      danger
      appearance="tertiary"
      label="tertiary"
    />
  </>
);

export const Disabled = () => (
  <>
    <div>
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        disabled
        label="default"
      />
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        disabled
        appearance="primary"
        label="primary"
      />
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        disabled
        appearance="secondary"
        label="secondary"
      />
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        disabled
        appearance="tertiary"
        label="tertiary"
      />
    </div>
    <div>
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        disabled
        danger
        label="default"
      />
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        disabled
        danger
        appearance="primary"
        label="primary"
      />
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        disabled
        danger
        appearance="secondary"
        label="secondary"
      />
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        disabled
        danger
        appearance="tertiary"
        label="tertiary"
      />
    </div>
  </>
);

export const Small = () => (
  <>
    <div>
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        small
        label="default"
      />
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        small
        appearance="primary"
        label="primary"
      />
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        small
        appearance="secondary"
        label="secondary"
      />
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        small
        appearance="tertiary"
        label="tertiary"
      />
    </div>
    <div>
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        small
        danger
        label="default"
      />
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        small
        danger
        appearance="primary"
        label="primary"
      />
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        small
        danger
        appearance="secondary"
        label="secondary"
      />
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        small
        danger
        appearance="tertiary"
        label="tertiary"
      />
    </div>
  </>
);
export const Large = () => (
  <>
    <div>
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        large
        label="default"
      />
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        large
        appearance="primary"
        label="primary"
      />
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        large
        appearance="secondary"
        label="secondary"
      />
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        large
        appearance="tertiary"
        label="tertiary"
      />
    </div>
    <div>
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        large
        danger
        label="default"
      />
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        large
        danger
        appearance="primary"
        label="primary"
      />
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        large
        danger
        appearance="secondary"
        label="secondary"
      />
      <IconOnlyButton
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        large
        danger
        appearance="tertiary"
        label="tertiary"
      />
    </div>
  </>
);
