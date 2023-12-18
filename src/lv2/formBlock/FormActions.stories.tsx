import * as React from 'react';

import { boolean, select } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import Button from '../../lv1/buttons/Button';
import FormActions from './FormActions';
import Container from '../../lv1/bases/Container';
import Paragraph from '../../lv1/typography/Paragraph';
import ContentsBase from '../../lv1/bases/ContentsBase';
import HeadlineArea from '../headlineArea/HeadlineArea';

export default {
  component: FormActions,
};

export const FormActionsComponent = () => (
  <FormActions
    responsive={boolean('Responsive', true, 'FormActions')}
    position={select(
      'Position',
      { static: 'static', fixed: 'fixed', sticky: 'sticky', undefined },
      undefined,
      'FormActions'
    )}
    align={
      select(
        'Align',
        {
          left: 'left',
          center: 'center',
          undefined: '',
        },
        '',
        'FormActions'
      ) || undefined
    }
    width={
      select(
        'Width',
        {
          normal: 'normal',
          narrow: 'narrow',
          wide: 'wide',
          undefined: '',
        },
        '',
        'FormActions'
      ) || undefined
    }
    {...commonKnobs()}
  >
    <Button primary>保存</Button>
    <Button>キャンセル</Button>
  </FormActions>
);

export const FixedFormActionsWithContainer = () => (
  <Container>
    <ContentsBase>
      <HeadlineArea pageTitle="Fixed FormActions with Container" />
      <Paragraph>Fixed FormActions with Container</Paragraph>
      <FormActions position="fixed" align="left">
        <Button primary>保存</Button>
        <Button>キャンセル</Button>
      </FormActions>
    </ContentsBase>
  </Container>
);

export const StickyFormActionsWithContainer = () => (
  <Container>
    <ContentsBase>
      <HeadlineArea pageTitle="Sticky FormActions with Container" />
      <Paragraph>Sticky FormActions with Container</Paragraph>
      {Array(100)
        .fill(100)
        .map((_, i) => (
          <br key={i} />
        ))}
      <FormActions position="sticky" align="left">
        <Button primary>保存</Button>
        <Button>キャンセル</Button>
      </FormActions>
    </ContentsBase>
  </Container>
);
