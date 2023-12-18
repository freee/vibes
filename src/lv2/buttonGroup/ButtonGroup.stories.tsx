import * as React from 'react';

import { boolean, select } from '@storybook/addon-knobs';
import { commonKnobs } from '../../../stories';
import Button from '../../lv1/buttons/Button';
import ButtonGroup from './ButtonGroup';

export default {
  component: ButtonGroup,
};

export const ButtonGroupComponent = () => (
  <ButtonGroup
    responsive={boolean('Responsive', false, 'ButtonGroup')}
    align={
      select(
        'Align',
        {
          left: 'left',
          center: 'center',
          undefined: '',
        },
        '',
        'ButtonGroup'
      ) || undefined
    }
    mobileButtonLayout={
      select(
        'mobileButtonLayout',
        {
          row: 'row',
          column: 'column',
          undefined: '',
        },
        '',
        'ButtonGroup'
      ) || undefined
    }
    {...commonKnobs()}
  >
    <Button primary>OK</Button>
    <Button>キャンセル</Button>
  </ButtonGroup>
);

export const ResponsiveButtonGroup = () => (
  <ButtonGroup
    responsive={true}
    align={
      select(
        'Align',
        {
          left: 'left',
          center: 'center',
          undefined: '',
        },
        '',
        'ButtonGroup'
      ) || undefined
    }
    mobileButtonLayout={
      select(
        'MobileButtonLayout',
        {
          row: 'row',
          column: 'column',
          undefined: '',
        },
        'row',
        'ButtonGroup'
      ) || undefined
    }
    {...commonKnobs()}
  >
    <Button primary>OK</Button>
    <Button>キャンセル</Button>
  </ButtonGroup>
);

export const Responsive3Buttons = () => (
  <ButtonGroup
    responsive={true}
    align={
      select(
        'Align',
        {
          left: 'left',
          center: 'center',
          undefined: '',
        },
        '',
        'ButtonGroup'
      ) || undefined
    }
    mobileButtonLayout={
      select(
        'MobileButtonLayout',
        {
          row: 'row',
          column: 'column',
          undefined: '',
        },
        'row',
        'ButtonGroup'
      ) || undefined
    }
    {...commonKnobs()}
  >
    <Button appearance="primary">OK</Button>
    <Button>キャンセル</Button>
    <Button appearance="tertiary">他のアクション</Button>
  </ButtonGroup>
);
