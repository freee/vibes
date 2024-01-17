import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import AccordionPanel from './AccordionPanel';
import Paragraph from '../../lv1/typography/Paragraph';

export default {
  component: AccordionPanel,
} as Meta<typeof AccordionPanel>;

type Story = StoryObj<typeof AccordionPanel>;

export const Basic: Story = {
  args: {
    title: 'アコーディオン',
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setOpen] = React.useState(false);

    return (
      <AccordionPanel
        {...args}
        open={isOpen}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Paragraph>ほげほげほげほげ</Paragraph>
        <Paragraph>ふがふがふがふが</Paragraph>
      </AccordionPanel>
    );
  },
};

export const Interaction: Story = {
  ...Basic,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const accordionPanel = canvas.getByRole('button');

    expect(accordionPanel).toBeInTheDocument();
    expect(accordionPanel.ariaExpanded).toBe('false');

    await userEvent.click(accordionPanel);
    expect(accordionPanel.ariaExpanded).toBe('true');

    await userEvent.click(accordionPanel);
    expect(accordionPanel.ariaExpanded).toBe('false');
  },
};

export const HasSiblings: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setOpen] = React.useState([false, false, false]);

    return (
      <>
        <AccordionPanel
          title="アコーディオン1"
          open={isOpen[0]}
          onClick={() => setOpen((prev) => [!prev[0], prev[1], prev[2]])}
        >
          <Paragraph>あいうえお</Paragraph>
        </AccordionPanel>
        <AccordionPanel
          title="アコーディオン2"
          open={isOpen[1]}
          onClick={() => setOpen((prev) => [prev[0], !prev[1], prev[2]])}
          border="top"
        >
          <Paragraph>かきくけこ</Paragraph>
        </AccordionPanel>
        <AccordionPanel
          title="アコーディオン3"
          open={isOpen[2]}
          onClick={() => setOpen((prev) => [prev[0], prev[1], !prev[2]])}
          border="top"
        >
          <Paragraph>さしすせそ</Paragraph>
        </AccordionPanel>
      </>
    );
  },
};
