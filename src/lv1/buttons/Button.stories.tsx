import * as React from 'react';

import { MdArrowDropDown } from 'react-icons/md';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import Button from './Button';

export default {
  component: Button,
};

export const ButtonComponent = () => {
  const ref = React.createRef<HTMLButtonElement | HTMLAnchorElement>();
  return (
    <Button
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
          'Button'
        ) || undefined
      }
      danger={boolean('Danger', false, 'Button')}
      small={boolean('Small', false, 'Button')}
      large={boolean('Large', false, 'Button')}
      disabled={boolean('Disabled', false, 'Button')}
      onClick={action('click')}
      onSelfWindowNavigation={action('self window navigation')}
      onFocus={action('focus')}
      onBlur={action('blur')}
      href={text('Href', '', 'Button')}
      download={text('Download', '', 'Button') || undefined}
      target={select(
        'Target',
        {
          _blank: '_blank',
          _self: '_self',
        },
        '_self',
        'Button'
      )}
      rel={text('Rel', '', 'Button')}
      type={select(
        'Type',
        { submit: 'submit', button: 'button', reset: 'reset' },
        'button',
        'Button'
      )}
      primary={boolean('Primary (deprecated)', false, 'Button')}
      ref={ref}
      IconComponent={
        boolean('WithIcon', false, 'Button') ? MdArrowDropDown : undefined
      }
      iconPosition={select(
        'iconPosition',
        { left: 'left', right: 'right' },
        'left',
        'Button'
      )}
      width={
        select('Width', { default: 'default', full: 'full' }, '', 'Button') ||
        undefined
      }
      hasMinWidth={boolean('hasMinWidth', false, 'Button')}
      {...commonKnobs()}
    >
      {text('Children', 'ボタン', 'Button')}
    </Button>
  );
};

export const Default = () => (
  <>
    <Button mr={1} mb={1}>
      default
    </Button>
    <Button mr={1} mb={1} appearance="primary">
      primary
    </Button>
    <Button mr={1} mb={1} appearance="secondary">
      secondary
    </Button>
    <Button mr={1} mb={1} appearance="tertiary">
      tertiary
    </Button>
  </>
);

export const Danger = () => (
  <>
    <Button mr={1} mb={1} danger>
      default
    </Button>
    <Button mr={1} mb={1} danger appearance="primary">
      primary
    </Button>
    <Button mr={1} mb={1} danger appearance="secondary">
      secondary
    </Button>
    <Button mr={1} mb={1} danger appearance="tertiary">
      tertiary
    </Button>
  </>
);

export const Disabled = () => (
  <>
    <div>
      <Button mr={1} mb={1} disabled>
        default
      </Button>
      <Button mr={1} mb={1} disabled appearance="primary">
        primary
      </Button>
      <Button mr={1} mb={1} disabled appearance="secondary">
        secondary
      </Button>
      <Button mr={1} mb={1} disabled appearance="tertiary">
        tertiary
      </Button>
    </div>
    <div>
      <Button mr={1} mb={1} disabled danger>
        default
      </Button>
      <Button mr={1} mb={1} disabled danger appearance="primary">
        primary
      </Button>
      <Button mr={1} mb={1} disabled danger appearance="secondary">
        secondary
      </Button>
      <Button mr={1} mb={1} disabled danger appearance="tertiary">
        tertiary
      </Button>
    </div>
  </>
);

export const Small = () => (
  <>
    <div>
      <Button mr={1} mb={1} small>
        default
      </Button>
      <Button mr={1} mb={1} small appearance="primary">
        primary
      </Button>
      <Button mr={1} mb={1} small appearance="secondary">
        secondary
      </Button>
      <Button mr={1} mb={1} small appearance="tertiary">
        tertiary
      </Button>
    </div>
    <div>
      <Button mr={1} mb={1} small danger>
        default
      </Button>
      <Button mr={1} mb={1} small danger appearance="primary">
        primary
      </Button>
      <Button mr={1} mb={1} small danger appearance="secondary">
        secondary
      </Button>
      <Button mr={1} mb={1} small danger appearance="tertiary">
        tertiary
      </Button>
    </div>
  </>
);

export const Large = () => (
  <>
    <div>
      <Button mr={1} mb={1} large>
        default
      </Button>
      <Button mr={1} mb={1} large appearance="primary">
        primary
      </Button>
      <Button mr={1} mb={1} large appearance="secondary">
        secondary
      </Button>
      <Button mr={1} mb={1} large appearance="tertiary">
        tertiary
      </Button>
    </div>
    <div>
      <Button mr={1} mb={1} large danger>
        default
      </Button>
      <Button mr={1} mb={1} large danger appearance="primary">
        primary
      </Button>
      <Button mr={1} mb={1} large danger appearance="secondary">
        secondary
      </Button>
      <Button mr={1} mb={1} large danger appearance="tertiary">
        tertiary
      </Button>
    </div>
  </>
);

export const WithLeftIcon = () => (
  <>
    <div>
      <Button mr={1} mb={1} IconComponent={MdArrowDropDown}>
        default
      </Button>
      <Button
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        appearance="primary"
      >
        primary
      </Button>
      <Button
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        appearance="secondary"
      >
        secondary
      </Button>
      <Button
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        appearance="tertiary"
      >
        tertiary
      </Button>
    </div>
    <div>
      <Button mr={1} mb={1} IconComponent={MdArrowDropDown} danger>
        default
      </Button>
      <Button
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        danger
        appearance="primary"
      >
        primary
      </Button>
      <Button
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        danger
        appearance="secondary"
      >
        secondary
      </Button>
      <Button
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        danger
        appearance="tertiary"
      >
        tertiary
      </Button>
    </div>
  </>
);

export const WithRightIcon = () => (
  <>
    <div>
      <Button
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        iconPosition="right"
      >
        default
      </Button>
      <Button
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        iconPosition="right"
        appearance="primary"
      >
        primary
      </Button>
      <Button
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        iconPosition="right"
        appearance="secondary"
      >
        secondary
      </Button>
      <Button
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        iconPosition="right"
        appearance="tertiary"
      >
        tertiary
      </Button>
    </div>
    <div>
      <Button
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        iconPosition="right"
        danger
      >
        default
      </Button>
      <Button
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        iconPosition="right"
        danger
        appearance="primary"
      >
        primary
      </Button>
      <Button
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        iconPosition="right"
        danger
        appearance="secondary"
      >
        secondary
      </Button>
      <Button
        mr={1}
        mb={1}
        IconComponent={MdArrowDropDown}
        iconPosition="right"
        danger
        appearance="tertiary"
      >
        tertiary
      </Button>
    </div>
  </>
);

export const WidthFull = () => (
  <>
    <Button mr={1} mb={1} width="full">
      default
    </Button>
    <Button
      mr={1}
      mb={1}
      IconComponent={MdArrowDropDown}
      iconPosition="right"
      width="full"
    >
      default
    </Button>
  </>
);

export const Download = () => (
  <>
    <div>
      <Button mr={1} mb={1} href="/logo" download>
        hrefのファイル名のまま保存
      </Button>
      <Button mr={1} mb={1} href="/logo" download="freee_logo.png">
        downloadでファイル名を指定
      </Button>
    </div>
  </>
);
