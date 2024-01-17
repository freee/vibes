import * as React from 'react';

import { MdArrowDropDown } from 'react-icons/md';
import { expect, fn, userEvent, within } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

export default {
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    onClick: fn(),
    onKeyDown: fn(),
    onFocus: fn(),
    onBlur: fn(),
    children: 'ボタン',
  },
  render: (args) => {
    const ref = React.createRef<HTMLButtonElement | HTMLAnchorElement>();

    return <Button {...args} ref={ref} />;
  },
};

export const Interaction: Story = {
  ...Basic,
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    expect(args.onClick).toHaveBeenCalled();

    await userEvent.keyboard('{enter}');
    expect(args.onKeyDown).toHaveBeenCalled();

    await userEvent.tab();
    expect(args.onBlur).toHaveBeenCalled();
    expect(button).not.toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(args.onFocus).toHaveBeenCalled();
    expect(button).toHaveFocus();
  },
};

export const Default: Story = {
  render: () => (
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
  ),
};

export const Danger: Story = {
  render: () => (
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
  ),
};

export const Disabled: Story = {
  render: () => (
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
  ),
};

export const Hover: Story = {
  parameters: {
    pseudo: {
      hover: "[data-test='hover']",
    },
  },
  render: () => (
    <>
      <div>
        <Button mr={1} mb={1} data-test="hover">
          default
        </Button>
        <Button mr={1} mb={1} appearance="primary" data-test="hover">
          primary
        </Button>
        <Button mr={1} mb={1} appearance="secondary" data-test="hover">
          secondary
        </Button>
        <Button mr={1} mb={1} appearance="tertiary" data-test="hover">
          tertiary
        </Button>
      </div>
      <div>
        <Button mr={1} mb={1} danger data-test="hover">
          default
        </Button>
        <Button mr={1} mb={1} danger appearance="primary" data-test="hover">
          primary
        </Button>
        <Button mr={1} mb={1} danger appearance="secondary" data-test="hover">
          secondary
        </Button>
        <Button mr={1} mb={1} danger appearance="tertiary" data-test="hover">
          tertiary
        </Button>
      </div>
    </>
  ),
};

export const Focus: Story = {
  parameters: {
    pseudo: {
      focus: "[data-test='focus']",
    },
  },
  render: () => (
    <>
      <div>
        <Button mr={1} mb={1} data-test="focus">
          default
        </Button>
        <Button mr={1} mb={1} appearance="primary" data-test="focus">
          primary
        </Button>
        <Button mr={1} mb={1} appearance="secondary" data-test="focus">
          secondary
        </Button>
        <Button mr={1} mb={1} appearance="tertiary" data-test="focus">
          tertiary
        </Button>
      </div>
      <div>
        <Button mr={1} mb={1} danger data-test="focus">
          default
        </Button>
        <Button mr={1} mb={1} danger appearance="primary" data-test="focus">
          primary
        </Button>
        <Button mr={1} mb={1} danger appearance="secondary" data-test="focus">
          secondary
        </Button>
        <Button mr={1} mb={1} danger appearance="tertiary" data-test="focus">
          tertiary
        </Button>
      </div>
    </>
  ),
};

export const Small: Story = {
  render: () => (
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
  ),
};

export const Large: Story = {
  render: () => (
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
  ),
};

export const WithLeftIcon: Story = {
  render: () => (
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
  ),
};

export const WithRightIcon: Story = {
  render: () => (
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
  ),
};

export const WidthFull: Story = {
  render: () => (
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
  ),
};

export const Download: Story = {
  render: () => (
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
  ),
};
