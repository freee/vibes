import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import Paragraph from '../../lv1/typography/Paragraph';
import AccordionPanel from './AccordionPanel';

export default {
  component: AccordionPanel,
};

export const AccordionPanelComponent = () => (
  <AccordionPanel
    title={text('Title', 'アコーディオン', 'AccordionPanel')}
    border={
      select(
        'Border',
        {
          undefined: '',
          both: 'both',
          bottom: 'bottom',
          top: 'top',
        },
        '',
        'AccordionPanel'
      ) || undefined // select の options に undefined を渡せないので空文字を || で undefined にする
    }
    small={boolean('Small', false, 'AccordionPanel')}
    open={boolean('Open', false, 'AccordionPanel')}
    onClick={action('click')}
    {...commonKnobs()}
  >
    <Paragraph marginBottom>ほげほげほげほげ</Paragraph>
    <Paragraph>ふがふがふがふが</Paragraph>
  </AccordionPanel>
);

export const InteractiveSample = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <AccordionPanel
      title="アコーディオン"
      open={isOpen}
      onClick={() => setOpen(!isOpen)}
      {...commonKnobs()}
    >
      <Paragraph marginBottom>ほげほげほげほげ</Paragraph>
      <Paragraph>ふがふがふがふが</Paragraph>
    </AccordionPanel>
  );
};

export const HasSiblings = () => {
  return (
    <>
      <AccordionPanel
        title="アコーディオン1"
        open={false}
        onClick={() => undefined}
        {...commonKnobs()}
      />
      <AccordionPanel
        title="アコーディオン2"
        open={false}
        border="top"
        onClick={() => undefined}
        {...commonKnobs()}
      />
      <AccordionPanel
        title="アコーディオン3"
        open={false}
        border="top"
        onClick={() => undefined}
        {...commonKnobs()}
      />
    </>
  );
};
