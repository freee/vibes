import * as React from 'react';

import { boolean, select } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import Paragraph from '../../lv1/typography/Paragraph';
import ColumnBase from '../../lv1/bases/ColumnBase';
import WithAccordionContent from './WithAccordionContent';

export default {
  component: WithAccordionContent,
};

export const WithAccordionContentComponent = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <WithAccordionContent
      renderAccordionButtonArea={(AccordionButton, contentId) => (
        <AccordionButton
          contentId={contentId}
          open={isOpen}
          small={boolean('Small', false, 'WithAccordionContent')}
          large={boolean('Large', false, 'WithAccordionContent')}
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
              'WithAccordionContent'
            ) || undefined
          }
          onClick={() => setOpen(!isOpen)}
          {...commonKnobs()}
        >
          アコーディオンボタン
        </AccordionButton>
      )}
      isOpen={isOpen}
      {...commonKnobs()}
    >
      <ColumnBase mt={0.5}>
        <Paragraph marginBottom>ほげほげほげほげ</Paragraph>
        <Paragraph>ふがふがふがふが</Paragraph>
      </ColumnBase>
    </WithAccordionContent>
  );
};

export const UseAsHeading = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <WithAccordionContent
      renderAccordionButtonArea={(AccordionButton, contentId) => (
        <h3
          style={{
            margin: 0,
          }}
        >
          <AccordionButton
            contentId={contentId}
            open={isOpen}
            small={boolean('Small', false, 'WithAccordionContent')}
            large={boolean('Large', false, 'WithAccordionContent')}
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
                'WithAccordionContent'
              ) || undefined
            }
            onClick={() => setOpen(!isOpen)}
            {...commonKnobs()}
          >
            見出しを入れられるよ
          </AccordionButton>
        </h3>
      )}
      isOpen={isOpen}
      {...commonKnobs()}
    >
      <ColumnBase mt={0.5}>
        <Paragraph marginBottom>
          そのまま見出しを入れると <code>h</code>
          タグ標準のスタイルがついてくるので自分でスタイル打ち消しとか入れないといけないかも
        </Paragraph>
        <Paragraph>ふがふがふがふが</Paragraph>
      </ColumnBase>
    </WithAccordionContent>
  );
};
